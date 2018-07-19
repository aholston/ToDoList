import React, { Component } from 'react';


class Todos extends Component {
  constructor() {
    super()
    this.checkTodo = this.checkTodo.bind(this)
  }

  checkTodo(e) {
    let thisTodo = this.props.todos.find((obj, idx) => {
      console.log(obj);
      console.log(e.target.name)
      if (obj.todo === e.target.name) {
        return obj
      }
    })
    this.props.deactivate(thisTodo)
  }

  render() {
  let todosList;
  todosList = this.props.todos.map((obj, idx) => {
    return (
      <li key={idx}><button name={obj.todo} onClick={this.checkTodo}>Check</button>{obj.todo}</li>
    )
  })

  return (
    <div>
      <ul>
        {todosList}
      </ul>
    </div>
  )
}
}

export default Todos
