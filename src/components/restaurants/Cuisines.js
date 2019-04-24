import React, {Component} from 'react';
import Restaurants from './Restaurants';

class Cuisines extends Component {
    constructor(props) {
        super(props);
        this.state = {
           hidden: true,
        }
    }

    toggleHidden() {
        this.setState({hidden: !this.state.hidden})
    }


    render () {
        let restaurant = Object.keys(this.props.restaurants);
        let style = this.state.hidden ? {display: "none"} : {};
        return (
                <div>
                    <h1 onClick={() => this.toggleHidden()}>{this.props.cuisine}</h1>
                    <div style={style} >
                        <Restaurants restaurants={restaurant} data={this.props.restaurants}/>
                    </div>
                </div>
            )
    }
}

export default Cuisines;