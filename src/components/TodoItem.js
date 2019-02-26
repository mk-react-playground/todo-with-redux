import './TodoItem.css'
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggle, remove } from '../actions';

export class TodoItem extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

    render() {
        const { text, checked, id, checkToggle, removeTodo } = this.props;

        return (
            <div className="todo-item" onClick={() => checkToggle(id)}>
                <div className="remove" onClick={() => removeTodo(id)}>&times;</div>
                <div className={`todo-text${checked && ' checked'}`}>
                    <div>{text}</div>
                </div>
                { checked && (
                        <div className="check-mark">✓</div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = dispatch => ({
    checkToggle: id => dispatch(toggle(id)),
    removeTodo: id => dispatch(remove(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)

