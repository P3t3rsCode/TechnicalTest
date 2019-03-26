import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import About from './components/About'
import People from './components/People'

Vue.use(Router)

export default new Router({
  routes: [
 
    {
      path:"/",
      name:"Home",
      component:Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path:"/people",
      name:"people",
      component:People,
     
    }
  ]
})
