<template>
    <el-carousel indicator-position="none" :height="autoHeight">
        <el-carousel-item>
            <img :src=bg1>
        </el-carousel-item>

        <el-carousel-item>
            <img :src=bg2 style="margin-top: 25px">
        </el-carousel-item>

        <el-carousel-item>
            <img :src=bg3 style="margin-top: 25px">
        </el-carousel-item>

        <el-carousel-item>
            <img :src=bg4 style="margin-top: 25px">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    import { toRefs, reactive, computed }  from 'vue'
    import {ElCarousel, ElCarouselItem} from 'element-plus';

    export default {
        name: "AppIndexHome",
        components: {ElCarousel, ElCarouselItem},
        setup(){
            const data = reactive({
                bg1: "https://oss.foweng.cn/home_bg/bg1.png",
                bg2: "https://oss.foweng.cn/home_bg/bg2.png",
                bg3: "https://oss.foweng.cn/home_bg/bg3.png",
                bg4: "https://oss.foweng.cn/home_bg/bg4.png",
            })
            const autoHeight = computed(() =>{
                // 获取页面宽度
                let _w =
                    document.documentElement.clientWidth || document.body.clientWidth;
                if (_w > 840){
                    return "417px";
                }
                else{
                    return _w / 2 + "px";
                }
            })

            return{
                ...toRefs(data),
                autoHeight,
            }
        }
    }
</script>

<style scoped>
.el-carousel__item img{
    width: 100%;
    max-width: 730px;
}
</style>
