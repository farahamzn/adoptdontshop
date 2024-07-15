import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import HomePage from './components/HomePage.vue';
import UserRegister from './components/UserRegister.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/register', component: UserRegister },
    ]
});

const app = createApp(App);
app.component('HomePage', HomePage);
app.component('UserRegister', UserRegister);

app.use(router)
app.mount('#app')
