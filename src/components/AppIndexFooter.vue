<template>
<div>
    <p>
        互联网ICP备案号：
        <a href="http://beian.miit.gov.cn/">
            鄂ICP备2022000362号-2
        </a>
    </p>
    <p>
        <img src="../assets/img/备案图标.png"/>
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42098402000198">
            鄂公网安备 42098402000198号
        </a>
    </p>
    <p>
        &copy; 2022 Templeton Personal studio
    </p>
</div>
</template>

<script>
    export default {
        name: "AppIndexFooter"
    }
</script>

<style scoped>
p{
    font-size: 10pt;
    color: #909399;
    padding: 2px 0;
    margin: 0;
}
a{
    text-decoration: none;
    color: #909399;
}
a:hover{
    color: #409EFF;
}
img{
    width: 15px;
    height: 15px;
    vertical-align: middle;
}
</style>
