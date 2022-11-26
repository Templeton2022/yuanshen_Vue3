<template>
    <el-container>
        <!--   header    -->
        <el-header>
            <AppIndexMenu/>
        </el-header>
        <!--   main     -->
        <el-main>
            <router-view/>
        </el-main>
        <!--   footer      -->
        <el-footer>
            <AppIndexFooter/>
        </el-footer>
    </el-container>
</template>

<script>
    import { ElContainer, ElHeader, ElMain, ElFooter } from 'element-plus'
    import AppIndexMenu from "@/components/AppIndexMenu";
    import AppIndexFooter from "@/components/AppIndexFooter";
    export default {
        name: "AppIndex",
        components: {AppIndexFooter, AppIndexMenu, ElContainer, ElHeader, ElMain, ElFooter  }
    }
</script>

<style scoped>
    .el-main{
        margin-top: 40px;
    }
     .el-footer{
         margin-top: 50px;
         margin-bottom: 20px;
     }
     .el-header{
         padding: 0px;
     }

</style>
