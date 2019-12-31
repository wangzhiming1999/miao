import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

//axios.defaults.baseURL='http://39.97.33.178';
Vue.prototype.axios=axios;
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})
import Scroller from '@/components/Scroller';
import Loading from '@/components/Loading';
Vue.component('Scroller',Scroller);//注册全局组件

Vue.component('Loading',Loading);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
