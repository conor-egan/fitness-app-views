// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import 'vue-awesome/icons'

require('./assets/sass/main.scss')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <ul class="navbar">
        <li class="navbar-link"><router-link to="/">Profile</router-link></li>
        <li class="navbar-link"><router-link to="/">Home</router-link></li>
        <li class="navbar-link"><router-link to="/view-day">View Day</router-link></li>
        <li class="navbar-link"><router-link to="/view-day">View Day</router-link></li>
        <li class="navbar-link"><router-link to="/">Select Program</router-link></li>
        <li class="navbar-link"><router-link to="/">Create Program</router-link></li>
      </ul>
      <router-view></router-view>
    </div>`
}).$mount('#app')
