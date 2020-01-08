import { store } from './app';

const Login = () => import('./components/auth/login.vue');
const Register = () => import('./components/auth/register.vue');
const Home = () => import('./components/weatherapp/home.vue');
const Weather = () => import('./components/weatherapp/weather/weather.vue');


const routes = [
    // { path: '/home', component: Home },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta:   {
                    loggedIn: true,
                }
    },
    {
        path: '/register',
        component: Register,
        name: 'register'
    },
    {
        path: '/home',
        component: Home,
        name: 'home'
    },
    {
        path: '/',
        component: Home,
    },
    {
        path: '/:locationName',
        component: Weather,
        name: 'weather',
        props: true,
    },



];

export default routes;

