import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

const store = new Vuex.Store({

});

createApp(App).use(router).mount('#app')
