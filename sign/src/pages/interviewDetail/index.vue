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
                <input type="text" placeholder="未提醒">
            </label>
            <label for="" class="input_label">
                <span>面试状态:</span>
                <input type="text" placeholder="未开始">
            </label>
            <label for="" class="input_label">
                <span>取消提醒:</span>
                <input type="text" placeholder="北京市朝阳区">
            </label>
        </section>
        <footer class="footer">
            <button class="punch">去打卡</button>
            <button class="abandon">放弃面试</button>
        </footer>
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
    .footer {
        width: 100%;
        display: flex;
        margin-top: 64rpx;
        padding: 0 30rpx;
        justify-content: space-between;
        box-sizing: border-box;
        button {
            width: 45%;
            height: 114rpx;
            color: #fff;
        }
    }
    .punch {
        background: skyblue;
    }
    .abandon {
        background: rgb(240, 147, 147);
    }
</style>