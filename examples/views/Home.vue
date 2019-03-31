<template>
  <div class="home">

    <div class="page-header">
		<div class="page-title">
			<img src="@/assets/logo.png">
		</div>
		<div class="page-body">
			<p>WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。</p>
		</div>
    </div>
    <div class="list">
      <YMenu icon='category' title='表单' custom='aa'>
			<template #items>
				<MenuItem v-for="(row,index) in list" :key='index' :title="row.name"></MenuItem>
			</template>
      </YMenu>
    </div>
    
  </div>
</template>

<script>
// # is an alias to /packages
import Icon from '#/Icon/';
import YMenu from '#/YMenu/';
import MenuItem from '#/YMenu/MenuItem';

export default {
  name: 'home',
  components: {
    Icon,
	YMenu,
	MenuItem
  },
  data(){
	  return {
		  list: [{
			  name: 'Button',
			  link: '/button',
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

<style lang="scss">
  
  @mixin fcw(
    $size: null,
    $color: null,
    $weight: null
  ){
    @if($size){
      font-size: $size;
    }
    @if($color){
      color: $color
    }
    @if($weight){
      font-weight: $weight;
    }
  }

  @mixin size(
    $width: null,
    $height: null
  ){
    @if($width){
      width: $width;
    }
    @if($height){
      height: $height;
    }
  }

  .page-header{
    padding: 40px;
    .page-title{
      img{
        height: 21px;
      }
      margin-bottom: 15px;
    }
    .page-body{
      margin-top: 5px;
      @include fcw(14px,#888);
      line-height: 24px;
    }
  }

  .list{
	padding: 0 15px;
	
  }

</style>
