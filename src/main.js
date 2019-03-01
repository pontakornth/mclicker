import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'

import './styles/quasar.styl'
import lang from 'quasar-framework/i18n/en-us'
import 'quasar-extras/animate'
import 'quasar-extras/roboto-font'
import 'quasar-extras/material-icons'
import 'quasar-extras/fontawesome'
import Quasar from 'quasar'

Vue.use(Quasar, {
  config: {}, i18n: lang
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
