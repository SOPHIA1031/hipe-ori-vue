import Vue from 'vue'
import VueRouter from 'vue-router'
import upLoad from '../components/upLoad.vue'
import index from '../components/index.vue'
import query from '../components/query.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/upload',
    name: 'index',
    component: index,
    children: [{
      path: '/upload',
      name: 'upLoad',
      component: upLoad
    },
    {
      path: '/query',
      name: 'query',
      component: query
    }]

  }
]

const router = new VueRouter({
  routes
})

export default router
