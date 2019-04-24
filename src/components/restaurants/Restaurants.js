import React, {Component} from 'react';
import Menus from './Menus'

class Restaurants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
        }
    }

    toggleHidden() {
        this.setState({hidden: !this.state.hidden})
    }

    render() {
        let style = this.state.hidden ? {display: "none"} : {};
        return (
            this.props.restaurants.map((restaurant, i) => {
                return (
                    <div key={i}>
                        <h3 onClick={() => this.toggleHidden()} key={i}>{restaurant}</h3>
                        <div style={style}>
                            <Menus data={this.props.data[restaurant]}/>
                        </div>
                    </div>
                    )
            })
         )
    }
    
}

export default Restaurants;