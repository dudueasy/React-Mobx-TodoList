import {  decorate, observable, autorun} from 'mobx'
import React from 'react'

class TodoStore{
  todos = ["buy milk", "buy food"]
  filter = ''
}

// 实现 console 访问 store 对象
let store = window.store = new TodoStore()

// 使用示例:
// decorate(stateObj, {
//  key1: observable,
// })

decorate(store, {
  todos: observable,
  filter: observable,
})

autorun(()=>{
  console.log("autorun is triggered")
  console.log(store.todos[0])
})

export default store
