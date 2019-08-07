<template>
    <div class="wrap">
        <header class="header">
            <span>北京</span>
            <div><input type="text" placeholder="面试地址"></div>
        </header>
        <section class="main">
            <ul>
                <li>
                    <span class="icon iconfont">&#xe647;</span>
                    <div>
                        <p>八大公元初</p>
                        <span>北京市实景删除去出9号路</span>
                    </div>
                </li>
                 <li>
                    <span class="icon iconfont">&#xe647;</span>
                    <div>
                        <p>八大公元初</p>
                        <span>北京市实景删除去出9号路</span>
                    </div>
                </li>
                 <li>
                    <span class="icon iconfont">&#xe647;</span>
                    <div>
                        <p>八大公元初</p>
                        <span>北京市实景删除去出9号路</span>
                    </div>
                </li>
            </ul>
        </section>
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
     box-sizing: border-box;
 }
.wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.header {
    width: 100%;
    height: 88rpx;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
        padding: 0 50rpx;
        border-right: 1px solid #ccc;
    }
    div {
        flex: 1;
        overflow: hidden;
        margin-left: 20rpx;
        input {
            width: 100%;
            height: 100%;
        }
    }
}
.main {
    flex:1;
    ul {
        li {
            display: flex;
            align-items: center;
            border-bottom: 1px solid rgb(175, 173, 173);
            padding: 10rpx 0 ;
            .icon {
                font-size: 55rpx;
                 padding: 0 50rpx;
                 color: rgb(66, 115, 248);
            }
            div {
                span {
                    font-size: 24rpx;
                    color: #ccc;
                }
            }
        }
    }
}
</style>