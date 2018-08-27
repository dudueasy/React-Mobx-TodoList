import {  decorate, observable, autorun} from 'mobx'
import React from 'react'

class TodoStore{
  constructor(){
    this.todos = ["buy milk", "buy food"]
    this.filter = ''
  }
}

// 实现 console 访问 store 对象
let store = window.store = new TodoStore()

// 使用 decorate() 包装store

// 使用示例:
// decorate(stateObj, {
//  key1: observable,
//  key2: computed,
//  key3: action
// })

decorate(store, {
  todos: observable,
  filter: observable,
})

export default store

autorun(()=>{
  console.log("autorun is triggered")
  console.log(store.todos[0])
})

