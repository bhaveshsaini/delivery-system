import React, {Component} from 'react';
// CSS FOR THIS PAGE IS IN HOMEPAGE.CSS
class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id={'firstdiv'} className="w3-padding-64 w3-large w3-text-grey">
                    <a id={this.props.choice === 'home' ? 'commonsidebarid' : ''} onClick={() => this.props.history.push('/')} className="w3-bar-item w3-button home">Home</a>
                    <a id={this.props.choice === 'produce' ? 'commonsidebarid' : ''} onClick={() => this.props.history.push('/produce')} className="w3-bar-item w3-button">Produce</a>
                    <a id={this.props.choice === 'beverages' ? 'commonsidebarid' : ''} onClick={() => this.props.history.push('/beverages')} className="w3-bar-item w3-button">Beverages</a>
                    <a id={this.props.choice === 'grocery' ? 'commonsidebarid' : ''} onClick={() => this.props.history.push('/grocery')} className="w3-bar-item w3-button">Grocery</a>
                    <a id={this.props.choice === 'dairy' ? 'commonsidebarid' : ''} onClick={() => this.props.history.push('/dairy')} className="w3-bar-item w3-button">Dairy</a>
                </div>
            </div>
        );
    }
}


export default Sidebar