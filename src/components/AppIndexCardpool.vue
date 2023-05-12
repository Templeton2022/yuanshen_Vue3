<template>
    <el-page-header @back="goBack" style="padding-left: 20px; font-size: 20px" >
        <template #content>
            <span class="text-large font-700 mr-3"> 卡池计时器 </span>
        </template>
    </el-page-header>

    <el-row :gutter="20" class="el-main-el-row">
        <el-col :xs="24" :sm="12">
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
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有515天未复刻</h3>
                    <el-progress
                            :percentage="100"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-可莉头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有284天未复刻</h3>
                    <el-progress
                            :percentage="58"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-枫原万叶头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有284天未复刻</h3>
                    <el-progress
                            :percentage="58"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-钟离头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有246天未复刻</h3>
                    <el-progress
                            :percentage="51"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-珊瑚宫心海头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有228天未复刻</h3>
                    <el-progress
                            :percentage="49"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-温迪头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有210天未复刻</h3>
                    <el-progress
                            :percentage="45"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-阿贝多头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有193天未复刻</h3>
                    <el-progress
                            :percentage="42"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-宵宫头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有176天未复刻</h3>
                    <el-progress
                            :percentage="33"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-八重神子头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有158天未复刻</h3>
                    <el-progress
                            :percentage="27"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-达达利亚头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有158天未复刻</h3>
                    <el-progress
                            :percentage="27"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-流浪者头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有136天未复刻</h3>
                    <el-progress
                            :percentage="25"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-荒泷一斗头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有136天未复刻</h3>
                    <el-progress
                            :percentage="25"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-神里绫人头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有116天未复刻</h3>
                    <el-progress
                            :percentage="24"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
        </el-col>
        <el-col :xs="24" :sm="12">
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-雷电将军头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有116天未复刻</h3>
                    <el-progress
                            :percentage="24"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-艾尔海森头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有95天未复刻</h3>
                    <el-progress
                            :percentage="20"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-魈头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有95天未复刻</h3>
                    <el-progress
                            :percentage="20"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-夜兰头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有74天未复刻</h3>
                    <el-progress
                            :percentage="18"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-胡桃头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有74天未复刻</h3>
                    <el-progress
                            :percentage="18"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-赛诺头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有53天未复刻</h3>
                    <el-progress
                            :percentage="10"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-迪希雅头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有53天未复刻</h3>
                    <el-progress
                            :percentage="10"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-申鹤头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有32天未复刻</h3>
                    <el-progress
                            :percentage="8"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-神里绫华头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有32天未复刻</h3>
                    <el-progress
                            :percentage="8"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-妮露头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有10天未复刻</h3>
                    <el-progress
                            :percentage="3"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-纳西妲头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有10天未复刻</h3>
                    <el-progress
                            :percentage="3"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-白术头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有0天未复刻</h3>
                    <el-progress
                            :percentage="0"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="8" :sm="8">
                    <el-avatar
                            shape="square"
                            :size="90"
                            src="https://oss.foweng.cn/role_img/90px-甘雨头像.png"
                            style="background-color: #ffffff"
                    />
                </el-col>
                <el-col :xs="16" :sm=16>
                    <h3 style="text-align: left;margin-top: 20px;margin-bottom: 0px">已有0天未复刻</h3>
                    <el-progress
                            :percentage="0"
                            :stroke-width="24"
                            :text-inside="true"
                            status="success"
                            style="margin-top: 10px"
                    >
                        <span> </span>
                    </el-progress>
                </el-col>
            </el-row>
        </el-col>
    </el-row>

    <el-backtop :right="40" :bottom="100" />
</template>

<script>
    import { ElRow, ElCol, ElPageHeader, ElAvatar, ElProgress, ElBacktop } from 'element-plus';
    import router from "@/router";
    export default {
        name: "AppIndexCardpool",
        components: { ElRow, ElCol, ElPageHeader, ElAvatar, ElProgress, ElBacktop },
        setup() {
            const goBack = () =>{
                router.replace("/")
            }

            return {
                goBack
            };
        }
    }
</script>

<style scoped>
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
</style>
