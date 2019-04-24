import React, {Component} from 'react';
import Output from './Output';

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }

    handleChange(e) {
        this.setState({text: e.target.value})
    }

    render() {
        return (
            <div>
                <p>Put some text in this box</p>
                <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.text}></input>
                <h2>Then the text will show up below:</h2>
                <Output text={this.state.text}/>
            </div>
        )
    }
}

export default Input;