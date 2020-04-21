import React, {Component}  from 'react';
import logo from './logo.svg';
import './App.css';

import Homepage from "./componenets/homepage";
import Beverages from "./componenets/beverages";
import Dairy from "./componenets/dairy";
import Grocery from "./componenets/grocery";
import Produce from "./componenets/produce";
import Shoppingcart from "./componenets/shoppingcart";
import Successpage from "./componenets/successpage"

import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import Stripe from 'stripe'
import Axios from "axios";
import qs from 'qs'

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {data} from "./componenets/data/dummyData";


class App extends Component {                                                                                                //TODO: Tax
                                                                                                                            //TODO: Add delivery charge on checkout page        **
                                                                                                                            //TODO: disable checkout button if no items in cart **
    constructor(props) {                                                                                                    //TODO: disable checkout button if total < $50      **
        super(props);                                                                                                       
                                                                                                                            //TODO: make a success page                         **
        this.state = {                                                                                                      //TODO: clear localstorage on success page          **
            inventory: []                                                                                                   //TODO: Different arrays for all categories
        }                                                                                                                   //TODO: change url in success page
        this.loadInventory()
    }


    checkout = async (shoppingCart) => {
        const stripe = new window.Stripe("pk_test_8VjXprK8nQX2yvB2grjVp8HV00BjnoyUve")

        let itemsToSend = []

        shoppingCart.map((item) => {
            let newItem = {
                name: item.name,
                amount: item.price * 100,
                quantity: item.quantity,
                currency: 'usd',
            }

            itemsToSend.push(newItem);
        })

        itemsToSend.push({

            name: "Delivery Charge",
            amount: 1000 ,
            quantity: 1,
            currency: 'usd',

        })

        let send = {
        success_url: 'http://localhost:3000/success',                                                                              // change this in production
            cancel_url: 'http://localhost:3000/cart',                                                                              // change this in production
            payment_method_types: ['card'],
            line_items: itemsToSend,
            shipping_address_collection: {
                allowed_countries: ["US"]
            }
        }
                                                                                                                                    //TODO: PUT THIS IN AN ENVIRONMENT VARIABLE

       Axios({ method: 'POST', url: 'https://api.stripe.com/v1/checkout/sessions', headers: {Authorization: "Bearer " + "sk_test_67KNZkMcU7AfqYYtpQeff48600Xgjb74Vv", 'Content-Type': "application/x-www-form-urlencoded" }, data: qs.stringify(send)
                      
                   }) .then(async (res) => {
                
                    await stripe.redirectToCheckout({

                        sessionId: res.data.id
                      }).then( (result) => {
                          console.log(result)
                
                      }) .catch((error) => console.log(error));

             })

    }


    addToCart = (name, price, quantity) => {
       
        this.state.inventory.map((info) => {
            if (info.name === name) {
                info.quantity = parseInt(quantity);

            }
        })
        localStorage.setItem("inventoryStorage", JSON.stringify(this.state.inventory) )
    }

    loadInventory = () => {

        if (localStorage.getItem("inventoryStorage") !== null){ //if data exists in localstorage, get quantity from there

            let item = {}
            let inventoryFromLocalStorage = JSON.parse(localStorage.getItem('inventoryStorage'))
            let originalData = data.split('\n');

            originalData.map((info) => {

                let found = false
                let nameOfItem = info.split(',')[0]
                let priceOfItem = info.split(',')[1]

                inventoryFromLocalStorage.map((inventoryData) => {
                    if(inventoryData.name === nameOfItem)
                    {
                        item = {
                            name: nameOfItem,
                            price: priceOfItem,
                            quantity: inventoryData.quantity
                        }
                        found = true
                    }

                }) //END LOCALSTORAGE FOR-EACH

                if(!found)
                {
                    item = {
                        name: nameOfItem,
                        price: priceOfItem,
                        quantity: 0
                    }
                }

                this.state.inventory.push(item);
            }) //END ORIGINALDATA FOR-EACH

        }

       else
           {
                let splittedData = data.split('\n');

                splittedData.map((info) => {

                    let item = {
                        name:info.split(',')[0],
                        price: parseFloat(info.split(',')[1]),
                        quantity: 0
                    };
                    this.state.inventory.push(item);

                })
            }
    }

    render() {
        return (
            <BrowserRouter>
                <div className={'App'}>
                    <Switch>
                        <Route path={'/'} exact render={
                            props => (
                                <Homepage {...props}/>
                            )
                        }
                        />

                        <Route path={'/beverages'} exact render={
                            props => (
                                <Beverages {...props} addToCart = {this.addToCart} inventory = {this.state.inventory}/>
                            )
                        }/>

                        <Route path={"/dairy"} exact render = {
                            props => (
                                <Dairy {...props} addToCart = {this.addToCart} inventory = {this.state.inventory}/>
                            )
                        }/>

                        <Route path={"/grocery"} exact render = {
                            props => (
                                <Grocery {...props} addToCart = {this.addToCart} inventory = {this.state.inventory}/>
                            )
                        }/>

                        <Route path={"/produce"} exact render = {
                            props => (
                                <Produce {...props} addToCart = {this.addToCart} inventory = {this.state.inventory}/>
                            )
                        }/>

                        <Route path={"/cart"} exact render = {
                            props => (
                                <Shoppingcart {...props} addToCart = {this.addToCart} checkout = {this.checkout} inventory = {this.state.inventory}/>
                            )
                        }/>

                        <Route path={"/success"} exact render = {
                            props => (
                                <Successpage/>
                            )
                        }/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;