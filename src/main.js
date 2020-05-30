import Vue from 'vue'
import App from './App.vue'
import router from './router/main'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false


Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
