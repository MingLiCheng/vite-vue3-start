import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import Router from '@/router/index'
import Store from '@/store/index'
import App from './App.vue'

createApp(App).use(ElementPlus).use(Router).use(Store).mount('#app')
