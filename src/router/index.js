import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import News from '@/components/News'
import Player from '@/components/Player'

import PlayerProfile from '@/components/Player/Profile'
import PlayerStats from '@/components/Player/Stats'

import SettingDetail from '@/components/setting/Detail'
import SettingHeader from '@/components/setting/Header'
import SettingSidebar from '@/components/setting/sidebar'

Vue.use(Router)

export default new Router({
  routes: [
    /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/news',
      name: 'News',
      component: News
    }, {
      path: '/player/:uid',
      name: 'Player',
      component: Player,
      children: [
        {
          path: 'profile',
          component: PlayerProfile
        },
        {
          path: 'stats',
          component: PlayerStats
        }
      ]
    }, */

    {
      path: '/',
      name: 'Home',
      components: {
        myHeader: SettingHeader,
        myDetail: SettingDetail,
        mySidebar: SettingSidebar
      }
    }
  ]
})
