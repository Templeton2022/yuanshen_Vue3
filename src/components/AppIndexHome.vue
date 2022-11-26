<template>
    <el-carousel indicator-position="none" :height="autoHeight">
        <el-carousel-item>
            <img :src=bg1>
        </el-carousel-item>
        <el-carousel-item>
            <img :src=bg2>
        </el-carousel-item>
        <el-carousel-item>
            <img :src=bg3>
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
                bg1: "http://oss.foweng.cn/img/home_bg4.png",
                bg2: "http://oss.foweng.cn/img/home_bg5.png",
                bg3: "http://oss.foweng.cn/img/home_bg6.png",
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
