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

    <!--  角色等级 row  -->
    <el-row :gutter="20" class="el-main-el-row">
        <el-col :xs="24" :sm="12">
            <h2>角色等级</h2>
        </el-col>
        <el-col :xs="24" :sm="12">
            <el-row>
                <el-col :span="2" style="margin: 0px">
                    <el-button
                            @click="role_level_minus"
                            circle>
                        <el-icon><Minus /></el-icon>
                    </el-button>
                </el-col>
                <el-col :span="20" style="margin: 0px">
                    <div class="block">
                        <el-slider
                                v-model="role_level_fanwei"
                                range
                                show-stops
                                :step="10"
                                :min="0"
                                :max="90"
                                :marks="marks_role_level"
                        >
                        </el-slider>
                    </div>
                </el-col>
                <el-col :span="2" style="margin: 0px">
                    <el-button
                            @click="role_level_plus"
                            circle>
                        <el-icon><Plus /></el-icon>
                    </el-button>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
    <!--  是否突破  -->
    <el-row :gutter="20" class="el-main-el-row">
        <el-col :xs="24" :sm="12">
            <h2>是否突破</h2>
        </el-col>
        <el-col :xs="24" :sm="12">
            <el-switch
                v-model="role_level_bt"
                size="large"
            />
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
    <el-row :gutter="20" v-show="role_material_control">
        <el-col :xs="24" :sm="8" style="margin-top: 20px">
            <el-card class="box-card" shadow="hover">
                <template #header>
                    <div class="card-header">
                        <h2>元素晶石</h2>
                    </div>
                </template>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="powder_url"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                        {{powder_name}}：<br>
                        <br>
                        {{powder}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="debris_url"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                        {{debris_name}}：<br>
                        <br>
                        {{debris}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="piece_url"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                        {{piece_name}}：<br>
                        <br>
                        {{piece}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="gemstone_url"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                        {{gemstone_name}}：<br>
                        <br>
                        {{gemstone}}
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
        <el-col :xs="24" :sm="8" style="margin-top: 20px">
            <el-card class="box-card" shadow="hover">
                <template #header>
                    <div class="card-header">
                        <h2>怪物材料</h2>
                    </div>
                </template>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="grey_monsterdrop_url"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="line-height: 70px">
                        {{grey_monsterdrop_name}}： {{grey_monsterdrop}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="green_monsterdrop_url"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="line-height: 70px">
                        {{green_monsterdrop_name}}： {{green_monsterdrop}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="blue_monsterdrop_url"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="line-height: 70px">
                        {{blue_monsterdrop_name}}： {{blue_monsterdrop}}
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
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="boss_drop_url"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="line-height: 70px">
                        {{boss_drop_name}}： {{boss_drop}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="collected_items_url"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="line-height: 70px">
                        {{collected_items_name}}： {{collected_items}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="experience_book_url"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="line-height: 70px">
                        经验书： {{experience_book}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="mora_url"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                        摩拉数量:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                        &nbsp;<br>
                        {{mora}}
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    import { ref, reactive, toRefs, inject } from 'vue'
    import { Cpu, Minus, Plus } from '@element-plus/icons-vue'
    import {rolematerial, roletotal} from '@/api'
    import {ElRow, ElCol, ElSlider, ElButton, ElIcon, ElSwitch, ElCard, ElNotification, ElMessage, ElCascader, ElAvatar} from 'element-plus'

    export default {
        name: "AppIndexRole",
        components: { ElRow, ElCol, ElSlider, ElButton, ElIcon, ElCard, ElSwitch, ElCascader, ElAvatar, Cpu, Minus, Plus},
        setup(){
            const reload = inject('reload')

            const roleimg = reactive({
                role_img_control: false,
                role_img_url: ""
            })
            const role_material_img = reactive({
                role_material_control: false,

                powder_url: "",
                debris_url: "",
                piece_url: "",
                gemstone_url: "",

                grey_monsterdrop_url: "",
                green_monsterdrop_url: "",
                blue_monsterdrop_url: "",

                boss_drop_url: "",
                collected_items_url: "",
                experience_book_url: "https://oss.foweng.cn/role_material_img/70px-大英雄的经验.png",
                mora_url: "https://oss.foweng.cn/talent_material_img/70px-摩拉.png",

                powder_name: "",
                debris_name: "",
                piece_name: "",
                gemstone_name: "",

                grey_monsterdrop_name: "",
                green_monsterdrop_name: "",
                blue_monsterdrop_name: "",

                boss_drop_name: "",
                collected_items_name: "",
            })
            let needroleInfo = reactive({
                powder: "-",
                debris: "-",
                piece: "-",
                gemstone: "-",

                grey_monsterdrop: "-",
                green_monsterdrop: "-",
                blue_monsterdrop: "-",

                collected_items: "-",
                boss_drop: "-",
                experience_book: "-",
                mora: "-"
            })
            const role_cascader = [
                {
                    value: '火',
                    label: '火',
                    children: [
                        {value: '迪希雅', label: '迪希雅'},
                        {value: '宵宫', label: '宵宫'},
                        {value: '胡桃', label: '胡桃'},
                        {value: '可莉', label: '可莉'},
                        {value: '迪卢克', label: '迪卢克'},
                        {value: '香菱', label: '香菱'},
                        {value: '班尼特', label: '班尼特'},
                        {value: '安柏', label: '安柏'},
                        {value: '辛焱', label: '辛焱'},
                        {value: '烟绯', label: '烟绯'},
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
                        {value: '白术', label: '白术'},
                        {value: '艾尔海森', label: '艾尔海森'},
                        {value: '纳西妲', label: '纳西妲'},
                        {value: '提纳里', label: '提纳里'},
                        {value: '卡维', label: '卡维'},
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
                        {value: '米卡', label: '米卡'},
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

            const confirm_role = (value) =>{
                role_name.value = value[1];
                roleimg.role_img_url = "https://oss.foweng.cn/role_img/90px-" + role_name.value  + "头像.png";
                roleimg.role_img_control = true;

                console.log(role_name.value)
                // 重置等级
                role_level_fanwei.value[0] = 0;
                role_level_fanwei.value[1] = 0;


                // 重置材料数量
                needroleInfo.powder = "-";
                needroleInfo.debris = "-";
                needroleInfo.piece = "-";
                needroleInfo.gemstone = "-";

                needroleInfo.grey_monsterdrop = "-";
                needroleInfo.green_monsterdrop = "-";
                needroleInfo.blue_monsterdrop = "-";

                needroleInfo.collected_items = "-";
                needroleInfo.experience_book = "-";
                needroleInfo.boss_drop = "-";
                needroleInfo.mora = "-";

                // 查询角色所需材料请求
                const rolematerialDTO = {
                    role_name: role_name.value
                }
                rolematerial(rolematerialDTO).then((res) =>{
                    if (res.data.code === 200){
                        let data = res.data.data;

                        // 替换图像显示
                        role_material_img.powder_url
                            = "https://oss.foweng.cn/role_material_img/70px-" + data.powder + ".png";
                        role_material_img.debris_url
                            = "https://oss.foweng.cn/role_material_img/70px-" + data.debris + ".png";
                        role_material_img.piece_url
                            = "https://oss.foweng.cn/role_material_img/70px-" + data.piece + ".png";
                        role_material_img.gemstone_url
                            = "https://oss.foweng.cn/role_material_img/70px-" + data.gemstone + ".png";

                        role_material_img.grey_monsterdrop_url
                            = "https://oss.foweng.cn/monsterdrop_img/70px-" + data.grey_monsterdrop + ".png";
                        role_material_img.green_monsterdrop_url
                            = "https://oss.foweng.cn/monsterdrop_img/70px-" + data.green_monsterdrop + ".png";
                        role_material_img.blue_monsterdrop_url
                            = "https://oss.foweng.cn/monsterdrop_img/70px-" + data.blue_monsterdrop + ".png";

                        role_material_img.collected_items_url
                            = "https://oss.foweng.cn/role_material_img/70px-" + data.collected_items + ".png";
                        role_material_img.boss_drop_url
                            = "https://oss.foweng.cn/role_material_img/70px-" + data.boss_drop + ".png";

                        // 替换文字显示
                        role_material_img.powder_name = data.powder;
                        role_material_img.debris_name = data.debris;
                        role_material_img.piece_name = data.piece;
                        role_material_img.gemstone_name = data.gemstone;

                        role_material_img.grey_monsterdrop_name = data.grey_monsterdrop;
                        role_material_img.green_monsterdrop_name = data.green_monsterdrop;
                        role_material_img.blue_monsterdrop_name = data.blue_monsterdrop;

                        role_material_img.collected_items_name = data.collected_items;
                        role_material_img.boss_drop_name = data.boss_drop;
                    }
                    else {
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
                role_material_img.role_material_control = true;
            }
            const calculate_quantity = () =>{
                // 未选择角色
                if (roleimg.role_img_control === false){
                    // 消息提示
                    ElNotification({
                        title: '未选角色',
                        message: '您未选择计算天赋材料的角色！',
                        type: 'warning',
                        duration: 3000
                    })
                    return;
                }
                if (submitRule()){
                    // 消息提示
                    ElNotification({
                        title: '未选角色等级',
                        message: '您未选择角色升级等级，试试滑动两端滑块。',
                        type: 'warning',
                        duration: 3000
                    })
                } else {
                    const roleDTO = {
                        role_name: role_name.value,
                        role_level_start: role_level_fanwei.value[0],
                        role_level_end: role_level_fanwei.value[1],
                        role_level_bt: role_level_bt.value,
                    }
                    console.log(roleDTO)
                    roletotal(roleDTO).then((res) =>{
                        if (res.data.code === 200){
                            let data = res.data.data;

                            needroleInfo.powder = data.powder;
                            needroleInfo.debris = data.debris;
                            needroleInfo.piece = data.piece;
                            needroleInfo.gemstone = data.gemstone;

                            needroleInfo.grey_monsterdrop = data.grey_monsterdrop;
                            needroleInfo.green_monsterdrop = data.green_monsterdrop;
                            needroleInfo.blue_monsterdrop = data.blue_monsterdrop;

                            needroleInfo.collected_items = data.collected_items;
                            needroleInfo.boss_drop = data.boss_drop;
                            needroleInfo.experience_book = data.experience_book;
                            needroleInfo.mora = data.mora;

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
                let rule = role_level_fanwei.value[0] === role_level_fanwei.value[1]
                return rule;
            }

            const role_level_fanwei = ref([0, 0])
            const marks_role_level = reactive({
                20 : {
                    label: "lv.20"
                },
                40 : {
                    label: "lv.40"
                },
                50 : {
                    label: "lv.50"
                },
                60 : {
                    label: "lv.60"
                },
                70 : {
                    label: "lv.70"
                },
                80 : {
                    label: "lv.80"
                },
                90 :{
                    label: "lv.90"
                }
            })
            const role_level_bt = ref(false)
            const value = ref("")
            let role_name = ref("")

            const role_level_minus = () =>{
                if (role_level_fanwei.value[1] <= 0){
                    role_level_fanwei.value[1] = 0;
                }else {
                    role_level_fanwei.value[1] = role_level_fanwei.value[1] - 10;
                }
            }
            const role_level_plus = () =>{
                if (role_level_fanwei.value[1] >= 90){
                    role_level_fanwei.value[1] = 90;
                }else {
                    role_level_fanwei.value[1] = role_level_fanwei.value[1] + 10;
                }
            }


            return{
                role_cascader,
                marks_role_level,
                role_level_fanwei,
                role_level_bt,
                value,
                ...toRefs(needroleInfo),
                ...toRefs(roleimg),
                ...toRefs(role_material_img),
                reload,
                confirm_role,
                calculate_quantity,
                submitRule,

                role_level_minus,
                role_level_plus,
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
