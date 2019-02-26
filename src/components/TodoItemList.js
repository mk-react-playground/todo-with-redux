import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import './TodoItemList.css';

export class TodoItemList extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
      const { todos } = this.props;
    return (
        todos.map(todo => (
            <TodoItem text={todo.text} checked={todo.checked} id={todo.id} key={todo.id}/>
        ))
    )
  }
}

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemList)

