import React from 'react'
import TodoList from './component/TodoList'
import store from "./store/TodoStore"

export default class App extends React.Component {
  render() {
    return <div className='todolist-wrapper'>
      <h1>
        Mobx Todolist
      </h1>

      <TodoList store={store} />

    </div>
  }
}
