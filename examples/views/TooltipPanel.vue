<template>
<div class="btns">

    <Header>
        <template #title>
			<p>ToolTip</p>
		</template>
		<template #body>
			<p>Tooltip 文字提示</p>
		</template>
    </Header>

    <div class="demo">
        <div class="top">
            <Tooltip placement="top-start">
                <Button>上左</Button>
                <template #content>
                    <div>
                        <p>Top Left 文字提示</p>
                    </div>
                </template>
            </Tooltip>
            <Tooltip placement="top">
                <Button>上中</Button>
                <template #content>
                    <div>
                        <p>Top Center 文字提示</p>
                    </div>
                </template>
            </Tooltip>
            <Tooltip placement="top-end">
                <Button>上右</Button>
                <template #content>
                    <div>
                        <p>Top Right 文字提示</p>
                    </div>
                </template>
            </Tooltip>
        </div>
        <div class="center">
            <div class="item">
                <Tooltip placement="left-start">
                    <Button>左上</Button>
                    <template #content>
                        <div>
                            <p>Left Top 文字提示</p>
                        </div>
                    </template>
                </Tooltip>
                <Tooltip placement="left">
                    <Button>左中</Button>
                    <template #content>
                        <div>
                            <p>Left Center 文字提示</p>
                        </div>
                    </template>
                </Tooltip>
                <Tooltip placement="left-end">
                    <Button>左下</Button>
                    <template #content>
                        <div>
                            <p>Left Bottom 文字提示</p>
                        </div>
                    </template>
                </Tooltip>
            </div>
            <div class="item">
                <Tooltip placement="right-start">
                    <Button>右上</Button>
                    <template #content>
                        <div>
                            <p>Right Top 文字提示</p>
                        </div>
                    </template>
                </Tooltip>
                <Tooltip placement="right">
                    <Button>右中</Button>
                    <template #content>
                        <div>
                            <p>Right Center 文字提示</p>
                        </div>
                    </template>
                </Tooltip>
                <Tooltip placement="right-end">
                    <Button>右下</Button>
                    <template #content>
                        <div>
                            <p>Right Bottom 文字提示</p>
                        </div>
                    </template>
                </Tooltip>
            </div>
        </div>
        <div class="bottom">
            <Tooltip placement="bottom-start">
                <Button>下左</Button>
                <template #content>
                    <div>
                        <p>Bottom Left 文字提示</p>
                    </div>
                </template>
            </Tooltip>
            <Tooltip placement="bottom">
                <Button>下中</Button>
                <template #content>
                    <div>
                        <p>Bottom Center 文字提示</p>
                    </div>
                </template>
            </Tooltip>
            <Tooltip placement="bottom-end">
                <Button>下右</Button>
                <template #content>
                    <div>
                        <p>Bottom Right 文字提示</p>
                    </div>
                </template>
            </Tooltip>
        </div>
        <div class="list">
            <div class="row">
                <label class="label">设置delay</label>
                <Tooltip placement="top-start" :delay='1000'>
                    <Button>delay1000</Button>
                    <template #content>
                        <div>
                            <p>1秒后延迟显示文字提示</p>
                        </div>
                    </template>
                </Tooltip>
            </div>
            <div class="row">
                <label class="label">自动换行</label>
                <Tooltip placement="top" :max-width='200'>
                    <Button>长文本</Button>
                    <template #content>
                        <div>
                            <p>Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>
                        </div>
                    </template>
                </Tooltip>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import Header from '@/components/Header/';
import Button from '#c/Button/';
import Tooltip from '#c/Tooltip/';

export default {
    name: 'TooltipPanel',
    components: {
        Header,
        Tooltip,
        Button
    }
}
</script>

<style lang="scss" scoped>
    .demo{
        width: 80%;
        max-width: 700px;
        margin: 3% auto 0;
        position: relative;

        .top,.bottom{
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-around;
        }
        .bottom{
            margin-top: 15px;
        }
        .center{
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;

            .item{
                display: flex;
                flex-flow: column nowrap;
                justify-content: space-between;

                .yl-ui-tooltip{
                    margin-top: 15px;
                }
            }
        }
    }

    .list .row{
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
        overflow: hidden;
        margin-top: 30px;
        align-items: center;

        .label{
            width: 30%;
            display: table-cell;
            text-align: right;
            margin-right: 10px;
        }
    }

</style>
