import React from "react"
import {observer} from "mobx-react"
import Todo from './Todo'

// create a observer component
const TodoList = observer(
  class TodoList extends React.Component{

    filterChange = (e)=>{
      this.props.store.filter = e.target.value
    }

    createNew = (e)=>{
      this.props.store.createTodo(e)
    }

    render(){
      let {todos, filteredTodos, clearFinishedTodo} = this.props.store

      return (
        <div>
          <div className="input-area">
            <input type="text" className='filter-input'
                   placeholder="please type a filter"
                   onChange={this.filterChange}/>
          </div>

          <div className="input-area">
            <input type="text" className='create-input'
                   placeholder="create a new todo"
                   onKeyDown={this.createNew}/>

          </div>
          <div className='todo-list'>
          {/*// 迭代 todos 创建 Todo 列表*/}
          {filteredTodos.map(todo => <Todo  todo={todo}/>) }
          </div>

          <div className='clear-button'>
            <button onClick={clearFinishedTodo}>clear finished todos</button>

          </div>

          <h2>{this.props.store.filter}</h2>

        </div>
      )
    }
  }
)

export default TodoList
