import { createApp } from 'vue'
import { createRouter,createWebHashHistory } from 'vue-router'
// import { defineAsyncComponent } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import  MyDetail from './components/MyDetail.vue'
import App from './App.vue'


const Home = {
    template: '<div>Home</div>',
}
const About = {
    template: '<div>About</div>'
}



const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About},
    { path: '/detail/:id', component: MyDetail}
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)
app.use(ElementPlus);
app.use(router)
app.mount('#app')
