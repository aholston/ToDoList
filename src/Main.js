import React, { Component } from 'react';
import Add from './Add';
import Todos from './Todos'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
    this.onSubmit = this.onSubmit.bind(this)

  }

  checkTodo(e) {
    console.log(e.target.name)
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.concat({active: true, todo: e.target.elements.todo.value})
    })

    console.log(this.state.todos)
  }


  render() {
    return(
      <div>
      <h1>ToDo's</h1>
      <Add onSubmit={this.onSubmit}/>
      <Todos todos={this.state.todos} checkTodo={this.checkTodo} />
    </div>
  )
};
}

export default Main
