<template>
    <!--  角色选择  -->
    <el-row :gutter="20" class="el-main-el-row" style="margin-top: 0px">
        <el-col :xs="12" :sm="12" style="line-height: 99px">
            <el-cascader
                :options="role_cascader"
                v-model="value"
                size="large"
                :show-all-levels="false"
                placeholder="选择角色"
                @change="confirm_role"
            />
        </el-col>
        <el-col :xs="12" :sm="12">
            <el-avatar
                shape="square"
                :size="95"
                :src="role_img_url"
                v-show="role_img_control"
                style="background-color: #ffffff"
            />
        </el-col>
    </el-row>
    <!--  普攻等级 row  -->
    <el-row :gutter="20" class="el-main-el-row">
        <el-col :xs="24" :sm="12">
            <h2>普攻等级 A</h2>
        </el-col>
        <el-col :xs="24" :sm="12">
            <div class="block">
                <el-slider
                        v-model="a_fanwei"
                        range
                        show-stops
                        :min="1"
                        :max="10"
                        :marks="marks_a">
                </el-slider>
            </div>
        </el-col>
    </el-row>
    <!--  元素战技等级 row  -->
    <el-row :gutter="20" class="el-main-el-row">
        <el-col :xs="24" :sm="12">
            <h2>技能战技 E</h2>
        </el-col>
        <el-col :xs="24" :sm="12">
            <div class="block">
                <el-slider
                        v-model="e_fanwei"
                        range
                        show-stops
                        :min="1"
                        :max="10"
                        :marks="marks_eq">
                </el-slider>
            </div>
        </el-col>
    </el-row>
    <!--  元素爆发等级 row  -->
    <el-row :gutter="20" class="el-main-el-row">
        <el-col :xs="24" :sm="12">
            <h2>技能爆发 Q</h2>
        </el-col>
        <el-col :xs="24" :sm="12">
            <div class="block">
                <el-slider
                        v-model="q_fanwei"
                        range
                        show-stops
                        :min="1"
                        :max="10"
                        :marks="marks_eq">
                </el-slider>
            </div>
        </el-col>
    </el-row>

    <!-- 确认按钮 -->
    <div class="btn_div">
        <el-button
            type="primary"
            size="large"
            style="width: 50%;max-width: 250px;"
            @click="calculate_quantity">
            <el-icon><Cpu /></el-icon>
            计算
        </el-button>
    </div>

    <!--  所需材料显示    -->
    <el-row :gutter="20">
        <el-col :xs="24" :sm="8" style="margin-top: 20px">
            <el-card class="box-card" shadow="hover">
                <template #header>
                    <div class="card-header">
                        <h2>天赋书</h2>
                    </div>
                </template>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <img src="../assets/img/talent/90px-「抗争」的教导.png">
                    </el-col>
                    <el-col :xs="12" :sm="12" style="line-height: 97px">
                        绿色天赋书： {{green_talentbook}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <img src="../assets/img/talent/90px-「抗争」的指引.png">
                    </el-col>
                    <el-col :xs="12" :sm="12" style="line-height: 97px">
                        蓝色天赋书： {{blue_talentbook}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <img src="../assets/img/talent/90px-「抗争」的哲学.png">
                    </el-col>
                    <el-col :xs="12" :sm="12" style="line-height: 97px">
                        紫色天赋书： {{purple_talentbook}}
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
        <el-col :xs="24" :sm="8" style="margin-top: 20px">
            <el-card class="box-card" shadow="hover">
                <template #header>
                    <div class="card-header">
                        <h2>怪物掉落物</h2>
                    </div>
                </template>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <img src="../assets/img/talent/90px-破损的面具.png">
                    </el-col>
                    <el-col :xs="12" :sm="12" style="line-height: 97px">
                        灰色掉落物： {{grey_monsterdrop}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <img src="../assets/img/talent/90px-污秽的面具.png">
                    </el-col>
                    <el-col :xs="12" :sm="12" style="line-height: 97px">
                        绿色掉落物： {{green_monsterdrop}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <img src="../assets/img/talent/90px-不祥的面具.png">
                    </el-col>
                    <el-col :xs="12" :sm="12" style="line-height: 97px">
                        蓝色掉落物： {{blue_monsterdrop}}
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
        <el-col :xs="24" :sm="8" style="margin-top: 20px">
            <el-card class="box-card" shadow="hover">
                <template #header>
                    <div class="card-header">
                        <h2>其它材料</h2>
                    </div>
                </template>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <img src="../assets/img/talent/90px-东风之翎.png">
                    </el-col>
                    <el-col :xs="12" :sm="12" style="line-height: 97px">
                        周本材料： {{week_drop}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <img src="../assets/img/talent/90px-智识之冕.png">
                    </el-col>
                    <el-col :xs="12" :sm="12" style="line-height: 97px">
                        智识之冕： {{crown}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <img src="../assets/img/talent/90px-摩拉.png">
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 15px">
                        摩拉数量:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                        &nbsp;<br>
                        {{mora}}
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
    </el-row>

    <el-backtop :right="40" :bottom="100" />
</template>

<script>
    import { ref, reactive, toRefs, inject } from 'vue'
    import { ElRow, ElCol, ElSlider, ElButton, ElIcon, ElCard, ElBacktop, ElNotification, ElMessage, ElCascader, ElAvatar  } from 'element-plus'
    import { Cpu } from '@element-plus/icons-vue'
    import { talenttotal} from '@/api'

    export default {
        name: "AppIndexTalent",
        components: { ElRow, ElCol, ElSlider, ElButton, ElIcon, ElCard, ElBacktop, ElCascader, ElAvatar, Cpu},
        setup(){
            const reload = inject('reload')
            const role_cascader = [
                {
                    value: '火',
                    label: '火',
                    children: [
                        {value: '迪卢克', label: '迪卢克'},
                        {value: '可莉', label: '可莉'},
                        {value: '胡桃', label: '胡桃'},
                        {value: '宵宫', label: '宵宫'},
                        {value: '香菱', label: '香菱'},
                        {value: '班尼特', label: '班尼特'},
                        {value: '安柏', label: '安柏'},
                        {value: '辛焱', label: '辛焱'},
                        {value: '烟绯', label: '香菱'},
                        {value: '托马', label: '托马'}
                    ]
                },
                {
                    value: '水',
                    label: '水',
                    children: [
                        {value: '妮露', label: '妮露'},
                        {value: '夜兰', label: '夜兰'},
                        {value: '神里绫人', label: '神里绫人'},
                        {value: '珊瑚宫心海', label: '珊瑚宫心海'},
                        {value: '达达利亚', label: '达达利亚'},
                        {value: '莫娜', label: '莫娜'},
                        {value: '坎蒂丝', label: '坎蒂丝'},
                        {value: '芭芭拉', label: '芭芭拉'},
                        {value: '行秋', label: '行秋'},
                    ]
                },
                {
                    value: '风',
                    label: '风',
                    children: [
                        {value: '流浪者', label: '流浪者'},
                        {value: '枫原万叶', label: '枫原万叶'},
                        {value: '魈', label: '魈'},
                        {value: '温迪', label: '温迪'},
                        {value: '琴', label: '琴'},
                        {value: '珐露珊', label: '珐露珊'},
                        {value: '鹿野院平藏', label: '鹿野院平藏'},
                        {value: '早柚', label: '早柚'},
                        {value: '砂糖', label: '砂糖'},
                    ]
                },
                {
                    value: '雷',
                    label: '雷',
                    children: [
                        {value: '赛诺', label: '赛诺'},
                        {value: '八重神子', label: '八重神子'},
                        {value: '雷电将军', label: '雷电将军'},
                        {value: '刻晴', label: '刻晴'},
                        {value: '多莉', label: '多莉'},
                        {value: '久岐忍', label: '久岐忍'},
                        {value: '九条裟罗', label: '九条裟罗'},
                        {value: '北斗', label: '北斗'},
                        {value: '雷泽', label: '雷泽'},
                        {value: '菲谢尔', label: '菲谢尔'},
                        {value: '丽莎', label: '丽莎'},
                    ]
                },
                {
                    value: '草',
                    label: '草',
                    children: [
                        {value: '艾尔海森', label: '艾尔海森'},
                        {value: '纳西妲', label: '纳西妲'},
                        {value: '提纳里', label: '提纳里'},
                        {value: '瑶瑶', label: '瑶瑶'},
                        {value: '柯莱', label: '柯莱'},
                    ]
                },
                {
                    value: '冰',
                    label: '冰',
                    children: [
                        {value: '申鹤', label: '申鹤'},
                        {value: '神里绫华', label: '神里绫华'},
                        {value: '优菈', label: '优菈'},
                        {value: '甘雨', label: '甘雨'},
                        {value: '七七', label: '七七'},
                        {value: '莱依拉', label: '莱依拉'},
                        {value: '埃洛伊', label: '埃洛伊'},
                        {value: '罗莎莉亚', label: '罗莎莉亚'},
                        {value: '迪奥娜', label: '迪奥娜'},
                        {value: '凯亚', label: '凯亚'},
                        {value: '重云', label: '重云'},
                    ]
                },
                {
                    value: '岩',
                    label: '岩',
                    children: [
                        {value: '荒泷一斗', label: '荒泷一斗'},
                        {value: '阿贝多', label: '阿贝多'},
                        {value: '钟离', label: '钟离'},
                        {value: '云堇', label: '云堇'},
                        {value: '五郎', label: '五郎'},
                        {value: '诺艾尔', label: '诺艾尔'},
                        {value: '凝光', label: '凝光'},
                    ]
                }
            ]
            const roleimg = reactive({
                role_img_control: false,
                role_img_url: ""
            })
            const a_fanwei = ref([1, 1])
            const e_fanwei = ref([1, 1])
            const q_fanwei = ref([1, 1])
            const value = ref("")
            const marks_a = reactive({
                1 : {
                    label: "lv.1"
                },
                6 : '试试滑动两端滑块',
                10 :{
                    label: "lv.10"
                }
            })
            const marks_eq = reactive({
                1 : {
                    label: "lv.1"
                },
                10 :{
                    label: "lv.10"
                }
            })
            let needTalentInfo = reactive({
                green_talentbook: "-",
                blue_talentbook: "-",
                purple_talentbook: "-",
                grey_monsterdrop: "-",
                green_monsterdrop: "-",
                blue_monsterdrop: "-",
                week_drop: "-",
                crown: "-",
                mora: "-"
            })
            const calculate_quantity = () =>{
                if (submitRule()){
                    // 消息提示
                    ElNotification({
                        title: '未选天赋等级',
                        message: '您未选择天赋等级，试试滑动两端滑块。',
                        type: 'warning',
                        duration: 3000
                    })
                    // 刷新页面
                    reload()
                } else {
                    const talentDTO = {
                        a_start: a_fanwei.value[0],
                        a_end: a_fanwei.value[1],
                        e_start: e_fanwei.value[0],
                        e_end: e_fanwei.value[1],
                        q_start: q_fanwei.value[0],
                        q_end: q_fanwei.value[1]
                    }
                    talenttotal(talentDTO).then((res) =>{
                        if (res.data.code === 200){
                            let data = res.data.data
                            needTalentInfo.green_talentbook = data.green_talentbook
                            needTalentInfo.blue_talentbook = data.blue_talentbook
                            needTalentInfo.purple_talentbook = data.purple_talentbook
                            needTalentInfo.grey_monsterdrop = data.grey_monsterdrop
                            needTalentInfo.green_monsterdrop = data.green_monsterdrop
                            needTalentInfo.blue_monsterdrop = data.blue_monsterdrop
                            needTalentInfo.week_drop = data.week_drop
                            needTalentInfo.crown = data.crown
                            needTalentInfo.mora = data.mora

                            // 提示消息
                            ElMessage({
                                message: '计算成功',
                                type: 'success',
                                grouping: true,
                                duration: 1000,
                                center: true
                            })
                        } else {
                            ElNotification({
                                title: 'Error',
                                message: res.data.message,
                                type: 'error',
                            })
                        }
                    })
                    .catch((failres) =>{
                        console.log(failres.data)
                        ElNotification({
                            title: 'Error',
                            message: '请求失败，请联系管理员！',
                            type: 'error',
                        })
                    })
                }
            }
            const submitRule = () =>{
                let rule = a_fanwei.value[0] === a_fanwei.value[1]
                    && e_fanwei.value[0] === e_fanwei.value[1]
                    && q_fanwei.value[0] === q_fanwei.value[1];
                return rule;
            }
            const confirm_role = (value) =>{
                let rolename = value[1];
                roleimg.role_img_control = true;
                roleimg.role_img_url = "https://oss.foweng.cn/role_img/90px-" + rolename + "头像.png";
            }
            return{
                role_cascader,
                a_fanwei,
                e_fanwei,
                q_fanwei,
                value,
                marks_a,
                marks_eq,
                ...toRefs(needTalentInfo),
                ...toRefs(roleimg),
                reload,
                calculate_quantity,
                confirm_role,
                submitRule
            }
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
    .el-card{
        border-radius: 10px;
    }
    h2{
        margin: 0;
        font-size: 20pt;
        color: #303133;
    }
    .block{
        width: 80%;
        margin-left: 10%;
    }
    .btn_div{
        margin-top: 40px;
        margin-bottom: 20px;
    }
    /deep/ .el-dialog{
        text-align: left;
        min-width: 350px;
    }
    /deep/ .el-cascader{
        width: 100%;
        max-width: 350px;
    }
</style>
