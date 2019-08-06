<template>
    <div class="wrap">
        <header class="header">面试信息</header>
        <section class="main">
            <label for="" class="input_label">
                <p>公司名称</p>
                <input type="text" placeholder="请输入公司名称">
            </label>
            <label for="" class="input_label">
                <p>公司电话</p>
                <input type="text" placeholder="请输入面试联系人电话">
            </label>
            <label for="" class="input_label">
                <p>面试时间</p>
                <input type="text" placeholder="请输入公司名称">
                <span class="icon iconfont">&#xe636;</span>
            </label>
            <label for="" class="input_label">
                <p>面试地址</p>
                <input type="text" placeholder="请选择面试地址">
            </label>
        </section>
        <footer class="footer">
            <div class="footer_header">备注信息</div>
            <textarea name="" id="" cols="30" rows="10" class="text" placeholder="备注信息（可选，100个字以内）"></textarea>
            <button class="confirm">确认</button>
        </footer>
    </div>
</template>
<script>
import "../../../font/iconfont.css";
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
    .wrap {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .header {
        width: 100%;
        height: 88rpx;
        background: #f6f6f6;
        line-height: 88rpx;
        padding: 0 30rpx;
        font-size: 36rpx;
    }
    .main {
        flex: 1;
        padding: 0 30rpx;
        .input_label {
            border-bottom: 1px solid #ccc;
            display: flex;
            height: 92rpx;
            align-items: center;
            overflow: hidden;
            p {
                color: #ccc;
                margin-right: 20rpx;
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
        .footer_header {
            width: 100%;
            height: 88rpx;
            background: #f6f6f6;
            line-height: 88rpx;
            padding: 0 30rpx;
            font-size: 36rpx;
        }
        .text {
            width: 90%;
            height: 250rpx;
            border: 1px solid #ccc;
            margin: 40rpx 5%;
            border-radius: 2%;
        }
    }
    .confirm {
        background: #999999;
        color: #fff;
    }
    .icon {
        width: 50rpx;
        height: 50rpx;
        background: #197dbf;
        border-radius: 50%;
        display: inline-block;
        line-height: 50rpx;
        text-align: center;
        color: #fff;
        font-size: 36rpx;
    }
</style>