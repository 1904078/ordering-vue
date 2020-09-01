import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList.vue'
import MenuContainer from '@/components/tabbar/MenuContainer.vue'
import CartContainer from '@/components/tabbar/CartContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuContainer
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartContainer
    }
  ]
})
