<template>
    <div>
    <el-row>
        <!--  Logo  -->
        <el-col :xs="24" :sm="12">
            <div style="background-color: #303133">
                <el-image :src="require('../assets/img/Logo.png')" :fit=fit
                          style="width: 150px; height: 54px"/>
            </div>
        </el-col>
        <!--  Menu  -->
        <el-col :xs="24" :sm="12">
            <el-menu
                    router
                    :ellipsis="false"
                    class="el-index-nav"
                    mode="horizontal"
                    text-color="#303133"
                    active-text-color="#409EFF"
                    :default-active="activeIndex">

                <el-menu-item index="/home">主页</el-menu-item>
                <el-menu-item index="/role">角色</el-menu-item>
                <el-menu-item index="/arms">武器</el-menu-item>
                <el-menu-item index="/talent">天赋</el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
    </div>
</template>

<script>
    import { ElRow, ElCol, ElImage, ElMenu , ElMenuItem} from 'element-plus';
    import {useRouter} from "vue-router";
    export default {
        name: "AppIndexMenu",
        components: { ElRow, ElCol, ElImage, ElMenu , ElMenuItem},
        setup(){
            const fit = "cover";
            return{
                fit
            }
        },
        computed: {
            // 返回当前路由
            activeIndex(){
                const router = useRouter();
                return router.currentRoute.value.path;
            }
        }
    }
</script>

<style scoped>
    .el-row{
        width: 100%;
    }
    .el-menu-item{
        width: 25%;
        font-size: 16pt;
        font-weight: 600;
    }
</style>
