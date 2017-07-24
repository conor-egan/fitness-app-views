import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import viewDay from '@/components/ViewDay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/view-day',
      component: viewDay
    }

  ]
})
