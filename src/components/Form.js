import React, {Component} from 'react';
import {generate as id} from "shortid"

class Form extends Component {

    state = {
        text: ''
    }

    handleChange = ({target}) => this.setState({text: target.value});

    handleSubmit = e => {
        e.preventDefault();
        if (!this.state.text.length) {
            console.log('empty string');
            return;
        }

        this.props.addNote({id: id(), text: this.state.text});
        this.setState({text: ''})
    }

    render() {
        return(
            <div className="form-group">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                           className="form-control"
                           onChange={this.handleChange} 
                           value={this.state.text}/>
                </form>
            </div>
        )
    }
}

export default Form;