<template>
    <div class="wrap">
        <section class="main">
            <label for="" class="input_label">
                <span>面试地址:</span>
                <input type="text" placeholder="北京市朝阳区">
            </label>
            <label for="" class="input_label">
                <span>面试时间:</span>
                <input type="text" placeholder="北京市朝阳区">
            </label>
            <label for="" class="input_label">
                <span>联系方式:</span>
                <input type="text" placeholder="北京市朝阳区">
            </label>
            <label for="" class="input_label">
                <span>是否提醒:</span>
                <input type="text" placeholder="北京市朝阳区">
            </label>
            <label for="" class="input_label">
                <span>面试状态:</span>
                <input type="text" placeholder="北京市朝阳区">
            </label>
        </section>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
* {
        margin: 0;
        padding: 0;
    }
    .main {
        flex: 1;
        padding: 0 30rpx;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        .input_label {
            border-bottom: 1px solid #ccc;
            display: flex;
            height: 92rpx;
            align-items: center;
            overflow: hidden;
            span {
                color: rgb(107, 104, 104);
                margin-right: 40rpx;
            }
            input {
                height: 100%;
                flex: 1;
            }
            &:last-child {
                border-bottom: 0;
            }
        }
    }
</style>