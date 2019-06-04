<template>
<div class="btns">

    <Header>
        <template #title>
			<p>Select</p>
		</template>
		<template #body>
			<p>使用模拟的增强下拉选择器来代替浏览器原生的选择器</p>
		</template>
    </Header>

    <div class="demo">
        <div class="list">
            <div class="row">
                <Select
                    value='aa'
                ></Select>
            </div>
        </div>
    </div>
    
</div>
</template>

<script>
import Header from '@/components/Header/';
import Select from '#c/Select/';

export default {
    name: 'UploadImgPanel',
    components: {
        Header,
        Select
    },
    data(){
        return {
        };
    }
}
</script>

<style lang="scss" scoped>
    
    .list{
        position: relative;

    }

</style>
