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
            <Slider showStops :step=10 :value=50></Slider>
        </div>

        <div class="row">
            <div class="label">双滑块：</div>
            <Slider showStops :step=10 :value=[30,60]></Slider>
        </div>

        <div class="row">
            <div class="label">不显示提示：</div>
            <Slider showStops :step=10 :value=40 showTip='never'></Slider>
        </div>

        <div class="row">
            <div class="label">一直显示提示：</div>
            <Slider showStops :step=10 :value=20 showTip='always'></Slider>
        </div>

        <div class="row">
            <div class="label">自定义提示：</div>
            <Slider showStops :step=10 :value=40 :tipFormat="tipFormat" ></Slider>
        </div>

        <div class="row">
            <div class="label">不显示停顿点：</div>
            <Slider :step=10 :value=40 ></Slider>
        </div>

        <div class="row">
            <div class="label">v-model双向绑定：</div>
            <Slider 
                showStops 
                :step=10 
                v-model="selectVal"
            ></Slider>
            <Input v-model="selectVal"></Input>
        </div>

    </div>

</div>
</template>

<script>
import Header from '@/components/Header/';
import Slider from '#c/Slider/';
import Input from '#c/Input/';

export default {
    name: 'SliderPanel',
    data(){
        return {
            switchVal: 0,
            selectVal: 50,
            dblSelectVal: [20,60]
        };
    },
    components: {
        Header,
        Slider,
        Input
    },
    methods: {
        tipFormat(val,index){
            return '百分比值：' + ((val / (100 - 0)) * 100) + '%';
        }
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
            margin-top: 20px;
            align-items: center;

            .label{
                width: 20%;
                text-align: right;
                flex-shrink: 0;
            }
            .yl-ui-slider{
                margin-left: 20px;
            }
        }
    }

</style>
