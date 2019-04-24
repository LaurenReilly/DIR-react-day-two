import React, {Component} from 'react';
import Movie from './Movie';

class Genre extends Component {
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
        let movies = Object.keys(this.props.data);
        return (
            <div>
                <h1 onClick={() => this.toggleHidden()}>{this.props.genre}</h1>
                <div style={style}>
                    {movies.map((movie, i) =>{
                        return <Movie key={i} movie={movie} data={this.props.data[movie]}/>
                    })}
                </div>
            </div>
        )
    }

}

export default Genre;