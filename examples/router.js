import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ButtonPanel from './views/ButtonPanel.vue'
import InputPanel from './views/InputPanel.vue'
import SwitchPanel from './views/SwitchPanel.vue'
import RadioPanel from './views/RadioPanel'
import CheckboxPanel from './views/CheckboxPanel'
import SliderPanel from './views/SliderPanel'
import TooltipPanel from './views/TooltipPanel'
import UploadImgPanel from './views/UploadImgPanel'
import SelectPanel from './views/SelectPanel'
import ActionSheet from './views/ActionSheet'

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
	},{
		path: '/switch',
		name: 'SwitchPanel',
		component: SwitchPanel
	},{
		path: '/radio',
		name: 'RadioPanel',
		component: RadioPanel
	},{
		path: '/checkbox',
		name: 'CheckboxPanel',
		component: CheckboxPanel
	},{
		path: '/slider',
		name: 'SliderPanel',
		component: SliderPanel
	},{
		path: '/tooltip',
		name: 'TooltipPanel',
		component: TooltipPanel
	},{
		path: '/UploadImg',
		name: 'UploadImgPanel',
		component: UploadImgPanel
	},{
		path: '/Select',
		name: 'SelectPanel',
		component: SelectPanel
	},{
		path: '/actionSheet',
		name: 'ActionSheet',
		component: ActionSheet
	}]
})
