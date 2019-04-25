import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
    }

    handleChange = (input) => {
        this.setState({
            value: input
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input onChange={(e) => this.handleChange(e.target.value)} type="text" value={this.state.value}></input>
                </form>
                <h2>{this.state.value}</h2>
            </div>
        )
    }
}

export default Form;