import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import Home from './Home.vue'

Vue.compontent ('app-server=status', Home)

new Vue({
  el: '#app',
  data: {
    name: 'Jordan Ashment',
    age: 27
  },
  render: h => h(App)
})
