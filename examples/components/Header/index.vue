<template>
<div class="page-header">
    <div class="page-title">
        <slot name="title"></slot>
    </div>
    <div class="page-body">
        <slot name="body"></slot>
    </div>
</div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>

  	.page-header{
        padding: 40px;
        @include fcw(20px,#000,bolder);
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
      
</style>


