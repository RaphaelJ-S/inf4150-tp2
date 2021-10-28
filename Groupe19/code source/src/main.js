import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import Divider from "@/components/Divider.vue"
Vue.config.productionTip = false

// Global Component
Vue.component("Divider", Divider)

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
