import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todo from '@/components/todo/Todo'
import TodoList from '@/components/todo/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo,
      children: [
        {
          path: '',
          component: TodoList
        }
      ]
    }
  ]
})
