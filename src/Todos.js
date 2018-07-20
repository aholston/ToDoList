import React, { Component } from 'react';


class Todos extends Component {
  constructor() {
    super()

  }


  render() {
    let todosList;
    todosList = this.props.todos.map((obj, idx) => {
      return (
        <li key={idx}><button name={obj.todo} onClick={this.props.deactivate}>Check</button>{obj.todo}</li>
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
