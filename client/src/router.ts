import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

const Profile = () => import('@/views/Profile.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index.html',
      name: 'home',
      component: Home,
      alias: '/'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/profile/:platform/:gamerTag',
      name: 'profile',
      component: Profile
    }
  ]
});
