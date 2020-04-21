import React, {Component} from 'react';
import "./styling/homepage.css"
import photo1 from "./images/slideshowphoto1.jpg"
import photo2 from "./images/slideshowphoto2.jpg"
import photo3 from "./images/slideshowphoto3.png"
import photo4 from "./images/slideshowphoto4.jpg"
import photo5 from "./images/slideshowphoto5.png"
import photo6 from "./images/address.png"
import photo7 from "./images/delivery.png"
import photo8 from "./images/aboutus.png"
import photo9 from "./images/ourstory.png"
import photo10 from "./images/slideshowphoto10.png"
import photo11 from "./images/slideshowphoto11.png"
import photo12 from "./images/slideshowphoto12.jpg"
import storephoto from "./images/storephoto.jpeg"
import photo13 from "./images/slideshowphoto13.jpg"
import Sidebar from "./sidebar";

class Homepage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            myIndex: 0
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

    // slideshow for the homepage
    slideshow = () => {
        let x = document.getElementsByClassName("mySlides");
        if(x[this.state.myIndex] !== undefined)
        {
            let i;

            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }

            this.state.myIndex = this.state.myIndex + 1;

            if (this.state.myIndex > x.length)
            {
                // this.setState({myIndex: 1})
                this.state.myIndex = 1
            }

            x[this.state.myIndex - 1].style.display = "block";
            setTimeout(this.slideshow, 3000);
        }
    }

    openModal = () => {
// When the user clicks the button, open the modal
        document.getElementById("animatedModal").style.display = 'block';
    }

    closeModal = () => {
        document.getElementById("animatedModal").style.display = "none"
    }


    render() {
        return (
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.min.css"/>

                <body id={'bodyy'} className="w3-content">

                                        {/*------------------------------sidebar menu------------------------------*/}

                    <nav className=" w3-collapse w3-sidebar  w3-top w3-bar-block" id="mySidebar">
                        <Sidebar history={this.props.history} choice={'home'}/>
                    </nav>

                                    {/*------------------------------Top menu on small screens------------------------------*/}
                    {/* <header className=" fixed-top w3-top w3-hide-large w3-black w3-xlarge">
                        <div className=" alert alert-info"><b>There is a $10 delivery fee on every order</b></div>
                    </header> */}
                    
                    <header id={'smallScreenHeader'} className="w3-bar fixed-top w3-top w3-hide-large w3-black w3-xlarge">

                        <div className={'rightbuttons'}>
                            {/* <p>There is a $10 delivery fee on every order</p> */}
                            <a onClick={() => this.props.history.push('/cart')} href={''}><i className="fa fa-shopping-cart cart"> Cart</i></a>
                            <a href="javascript:void(0)" className="w3-bar-item w3-button w3-padding-24 w3-right" onClick={this.w3_open}><i className="fa fa-bars"></i></a>
                        </div>
                    </header>

                    {/*Overlay effect when opening sidebar on small screens*/}
                    <div className="w3-overlay w3-hide-large" onClick={this.w3_close}
                     title="close side menu" id="myOverlay"></div>

                                    {/*------------------------------PAGE CONTENT------------------------------*/}
                    <div className="w3-main">

                        {/*Push down content on small screens*/}
                        <div className="w3-hide-large"></div>

                        {/*top header*/}
                        <header className="w3-container bigscreencart">
                            <p className="w3-right">
                                <a onClick={() => this.props.history.push('/cart')} href={''}><i className="w3-xlarge w3-right fa fa-shopping-cart w3-margin-right"> Cart</i></a>
                            </p>
                        </header>

                                     {/*------------------------------Slide Show------------------------------*/}

                        <div className={'images'}>
                            <img className={'logo'} src="https://images.squarespace-cdn.com/content/57f2699fbe659461b9d87ce2/1523904360805-CKN6GSLHN6S0X1NBZN9Q/TT_NEW_LOGO_2017_F_NOGREY.png?format=1500w&content-type=image%2Fpng"/>
                            <img className={'truck'} src={photo7}/>
                        </div>

                         <div className={"outerdiv"}>
                            <img className="mySlides w3-animate-right" src={photo5}/>
                            <img className="photo2 mySlides w3-animate-right" src={photo2}/>
                            <img className="mySlides w3-animate-right" src={photo3}/>
                            <img className="mySlides w3-animate-right" src={photo4}/>
                            <img className="mySlides w3-animate-right" src={photo10}/>
                            <img className="mySlides w3-animate-right" src={photo11}/>
                            <img className="mySlides w3-animate-right" src={photo12}/>
                             <img className="mySlides w3-animate-right" src={photo13}/>
                            <img onLoad={this.slideshow} className="mySlides w3-animate-right" src={photo1}/>
                         </div>


                        {/*-----------ORDER BOX & ADDRESS------------*/}

                        <div id={'outerDIVinfo'}>

                            <div className={'delivertext'}>
                            </div>


                            <div id={'address'}>
                                <h1><b>Find Us In Staten Island, NY</b></h1>

                                <div id={'mapandaddress'}>

                                    <div>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.6338548601516!2d-74.15375598482414!3d40.54967775546745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24bb7114c2733%3A0xd7c1ffcd04c318ba!2sTop%20Tomato%20Superstore!5e0!3m2!1sen!2sus!4v1586978876794!5m2!1sen!2sus"
                                            width="400" height="400" frameBorder="0" allowFullScreen=""
                                            aria-hidden="false" tabIndex="0"></iframe>
                                    </div>

                                    <div id={'addressdiv'}>
                                        <img src={photo6}/>
                                        <p><b>Great Kills</b><br/>
                                            4045 Amboy Rd<br/>
                                            Staten Island, NY 10308<br/>
                                            718-605-3200<br/><br/>
                                            <b>HOURS:</b><br/>
                                            7AM TO 8PM DAILY</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*-----------ABOUT US------------*/}
                        <div id={'aboutus'}>
                            <img id={'ourstory'} src={photo9} alt=""/>
                            <img id={'servingtext'} src={photo8} alt=""/>
                            <p>Thirty-five years ago we began selling produce at a Farmers Market in Queens. Today,
                                Top Tomato has become your leading superstore providing all you need to create delicious
                                gourmet Italian meals and superb catering for any occasion.

                                Throughout the years, Top Tomato has continued to open and operate a number of stores in
                                New York. At our peak, we operated a total of 13 stores at one time. We are proud to
                                have become a staple in any community we have been a part of. Top Tomato works to
                                continuously provide our customers with only the finest ingredients and delicious meats
                                in addition to the freshest produce. This began in 1998 when our Amboy Road location
                                became the first store to sell grocery and have its own deli and meat department.
                                Since then, our stores have been a prime location for our community.
                            </p>
                            <img height={'400'} width={'600'} id={'storephoto'} src={storephoto} alt=""/>
                        </div>

                    </div>
                </body>

            </div>
        );
    }
}

export default Homepage;