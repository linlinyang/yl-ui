<template>
<div class="home">
	
	<Header>
		<template #title>
			<img src="@/assets/logo.png">
		</template>
		<template #body>
			<p>WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。</p>
		</template>
	</Header>

    <div class="list">
		<YMenu icon='category' title='表单'>
			<template #items>
				<menu-item 
					v-for="(row,index) in list" 
					:key='index'
					:linkUrl='row.link'
				>
					<template>
						<span>{{ row.name }}</span>
					</template>
				</menu-item>
			</template>
		</YMenu>
    </div>
  </div>
</template>

<script>
// # is an alias to /packages
// #c is an alias to /packages/components
import Header from '@/components/Header/';
import Icon from '#c/Icon/';
import YMenu from '#c/YMenu/';
import MenuItem from '#c/YMenu/MenuItem';

export default {
	name: 'home',
	components: {
		Header,
		Icon,
		YMenu,
		MenuItem
	},
	data(){
		return {
			list: [{
				name: 'Button',
				link: '#/buttons',
				target: '_blank'
			},{
				name: 'Input',
				link: '/input',
				target: '_blank'
			},{
				name: 'List',
				link: '/list'
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
