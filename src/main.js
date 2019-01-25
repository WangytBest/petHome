// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import vueResource from 'vue-resource';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLazyload from 'vue-lazyload';
import App from './App';
import router from './router';
// import NutUI from '@nutui/nutui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(VueAxios, axios);
axios.defaults.withCredentials=true;//让ajax携带cookie
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
Vue.use(VueLazyload, {
  error: '//misc.360buyimg.com/lib/skin/e/i/error-jd.gif',
});
// NutUI.install(Vue);
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
