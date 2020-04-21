import React, {Component} from 'react'
import photo7 from "./images/delivery.png"
import './styling/successpage.css'

export default class Successpage extends Component{

    constructor(){
        super()

        localStorage.clear()
    }

    render() {
        return (
            <div>
                <div className={'images imagess'}>
                    <img className={'logo'} src="https://images.squarespace-cdn.com/content/57f2699fbe659461b9d87ce2/1523904360805-CKN6GSLHN6S0X1NBZN9Q/TT_NEW_LOGO_2017_F_NOGREY.png?format=1500w&content-type=image%2Fpng"/>
                    <img className={'truck'} src={photo7}/>
                </div>
                

                <div class="jumbotron text-center">
                    <h1 class="display-3">Thank You!</h1>
                    <p class="lead"><strong>Your order has been placed.</strong></p>
                    <hr/>
                    <p class="lead">
                        <a class="btn btn-primary btn-sm" href='/' role="button"><b>Continue Shopping</b></a>
                    </p>
                </div>
            </div>
        );
    }
}