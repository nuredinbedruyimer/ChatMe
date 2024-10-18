import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia"
import axios from "axios"
import router from './router'

axios.defaults.baseURL = "http://localhost:8000"

const app = createApp(App)



// use axios and router here
app.use(createPinia())



app.use(router, axios)
app.mount('#app')
