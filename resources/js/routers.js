import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    component: require('./Dashboard.vue').default
  },
  {
    path: '/example',
    component: require('./components/ExampleComponent.vue').default
  },
]

export default new VueRouter({
  routes
})