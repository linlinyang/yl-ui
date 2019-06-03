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
            <div class="row">
                <label class="label">disabled</label>
                <Uploader
                    :value='imgs1'
                    disabled
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
import img2 from '@/assets/pic2.jpg';
import img3 from '@/assets/pic3.jpg';
import img4 from '@/assets/pic4.jpg';
import img5 from '@/assets/pic5.jpg';

export default {
    name: 'UploadImgPanel',
    components: {
        Header,
        Uploader
    },
    data(){
        return {
            imgs: [img1,img2,img5],
            imgs1: [img1,img2,img3,img4,img5]
        };
    }
}
</script>

<style lang="scss" scoped>
    
    .list{
        position: relative;

        .row{
            padding: 15px;
            border-bottom: 1px solid #ccc;

            &:last-child{
                border-bottom: 0
            }
        }
    }

</style>
