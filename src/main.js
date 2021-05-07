import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '@/router'
import VueMoment from 'vue-moment'

Vue.config.productionTip = false

Vue.use(VueMoment, {
  //
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
