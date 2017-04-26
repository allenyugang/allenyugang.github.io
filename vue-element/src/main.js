// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-default/index.css'
import table from './components/slideList/table.vue'
import description from './components/slideList/description.vue'
import form from './components/slideList/form.vue'
import login from './components/login/login.vue'
import home from './components/common/home.vue'
import mark from './components/slideList/mark.vue'
import Fumarklist from './components/slideList/FumarkList.vue'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.use(VueRouter)
/* eslint-disable no-new */
const routes = [
  {path: '/login', component: login, hidden: true},
  {
    path: '/',
    component: home,
    name: '',
    leaf: true,
    children: [
      {path: '/description', component: description, name: '自述'}
    ]
  },
  {
    path: '/home',
    component: home,
    name: '基本表单',
    children: [
      {path: '/table', component: table, name: '表格'},
      {path: '/form', component: form, name: '表单'}
    ]
  },
  {
    path: '/home',
    component: home,
    name: '基本图表',
    children: [
      {path: '/mark', component: mark, name: '图标'},
      {path: '/Fumarklist', component: Fumarklist, name: '图表单'}
    ]
  }
]
const router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  linkActiveClass: 'active',
  router,
  store,
  render: h => h(App)
})
router.push('/login')

