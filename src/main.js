import Vue from 'vue'
// 组件
import App from './App.vue'
//插件
import ElementUi from "./plugins/element-ui";
import VueRouter from "vue-router";
import axios from "axios";
import { Message } from "element-ui";
//路由
import router from "./router";
//vuex
import store from "./store";
//样式
import "./assets/iconfont.css";

Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(VueRouter)
Vue.config.productionTip = false

// axios 拦截器
axios.interceptors.request.use(function (config) {
  // 请求发送前
  let token = localStorage.getItem('token')
  if (token) {
    config.headers.authorization = token
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么

  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  if (error.response.status === 401 && vm.$route.fullPath !== '/') {
    vm.$router.push("/login")
  }
  console.log(vm);
  return Promise.reject(error);
});


const vm = new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$axios = axios
    Vue.prototype.$message = Message
  }
}).$mount('#app')


