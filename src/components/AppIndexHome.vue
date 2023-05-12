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

    <el-row :gutter="20">
        <el-col :xs="24" :sm="8" style="margin-top: 20px">
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <h2>活动信息</h2>
                    </div>
                </template>
                <el-row>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                        <a href="https://ys.mihoyo.com/main/news/detail/27619" target="_blank" class="huodong_a">
                            <h3>【网页活动】<br>「熠金妙剂」</h3>
                        </a>
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px;">
                        <h3>至 2023年5月20日 23:59</h3>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                        <a href="https://ys.mihoyo.com/main/news/detail/27544" target="_blank" class="huodong_a">
                            <h3>「忆昔诸途巡历」</h3>
                        </a>
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px;">
                        <h3>至 2023年5月22日 03:59</h3>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                        <a href="https://ys.mihoyo.com/main/news/detail/27314" target="_blank" class="huodong_a">
                            <h3>「盛典与慧业」</h3>
                        </a>
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px;">
                        <h3>至 2023年5月15日 03:59</h3>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                        <a href="https://www.miyoushe.com/ys/article/29403074" target="_blank" class="huodong_a">
                            <h3>「浅唱祈礼」</h3>
                        </a>
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px;">
                        <h3>永久</h3>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                        <a href="https://www.miyoushe.com/ys/article/2563559" target="_blank" class="huodong_a">
                            <h3>「绿帷逐叶」深境挑战</h3>
                        </a>
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px;">
                        <h3>永久</h3>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                        <a href="https://www.miyoushe.com/ys/article/1748398" target="_blank" class="huodong_a">
                            <h3>「万民同行」深境挑战</h3>
                        </a>
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px;">
                        <h3>永久</h3>
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
        <el-col :xs="24" :sm="8" style="margin-top: 20px">
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <h2>周三、周六副本素材</h2>
                    </div>
                </template>
                <el-row>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                       <el-avatar
                                shape="square"
                                :size="70"
                                :src="green_talentbook1_url"
                                alt = "「诗文」的教导"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px;">
                        <h3>「诗文」的教导</h3>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="green_talentbook2_url"
                                alt = "「黄金」的教导"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px;">
                        <h3>「黄金」的教导</h3>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="green_talentbook3_url"
                                alt = "「笃行」的教导"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px;">
                        <h3>「笃行」的教导</h3>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="green_dungeondrop1_url"
                                alt = "狮牙斗士的枷锁"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px;">
                        <h3>狮牙斗士的枷锁</h3>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="green_dungeondrop2_url"
                                alt = "漆黑陨铁的一粒"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px;">
                        <h3>漆黑陨铁的一粒</h3>
                    </el-col>
                </el-row>
                <el-row style="margin-bottom: 45px">
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="green_dungeondrop3_url"
                                alt = "烈日威权的残响"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px;">
                        <h3>烈日威权的残响</h3>
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
        <el-col :xs="24" :sm="8" style="margin-top: 20px">
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <h2>卡池计时器</h2>
                    </div>
                </template>
                <el-row>
                    <el-col :xs="8" :sm="8">
                        <el-avatar
                                shape="square"
                                :size="90"
                                src="https://oss.foweng.cn/role_img/90px-优菈头像.png"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="16" :sm=16>
                        <el-progress
                                :percentage="100"
                                :stroke-width="24"
                                :text-inside="true"
                                status="success"
                                style="margin-top: 35px"
                        >
                            <span>已有515天未复刻</span>
                        </el-progress>
                    </el-col>
                    <el-col :xs="8" :sm="8">
                        <el-avatar
                                shape="square"
                                :size="90"
                                src="https://oss.foweng.cn/role_img/90px-可莉头像.png"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="16" :sm=16>
                        <el-progress
                                :percentage="56"
                                :stroke-width="24"
                                :text-inside="true"
                                status="success"
                                style="margin-top: 35px"
                        >
                            <span>已有284天未复刻</span>
                        </el-progress>
                    </el-col>
                    <el-col :xs="8" :sm="8">
                        <el-avatar
                                shape="square"
                                :size="90"
                                src="https://oss.foweng.cn/role_img/90px-枫原万叶头像.png"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="16" :sm=16>
                        <el-progress
                                :percentage="56"
                                :stroke-width="24"
                                :text-inside="true"
                                status="success"
                                style="margin-top: 35px"
                        >
                            <span>已有284天未复刻</span>
                        </el-progress>
                    </el-col>
                    <el-col :xs="8" :sm="8">
                        <el-avatar
                                shape="square"
                                :size="90"
                                src="https://oss.foweng.cn/role_img/90px-钟离头像.png"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="16" :sm=16>
                        <el-progress
                                :percentage="54"
                                :stroke-width="24"
                                :text-inside="true"
                                status="success"
                                style="margin-top: 35px"
                        >
                            <span>已有246天未复刻</span>
                        </el-progress>
                    </el-col>
                    <el-col :xs="8" :sm="8">
                        <el-avatar
                                shape="square"
                                :size="90"
                                src="https://oss.foweng.cn/role_img/90px-珊瑚宫心海头像.png"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="16" :sm=16>
                        <el-progress
                                :percentage="54"
                                :stroke-width="24"
                                :text-inside="true"
                                status="success"
                                style="margin-top: 35px"
                        >
                            <span>已有246天未复刻</span>
                        </el-progress>
                    </el-col>
                </el-row>
                <el-button
                        type="primary"
                        size="large"
                        plain
                        :onclick="tiaozhuan"
                        style="margin-top: 10px">
                    查看更多
                </el-button>
            </el-card>
        </el-col>
    </el-row>

    <el-backtop :right="40" :bottom="100" />
</template>

<script>
    import { toRefs, reactive, computed }  from 'vue'
    import {ElRow, ElCol, ElCarousel, ElCarouselItem, ElCard, ElAvatar, ElProgress, ElButton, ElBacktop } from 'element-plus';
    import router from "@/router";

    export default {
        name: "AppIndexHome",
        components: { ElRow, ElCol,ElCarousel, ElCarouselItem, ElCard, ElAvatar, ElProgress, ElButton, ElBacktop},
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
            const talent_daily = reactive({
                green_talentbook1_url : "https://oss.foweng.cn/talent_book_img/70px-「诗文」的教导.png",
                green_talentbook2_url : "https://oss.foweng.cn/talent_book_img/70px-「黄金」的教导.png",
                green_talentbook3_url : "https://oss.foweng.cn/talent_book_img/70px-「笃行」的教导.png",
            })
            const arms_daliy = reactive({
                green_dungeondrop1_url : "https://oss.foweng.cn/arms_material_img/70px-狮牙斗士的枷锁.png",
                green_dungeondrop2_url : "https://oss.foweng.cn/arms_material_img/70px-漆黑陨铁的一粒.png",
                green_dungeondrop3_url : "https://oss.foweng.cn/arms_material_img/70px-烈日威权的残响.png",
            })

            const tiaozhuan = () =>{
                router.replace("/cardpool")
            }
            return{
                ...toRefs(data),
                ...toRefs(talent_daily),
                ...toRefs(arms_daliy),
                autoHeight,
                tiaozhuan
            }
        }
    }
</script>

<style scoped>
    .el-carousel__item img{
    width: 100%;
    max-width: 730px;
    }
    .el-main-el-row{
    margin: 20px 0;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
    .el-main-el-row:hover{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }
    .el-main-el-row .el-col{
    margin: 1rem 0;
    }
    .huodong_a{
        text-decoration: none;
        color: #303133;
    }
    .huodong_a:hover{
        color: #409EFF;
    }
</style>
