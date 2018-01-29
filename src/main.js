import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import NavBar from './components/NavBar.vue'
import Classes from './components/Classes.vue'
import Movies from './components/movies.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
// import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)
Vue.component('classes', Classes);
Vue.component('navBar', NavBar);
Vue.component('movies', Movies);
Vue.use(VueResource);
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes
})
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
