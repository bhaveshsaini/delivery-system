import React, {Component} from 'react';
import "./styling/homepage.css"

class Homepage extends Component {

    constructor(props) {
        super(props);
    }


    // Click on the "Jeans" link on page load to open the accordion for demo purposes
    // document.getElementById("myBtn").click();


    // Accordion
     myAccFunc = () => {
        let x = document.getElementById("demoAcc");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }

    // Open and close sidebar
     w3_open = () => {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("myOverlay").style.display = "block";
    }

    w3_close = () => {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
    }

    render() {
        return (
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                <body id={'bodyy'} className="w3-content">

                {/*sidebar menu*/}
                <nav className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" id="mySidebar">

                    <div className="logodiv">
                        <i onClick={this.w3_close} className="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
                        <img src="https://images.squarespace-cdn.com/content/57f2699fbe659461b9d87ce2/1523904360805-CKN6GSLHN6S0X1NBZN9Q/TT_NEW_LOGO_2017_F_NOGREY.png?format=1500w&content-type=image%2Fpng"/>
                    </div>

                    <div id={'firstdiv'} className="w3-padding-64 w3-large w3-text-grey">
                        <a onClick={() => this.props.history.push('/produce')} className="w3-bar-item w3-button">Produce</a>
                        <a onClick={() => this.props.history.push('/beverages')} className="w3-bar-item w3-button">Beverages</a>
                        <a onClick={() => this.props.history.push('/grocery')} className="w3-bar-item w3-button">Grocery</a>
                        <a onClick={() => this.props.history.push('/dairy')} className="w3-bar-item w3-button">Dairy</a>
                    </div>

                </nav>

                {/*Top menu on small screens*/}
                <header id={'smallScreenHeader'} className="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
                    <div className="w3-bar-item w3-padding-24 w3-wide ">TOP TOMATO</div>
                    <a href="javascript:void(0)"
                       className="w3-bar-item w3-button w3-padding-24 w3-right" onClick={this.w3_open}><i
                        className="fa fa-bars"></i></a>
                </header>

                {/*Overlay effect when opening sidebar on small screens*/}
                <div className="w3-overlay w3-hide-large" onClick={this.w3_close}
                     title="close side menu" id="myOverlay"></div>

                {/*PAGE CONTENT*/}
                <div className="w3-main">

                    {/*Push down content on small screens*/}
                    <div className="w3-hide-large"></div>

                    {/*top header*/}
                    <header className="w3-container w3-xlarge">
                        <p className="w3-right">
                            <i className="fa fa-shopping-cart w3-margin-right"></i>
                            <i className="fa fa-search"></i>
                        </p>
                    </header>
                </div>
                </body>
            </div>
        );
    }
}

export default Homepage;






{/*Product grid*/}
{/*<div className="w3-row w3-grayscale">*/}
{/*    <div className="w3-col l3 s6">*/}
{/*        <div className="w3-container">*/}
{/*            <img className={'imageclass'} src="/w3images/jeans1.jpg"/>*/}
{/*                <p>Ripped Skinny Jeans<br/><b>$24.99</b></p>*/}
{/*        </div>*/}
{/*        <div className="w3-container">*/}
{/*            <img className={'imageclass'} src="/w3images/jeans2.jpg"/>*/}
{/*                <p>Mega Ripped Jeans<br/><b>$19.99</b></p>*/}
{/*        </div>*/}
{/*    </div>*/}

{/*    <div className="w3-col l3 s6">*/}
{/*    <div className="w3-container">*/}
{/*        <div className="w3-display-container">*/}
{/*            <img className={'imageclass'} src="/w3images/jeans2.jpg"/>*/}
{/*            <span className="w3-tag w3-display-topleft">New</span>*/}
{/*        </div>*/}
{/*        <p>Mega Ripped Jeans<br/><b>$19.99</b></p>*/}
{/*    </div>*/}
{/*    /!*<div className="w3-container">*!/*/}
{/*    /!*    <img className={'imageclass'} src="/w3images/jeans3.jpg" />*!/*/}
{/*    /!*    <p>Washed Skinny Jeans<br/><b>$20.50</b></p>*!/*/}
{/*    /!*</div>*!/*/}
{/*    </div>*/}

{/*    <div className="w3-col l3 s6">*/}
{/*        <div className="w3-container">*/}
{/*            <img className={'imageclass'} src="/w3images/jeans3.jpg"/>*/}
{/*                <p>Washed Skinny Jeans<br/><b>$20.50</b></p>*/}
{/*        </div>*/}
{/*        <div className="w3-container">*/}
{/*            <div className="w3-display-container">*/}
{/*                <img className={'imageclass'} src="/w3images/jeans4.jpg"/>*/}
{/*                    <span className="w3-tag w3-display-topleft">Sale</span>*/}
{/*                    <div className="w3-display-middle w3-display-hover">*/}
{/*                        <button className="w3-button w3-black">Buy now <i*/}
{/*                            className="fa fa-shopping-cart"></i></button>*/}
{/*                    </div>*/}
{/*            </div>*/}
{/*            <p>Vintage Skinny Jeans<br/><b className="w3-text-red">$14.99</b></p>*/}
{/*        </div>*/}
{/*    </div>*/}

{/*    <div className="w3-col l3 s6">*/}
{/*        <div className="w3-container">*/}
{/*            <img className={'imageclass'} src="/w3images/jeans4.jpg"/>*/}
{/*                <p>Vintage Skinny Jeans<br/><b>$14.99</b></p>*/}
{/*        </div>*/}
{/*        <div className="w3-container">*/}
{/*            <img className={'imageclass'} src="/w3images/jeans1.jpg"/>*/}
{/*                <p>Ripped Skinny Jeans<br/><b>$24.99</b></p>*/}
{/*        </div>*/}
{/*    </div>*/}
{/*</div>*/}


{/*Image header*/}
{/*<div className="w3-display-container w3-container">*/}
{/*    <img src="/w3images/jeans.jpg" alt="Jeans"/>*/}
{/*        <div id={'divID'} className="w3-display-topleft w3-text-white">*/}
{/*            <h1 className="w3-jumbo w3-hide-small">New arrivals</h1>*/}
{/*            <h1 className="w3-hide-large w3-hide-medium">New arrivals</h1>*/}
{/*            <h1 className="w3-hide-small">COLLECTION 2016</h1>*/}
{/*        </div>*/}
{/*</div>*/}

{/*<div className="w3-container w3-text-grey" id="jeans">*/}
{/*    <p>8 items</p>*/}
{/*</div>*/}