import React, { Component } from 'react'
import { connect } from 'react-redux'
import { create } from '../actions';
import './Form.css';


class Form extends Component {

    state = {
        input: ''
    }

    onChange = (evt) => {
        this.setState({
            input: evt.target.value
        })
    }

    onKeyPress = (evt) => {
        if ( evt.key === 'Enter' ) {
            this.props.createTodo(this.state.input);
            this.setState({
                input: '',
            })
        }
    }

    render() {
        const { input } = this.state;

        return (
            <div className="form">
                <input
                    value={input}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                />
                <button className="create-button" onClick={() => this.props.createTodo(input)}>추가</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => ({
    createTodo: text => dispatch(create(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);