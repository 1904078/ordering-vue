import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import MenuContainer from '@/components/tabbar/MenuContainer.vue'
import CartContainer from '@/components/tabbar/CartContainer.vue'
import OrderContainer from '@/components/tabbar/OrderContainer.vue'
import MyContainer from '@/components/tabbar/MyContainer.vue'
import Login from '@/views/login.vue'
import { rcompareIdentifiers } from 'semver'
import { renderFile } from 'ejs'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect:'menu',
      children:[
        {
          path:'',
          redirect:'menu'
        },
        {
          path: 'menu',
          name: 'Menu',
          component: MenuContainer
        },{
          path: 'cart',
          name: 'cart',
          component: CartContainer
        },
        {
          path: 'order',
          name: 'order',
          component: OrderContainer
        },
        {
          path: 'my',
          name: 'my',
          component: MyContainer
        },
      ]
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  //  {
  //    path:'/home',
  //    redirect:'/menu'
  //  },
  //   {
  //     path: '/menu',
  //     name:'menu'
  //     component: MenuContainer
  //   },
  // {
  //   path:'/',
  //   redirect:'/home'
  // },
  // {
  //   path:'/menu',
  //   redirect:'/home'
  // },
  // {
  //   path:'/home',
  //   name: 'home',
  //   component: MenuContainer
  // },
    
    
  ]
})
