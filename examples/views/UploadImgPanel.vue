<template>
<div class="btns">

    <Header>
        <template #title>
			<p>Upload image</p>
		</template>
		<template #body>
			<p>图片上传预览裁剪压缩（用户选择图片上传功能兼容ie10+）</p>
		</template>
    </Header>

    <div class="demo">
        <div class="list">
            <div class="row">
                <label class="label">图片上传</label>
                <Uploader
                    :value='imgs'
                ></Uploader>
            </div>
        </div>
    </div>
    
</div>
</template>

<script>
import Header from '@/components/Header/';
import Uploader from "#c/Uploader/";
import img1 from '@/assets/pic1.jpg';

export default {
    name: 'UploadImgPanel',
    components: {
        Header,
        Uploader
    },
    data(){
        return {
            imgs: [img1,img1,img1,img1,img1,img1,img1,img1,img1,img1]
        };
    }
}
</script>

<style lang="scss" scoped>
    

</style>
