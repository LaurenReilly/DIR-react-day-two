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
                    <div>
                        <h3 onClick={() => this.toggleHidden()}>{this.props.restaurant}</h3>
                        <div style={style}>
                            {this.props.data.map((menuItem, i) =>{
                                return <Menus key={i} item={menuItem}/>
                            })}
                        </div>
                    </div>
                    )
    }
    
}

export default Restaurants;