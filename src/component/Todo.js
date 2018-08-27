import React from "react"
import {observer} from "mobx-react"

let Todo = observer(
  class Todo extends React.Component{


    render(){

      let {todo} = this.props

      return <li key={todo.id+'list'}>
        <input type="checkbox"
               checked={todo.completed}
               value={todo.completed}
               onChange={todo.finishTodo.bind(null,todo)}
        />
        {this.props.todo.value}</li>
    }
  }
)

export default Todo
