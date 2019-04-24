import React, {Component} from 'react';
import Actor from './Actor';

class Movie extends Component {
    constructor(props){
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
                <h3 onClick={() => this.toggleHidden()}>{this.props.movie}</h3>
                <div style={style}>
                    {this.props.data.map((actor, i) =>{
                        return <Actor key={i} actor={actor}/>
                    })}
                </div>
            </div>
        )
    }

}

export default Movie;