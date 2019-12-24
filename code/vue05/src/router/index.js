import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Vmain from '@/components/Vmain'
import Vnote from '@/components/Vnote'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    	{
    		path:'/',
    		main:'Vmain',
    		component:Vmain
    	},
    	{
    		path:'/note',
    		name:'Vnote',
    		component:Vnote
    	}
  ]
})
