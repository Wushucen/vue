<template>
        <router-view class="content"></router-view>
</template>

<script>
    export default {
        methods: {
            selectHan(v) {
                this.$router.push({
                    name: v
                })
            }
        },
    }
</script>

<style lang="less">
 *{
        margin: 0;
        padding:0;
    }
    header{
        padding:0 !important;
        background-color: #545c64;
        overflow: hidden;
        .logo{
            float: left;
            padding-left: 40px;
            font-size:30px;
            color:white;
            line-height: 60px;
            height: 60px;
            small{
                font-size:14px;
            }
        }
        .el-menu-demo{
            float: right;
            padding-right: 30px;
        }
    }
    .el-footer{
        padding:0 !important;
        background-color: #545c64;
        overflow: hidden;
        font-size:14px; 
        color:white;
        line-height: 60px;
        padding-top: 100px;
    }
</style>