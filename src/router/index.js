import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList.vue'
import MenuContainer from '@/components/tabbar/MenuContainer.vue'
import CartContainer from '@/components/tabbar/CartContainer.vue'
import OrderContainer from '@/components/tabbar/OrderContainer.vue'
import MyContainer from '@/components/tabbar/MyContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
  //   {
  //     path: '/',
  //     name: 'GoodsList',
  //     component: GoodsList
  //   },
  //  {
  //    path:'/home',
  //    redirect:'/menu'
  //  },
  //   {
  //     path: '/menu',
  //     
  //     component: MenuContainer
  //   },
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/menu',
    redirect:'/home'
  },
  {
    path:'/home',
    name: 'home',
    component: MenuContainer
  },
    {
      path: '/cart',
      name: 'cart',
      component: CartContainer
    },
    {
      path: '/order',
      name: 'order',
      component: OrderContainer
    },
    {
      path: '/my',
      name: 'my',
      component: MyContainer
    }
  ]
})
