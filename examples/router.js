import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ButtonPanel from './views/ButtonPanel.vue'
import InputPanel from './views/InputPanel.vue'


Vue.use(Router)
export default new Router({
  routes: [{
		path: '/',
		name: 'home',
		component: Home
    },{
		path: '/buttons',
		name: 'ButtonPanel',
		component: ButtonPanel
	},{
		path: '/input',
		name: 'InputPanel',
		component: InputPanel
	}]
})
