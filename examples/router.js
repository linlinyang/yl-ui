import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Button from './views/Button.vue'


Vue.use(Router)
export default new Router({
  routes: [{
		path: '/',
		name: 'home',
		component: Home
    },{
		path: '/button',
		name: 'button',
		component: Button
	}]
})
