import React, {Component}  from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from "./componenets/homepage";
import Beverages from "./componenets/beverages";
import Dairy from "./componenets/dairy";
import Grocery from "./componenets/grocery";
import Produce from "./componenets/produce";
import Shoppingcart from "./componenets/shoppingcart";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import Stripe from 'stripe'

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {data} from "./componenets/data/dummyData";


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inventory: []                                                                                                   //TODO: Different arrays for all categories
        }
        this.loadInventory()
    }


    checkout = async (shoppingCart) => {
        console.log('check out')
        const stripe = new Stripe("sk_test_67KNZkMcU7AfqYYtpQeff48600Xgjb74Vv")

        let itemsToSend = []

        shoppingCart.map((item) =>{
            let newItem = {
                name: item.name,
                amount: item.price,
                quantity: item.quantity,
                currency: 'usd',
            }

            itemsToSend.push(newItem);
        })

        console.log('check out2')

        let session = await stripe.checkout.sessions.create({
            line_items: itemsToSend,
            success_url: "https://www.google.com", //CHANGE
            cancel_url: "https://www.yahoo.com",
            payment_method_types: ['card']
        })

        console.log(session)
        await stripe.redirectToCheckout({
            success_url: "https://www.google.com", //CHANGE
            cancel_url: "https://www.yahoo.com",
            sessionId: session
        }).then((res) => {
            console.log(res)
        })






        // stripePromise.redirectToCheckout({
        //     // items: [
        //     //     // Replace with the ID of your SKU
        //     //     {
        //     //         sku: 'sku_123',
        //     //         quantity: 1
        //     //     },
        //     // ],
        //     successUrl: 'https://your-website.com/success',
        //     cancelUrl: 'https://your-website.com/canceled',
        // })

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
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;