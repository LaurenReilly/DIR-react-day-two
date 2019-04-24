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
        let restaurants = Object.keys(this.props.restaurants);
        let style = this.state.hidden ? {display: "none"} : {};
        return (
                <div>
                    <h1 onClick={() => this.toggleHidden()}>{this.props.cuisine}</h1>
                    <div style={style} >
                        {restaurants.map((restaurant, i) => {
                            return <Restaurants key={i} restaurant={restaurant} data={this.props.restaurants[restaurant]}/>
                        })}
                    </div>
                </div>
            )
    }
}

export default Cuisines;