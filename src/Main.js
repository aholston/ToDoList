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
    this.deactivate = this.deactivate.bind(this)
  }


  deactivate(obj) {
    this.setState({
      todos: this.state.todos.find((todo) => {
        if (todo === obj) {
          todo.active = false;
        }
      })
    })
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.concat({active: true, todo: e.target.elements.todo.value})
    })
  }


  render() {
    return(
      <div>
        <h1>ToDo's</h1>
        <Add onSubmit={this.onSubmit}/>
        <Todos todos={this.state.todos} deactivate={this.deactivate} />
      </div>
  )
};
}

export default Main
