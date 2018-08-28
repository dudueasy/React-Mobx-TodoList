import {
  decorate,
  observable,
  action,
  autorun,
  computed
} from 'mobx'
import React from 'react'

class Todo {
  constructor(value){
    this.value = value
  }

  id =  Date.now()
  completed= false

  finishTodo(todo){
    todo.completed = !todo.completed
  }
}

class TodoStore{
  todos = []
  filter = ''

  get filteredTodos(){
    return this.todos.filter((todo)=>
      todo.value.indexOf(this.filter) >=0 || !this.filter
    )
  }
  // define an action
  createTodo(value){
      let newTodo = new Todo(value)
      this.todos.push(newTodo)
  }

  clearFinishedTodo = ()=>{
    // user store.replace() to modify store itself
    this.todos.replace( this.todos.filter((todo)=> !todo.completed) )
  }
}

// 使用 decorate 包装Store类
// decorate(stateObj, {
//  key1: observable,
// })

decorate( Todo, {
  value: observable,
  completed: observable,
  finishTodo: action
})

decorate( TodoStore, {
  todos: observable,
  filter: observable,
  filteredTodos: computed,
  createTodo:action,
  clearFinishedTodo:action
})



// 实现 console 访问 store 对象
let todoStore = window.store = new TodoStore()

let buyFoodTodo = new Todo("buy food")
let homeworkTodo= new Todo("do homework")

todoStore.todos.push(buyFoodTodo)
todoStore.todos.push(homeworkTodo)

autorun(()=>{
})

export default todoStore
