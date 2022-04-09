import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)

/*
1.引入并use Vuex
2.编写并引入一个Vuex.Store对象
3.将该对象注册为Vue原型的属性，以便所有Vue实例访问
 */

import {store} from "@/store/root-store";
import {router} from "@/router";

import VueRouter from "vue-router";
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
