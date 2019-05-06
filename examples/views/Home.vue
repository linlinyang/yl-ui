<template>
<div class="home">
	
	<Header>
		<template #title>
			<img src="@/assets/logo.png">
		</template>
		<template #body>
			<p>WeUI 是一套基于vue框架同微信原生视觉体验一致的基础组件库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。</p>
		</template>
	</Header>

    <div class="list">
			<Menu icon='category' title='表单'>
				<template #items>
					<menu-item 
						v-for="(row,index) in formList" 
						:key='index'
						:linkUrl='row.link'
					>
						<template>
							<span>{{ row.name }}</span>
						</template>
					</menu-item>
				</template>
			</Menu>
			<Menu icon='success' title="操作反馈">
				<template #items>
					<menu-item 
						v-for="(row,index) in handleList" 
						:key='index'
						:linkUrl='row.link'
					>
						<template>
							<span>{{ row.name }}</span>
						</template>
					</menu-item>
				</template>
			</Menu>
    </div>
  </div>
</template>

<script>
// # is an alias to /packages
// #c is an alias to /packages/components
import Header from '@/components/Header/';
import Icon from '#c/Icon/';
import Menu from '#c/Menu/';
import MenuItem from '#c/Menu/MenuItem';

export default {
	name: 'home',
	components: {
		Header,
		Icon,
		Menu,
		MenuItem
	},
	data(){
		return {
			formList: [{
				name: 'Button',
				link: '#/buttons',
				target: '_blank'
			},{
				name: 'Input',
				link: '#/input',
				target: '_blank'
			},{
				name: 'Switch',
				link: '#/switch'
			},{
				name: 'Radio',
				link: '#/radio'
			},{
				name: 'Checkbox',
				link: '#/checkbox'
			},{
				name: 'Slider',
				link: '#/Slider'
			}],
			handleList: [{
				name: 'Tooltip',
				link: '#/Tooltip'
			}]
		};
  	}
}
</script>

<style lang="scss" scoped>

  	.list{
		padding: 0 15px;
  	}

</style>
