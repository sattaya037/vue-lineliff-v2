import Home from './App.vue';
import Register from './components/register.vue';
import Login from './components/Login.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
];

export default routes;