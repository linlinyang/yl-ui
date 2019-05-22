<template>
<div class="btns">

    <Header>
        <template #title>
			<p>Slider</p>
		</template>
		<template #body>
			<p>滑块</p>
		</template>
    </Header>

    <div class="list">

        <div class="row">
            <div class="label">默认：</div>
            <Slider showStops :step=10 ></Slider>
        </div>
    </div>

</div>
</template>

<script>
import Header from '@/components/Header/';
import Slider from '#c/Slider/';

export default {
    name: 'SliderPanel',
    data(){
        return {
            switchVal: 0
        };
    },
    components: {
        Header,
        Slider
    }
}
</script>

<style lang="scss" scoped>
    .list{
        display: flex;
        padding: 0 15px;
        width: 100%;
        box-sizing: border-box;
        flex-flow: column nowrap;

        .row{
            display: flex;
            flex-flow: row nowrap;
            width: 100%;
            margin-top: 10px;
            align-items: center;

            .label{
                width: 20%;
                text-align: right;
            }
            .yl-ui-slider{
                margin-left: 20px;
            }
        }
    }

</style>
