 import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//引入组件
import NoPage from '../pages/no-page.vue';
import Home from '../pages/home.vue';
import Follow from '../pages/follow.vue';
import Column from '../pages/column.vue';
import Detail from '../pages/detail.vue';
import user from '../pages/user.vue';
import Login from '../pages/login.vue';
import Reg from '../pages/reg.vue';
import Search from '../pages/Search.vue';
import Column2 from '../pages/column2.vue';
import Setup from '../pages/Setup.vue';

//创建路由
let routes = [
  {path:'/home',component:Home},
  {path:'/follow',component:Follow},
  {path:'/column',component:Column},
  {path:'/column2',component:Column2},
  {path:'/search',component:Search},
  {path:'/Setup',component:Setup},
  /* {path:'/detail',component:Detail,children:[
    {path:':id',component:Detail}
  ]}, */
  {path:'/detail/:_id',component:Detail,name:'detail'},
  {path:'/user',component:user},
  {path:'/Login',component:Login},
  {path:'/reg',component:Reg},
  {path:'/',redirect:'/home'},
  {path:'*',component:NoPage},
];

let router = new VueRouter({
  routes
});

export default router;