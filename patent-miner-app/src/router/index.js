import Vue from 'vue';
import Router from 'vue-router';
import HomeIndex from '@/view/home/Index';
import AccountRegister from '@/view/account/Register';
import AccountForgotPassword from '@/view/account/ForgotPassword';
import Show from '@/view/patent/Show';
import Login from '@/view/account/Login';


Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    component: HomeIndex,
  }, {
    path: '/home',
    component: HomeIndex,
  }, {
    path: '/home/index',
    component: HomeIndex,
  }, {
    path: '/account/register',
    component: AccountRegister,
  }, {
    path: '/account/forgotPassword',
    component: AccountForgotPassword,
  }, {
    path: '/patent/show',
    component: Show,
  }, {
    path: '/account/login',
    component: Login,
  }],
});
