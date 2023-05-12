<template>
    <!--  武器选择  -->
    <el-row :gutter="20" class="el-main-el-row" style="margin-top: 0px">
        <el-col :xs="12" :sm="12" style="line-height: 79px">
            <el-cascader
                    :options="arms_cascader"
                    v-model="value"
                    size="large"
                    :show-all-levels="false"
                    placeholder="选择武器"
                    @change="confirm_arms"
            />
        </el-col>
        <el-col :xs="12" :sm="12">
            <el-avatar
                    shape="square"
                    :size="75"
                    :src="arms_img_url"
                    v-show="arms_img_control"
                    style="background-color: #ffffff"
            />
        </el-col>
    </el-row>

    <!--  武器等级 row  -->
    <el-row :gutter="20" class="el-main-el-row">
        <el-col :xs="24" :sm="12">
            <h2>武器等级</h2>
        </el-col>
        <el-col :xs="24" :sm="12">
            <el-row>
                <el-col :span="2" style="margin: 0px">
                    <el-button
                            @click="arms_level_minus"
                            circle>
                        <el-icon><Minus /></el-icon>
                    </el-button>
                </el-col>
                <el-col :span="20" style="margin: 0px">
                    <div class="block">
                        <el-slider
                                v-model="arms_level_fanwei"
                                range
                                show-stops
                                :step="10"
                                :min="0"
                                :max="90"
                                :marks="marks_arms_level"
                        >
                        </el-slider>
                    </div>
                </el-col>
                <el-col :span="2" style="margin: 0px">
                    <el-button
                            @click="arms_level_plus"
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
                    v-model="arms_level_bt"
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
    <el-row :gutter="20" v-show="arms_material_control">
        <el-col :xs="24" :sm="8" style="margin-top: 20px">
            <el-card class="box-card" shadow="hover">
                <template #header>
                    <div class="card-header">
                        <h2>副本材料</h2>
                    </div>
                </template>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="green_dungeondrop_url"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                        {{green_dungeondrop_name}}：<br>
                        <br>
                        {{green_dungeondrop}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="blue_dungeondrop_url"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                        {{blue_dungeondrop_name}}：<br>
                        <br>
                        {{blue_dungeondrop}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="purple_dungeondrop_url"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                        {{purple_dungeondrop_name}}：<br>
                        <br>
                        {{purple_dungeondrop}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="golden_dungeondrop_url"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="padding-top: 5px">
                        {{golden_dungeondrop_name}}：<br>
                        <br>
                        {{golden_dungeondrop}}
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
        <el-col :xs="24" :sm="8" style="margin-top: 20px">
            <el-card class="box-card" shadow="hover">
                <template #header>
                    <div class="card-header">
                        <h2>精英怪物材料</h2>
                    </div>
                </template>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="green_elitedrop_url"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="line-height: 70px">
                        {{green_elitedrop_name}}： {{green_elitedrop}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="blue_elitedrop_url"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="line-height: 70px">
                        {{blue_elitedrop_name}}： {{blue_elitedrop}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="purple_elitedrop_url"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="line-height: 70px">
                        {{purple_elitedrop_name}}： {{purple_elitedrop}}
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="12" :sm="12">
                        <el-avatar
                                shape="square"
                                :size="70"
                                :src="forging_ore_url"
                                style="background-color: #ffffff"
                        />
                    </el-col>
                    <el-col :xs="12" :sm="12" style="line-height: 70px">
                        精锻用魔矿： {{forging_ore}}
                    </el-col>
                </el-row>
            </el-card>
        </el-col>
        <el-col :xs="24" :sm="8" style="margin-top: 20px">
            <el-card class="box-card" shadow="hover">
                <template #header>
                    <div class="card-header">
                        <h2>普通怪材料</h2>
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

    <el-backtop :right="40" :bottom="100" />
</template>

<script>
    import { ref, reactive, toRefs } from 'vue';
    import { Cpu, Minus, Plus } from '@element-plus/icons-vue'
    import { ElRow, ElCol, ElCascader, ElAvatar, ElSlider, ElIcon, ElSwitch, ElButton, ElCard, ElBacktop, ElNotification, ElMessage} from 'element-plus';
    import { armsmaterial, armstotal } from '@/api'

    export default {
        name: "AppIndexArms",
        components: { ElRow, ElCol, ElCascader, ElAvatar, ElSlider, ElIcon, ElSwitch, ElButton, ElCard, ElBacktop, Cpu, Minus, Plus},
        setup() {
            const value = ref("")
            let arms_name = ref("")
            const armsimg = reactive({
                arms_img_control: false,
                arms_img_url: ""
            })
            const arms_cascader = [
                {
                    value: '单手剑',
                    label: '单手剑',
                    children: [
                        {value: '裁叶萃光', label: '裁叶萃光'},
                        {value: '圣显之钥', label: '圣显之钥'},
                        {value: '磐岩结绿', label: '磐岩结绿'},
                        {value: '波乱月白经津', label: '波乱月白经津'},
                        {value: '风鹰剑', label: '风鹰剑'},
                        {value: '斫峰之刃', label: '斫峰之刃'},
                        {value: '雾切之回光', label: '雾切之回光'},
                        {value: '苍古自由之誓', label: '苍古自由之誓'},
                        {value: '天空之刃', label: '天空之刃'},

                        {value: '腐殖之剑', label: '腐殖之剑'},
                        {value: '黑剑', label: '黑剑'},
                        {value: '试作斩岩', label: '试作斩岩'},
                        {value: '暗巷闪光', label: '暗巷闪光'},
                        {value: '宗室长剑', label: '宗室长剑'},
                        {value: '铁蜂刺', label: '铁蜂刺'},
                        {value: '笛剑', label: '笛剑'},
                        {value: '辰砂之纺锤', label: '辰砂之纺锤'},
                        {value: '东花坊时雨', label: '东花坊时雨'},
                        {value: '天目影打刀', label: '天目影打刀'},
                        {value: '祭礼剑', label: '祭礼剑'},
                        {value: '匣里龙吟', label: '匣里龙吟'},
                        {value: '原木刀', label: '原木刀'},
                        {value: '笼钓瓶一心', label: '笼钓瓶一心'},
                        {value: '降临之剑', label: '降临之剑'},
                        {value: '西福斯的月光', label: '西福斯的月光'},
                        {value: '西风剑', label: '西风剑'},
                        {value: '黑岩长剑', label: '黑岩长剑'},

                        {value: '吃虎鱼刀', label: '吃虎鱼刀'},
                        {value: '黎明神剑', label: '黎明神剑'},
                        {value: '旅行剑', label: '旅行剑'},
                        {value: '暗铁剑', label: '暗铁剑'},
                        {value: '冷刃', label: '冷刃'},
                        {value: '飞天御剑', label: '飞天御剑'},
                    ]
                },
                {
                    value: '双手剑',
                    label: '双手剑',
                    children: [
                        {value: '苇海信标', label: '苇海信标'},
                        {value: '赤角石溃杵', label: '赤角石溃杵'},
                        {value: '天空之傲', label: '天空之傲'},
                        {value: '松籁响起之时', label: '松籁响起之时'},
                        {value: '无工之剑', label: '无工之剑'},
                        {value: '狼的末路', label: '狼的末路'},

                        {value: '雨裁', label: '雨裁'},
                        {value: '白影剑', label: '白影剑'},
                        {value: '黑岩斩刀', label: '黑岩斩刀'},
                        {value: '宗室大剑', label: '宗室大剑'},
                        {value: '祭礼大剑', label: '祭礼大剑'},
                        {value: '雪葬的星银', label: '雪葬的星银'},
                        {value: '螭骨剑', label: '螭骨剑'},
                        {value: '饰铁之花', label: '饰铁之花'},
                        {value: '试作古华', label: '试作古华'},
                        {value: '西风大剑', label: '西风大剑'},
                        {value: '桂木斩长正', label: '桂木斩长正'},
                        {value: '玛海菈的水色', label: '玛海菈的水色'},
                        {value: '森林王器', label: '森林王器'},
                        {value: '钟剑', label: '钟剑'},
                        {value: '千岩古剑', label: '千岩古剑'},
                        {value: '恶王丸', label: '恶王丸'},
                        {value: '衔珠海皇', label: '衔珠海皇'},

                        {value: '沐浴龙血的剑', label: '沐浴龙血的剑'},
                        {value: '白铁大剑', label: '白铁大剑'},
                        {value: '铁影阔剑', label: '铁影阔剑'},
                        {value: '飞天大御剑', label: '飞天大御剑'},
                        {value: '以理服人', label: '以理服人'},
                    ]
                },
                {
                    value: '长柄武器',
                    label: '长柄武器',
                    children: [
                        {value: '薙草之稻光', label: '薙草之稻光'},
                        {value: '护摩之杖', label: '护摩之杖'},
                        {value: '赤沙之杖', label: '赤沙之杖'},
                        {value: '和璞鸢', label: '和璞鸢'},
                        {value: '天空之脊', label: '天空之脊'},
                        {value: '贯虹之槊', label: '贯虹之槊'},
                        {value: '息灾', label: '息灾'},

                        {value: '流月针', label: '流月针'},
                        {value: '匣里灭辰', label: '匣里灭辰'},
                        {value: '贯月矢', label: '贯月矢'},
                        {value: '「渔获」', label: '「渔获」'},
                        {value: '千岩长枪', label: '千岩长枪'},
                        {value: '试作星镰', label: '试作星镰'},
                        {value: '西风长枪', label: '西风长枪'},
                        {value: '黑岩刺枪', label: '黑岩刺枪'},
                        {value: '风信之锋', label: '风信之锋'},
                        {value: '龙脊长枪', label: '龙脊长枪'},
                        {value: '喜多院十文字', label: '喜多院十文字'},
                        {value: '决斗之枪', label: '决斗之枪'},
                        {value: '宗室猎枪', label: '宗室猎枪'},
                        {value: '断浪长鳍', label: '断浪长鳍'},

                        {value: '黑缨枪', label: '黑缨枪'},
                        {value: '钺矛', label: '钺矛'},
                        {value: '白缨枪', label: '白缨枪'},
                    ]
                },
                {
                    value: '法器',
                    label: '法器',
                    children: [
                        {value: '不灭月华', label: '不灭月华'},
                        {value: '四风原典', label: '四风原典'},
                        {value: '天空之卷', label: '天空之卷'},
                        {value: '尘世之锁', label: '尘世之锁'},
                        {value: '千夜浮梦', label: '千夜浮梦'},
                        {value: '碧落之珑', label: '碧落之珑'},
                        {value: '图莱杜拉的回忆', label: '图莱杜拉的回忆'},
                        {value: '神乐之真意', label: '神乐之真意'},

                        {value: '万国诸海图谱', label: '万国诸海图谱'},
                        {value: '白辰之环', label: '白辰之环'},
                        {value: '证誓之明瞳', label: '证誓之明瞳'},
                        {value: '昭心', label: '昭心'},
                        {value: '嘟嘟可故事集', label: '嘟嘟可故事集'},
                        {value: '盈满之实', label: '盈满之实'},
                        {value: '暗巷的酒与诗', label: '暗巷的酒与诗'},
                        {value: '流浪的晚星', label: '流浪的晚星'},
                        {value: '宗室秘法录', label: '宗室秘法录'},
                        {value: '流浪乐章', label: '流浪乐章'},
                        {value: '匣里日月', label: '匣里日月'},
                        {value: '西风秘典', label: '西风秘典'},
                        {value: '忍冬之果', label: '忍冬之果'},
                        {value: '试作金珀', label: '试作金珀'},
                        {value: '祭礼残章', label: '祭礼残章'},
                        {value: '黑岩绯玉', label: '黑岩绯玉'},

                        {value: '异世界行记', label: '异世界行记'},
                        {value: '翡玉法球', label: '翡玉法球'},
                        {value: '甲级宝珏', label: '甲级宝珏'},
                        {value: '魔导绪论', label: '魔导绪论'},
                        {value: '讨龙英杰谭', label: '讨龙英杰谭'},
                    ]
                },
                {
                    value: '弓',
                    label: '弓',
                    children: [
                        {value: '终末嗟叹之诗', label: '终末嗟叹之诗'},
                        {value: '飞雷之弦振', label: '飞雷之弦振'},
                        {value: '若水', label: '若水'},
                        {value: '冬极白星', label: '冬极白星'},
                        {value: '天空之翼', label: '天空之翼'},
                        {value: '猎人之径', label: '猎人之径'},
                        {value: '阿莫斯之弓', label: '阿莫斯之弓'},

                        {value: '竭泽', label: '竭泽'},
                        {value: '黑岩战弓', label: '黑岩战弓'},
                        {value: '王下近侍', label: '王下近侍'},
                        {value: '试作澹月', label: '试作澹月'},
                        {value: '宗室长弓', label: '宗室长弓'},
                        {value: '曚云之月', label: '曚云之月'},
                        {value: '破魔之弓', label: '破魔之弓'},
                        {value: '暗巷猎手', label: '暗巷猎手'},
                        {value: '祭礼弓', label: '祭礼弓'},
                        {value: '掠食者', label: '掠食者'},
                        {value: '落霞', label: '落霞'},
                        {value: '苍翠猎弓', label: '苍翠猎弓'},
                        {value: '绝弦', label: '绝弦'},
                        {value: '风花之颂', label: '风花之颂'},
                        {value: '幽夜华尔兹', label: '幽夜华尔兹'},
                        {value: '黑岩绯玉', label: '黑岩绯玉'},
                        {value: '钢轮弓', label: '钢轮弓'},
                        {value: '西风猎弓', label: '西风猎弓'},
                        {value: '弓藏', label: '弓藏'},

                        {value: '信使', label: '信使'},
                        {value: '弹弓', label: '弹弓'},
                        {value: '反曲弓', label: '反曲弓'},
                        {value: '神射手之誓', label: '神射手之誓'},
                        {value: '鸦羽弓', label: '鸦羽弓'},
                    ]
                },
            ]
            let needarmsInfo = reactive({
                green_dungeondrop: "-",
                blue_dungeondrop: "-",
                purple_dungeondrop: "-",
                golden_dungeondrop: "-",

                grey_monsterdrop: "-",
                green_monsterdrop: "-",
                blue_monsterdrop: "-",
                forging_ore: "-",

                green_elitedrop: "-",
                blue_elitedrop: "-",
                purple_elitedrop: "-",
                mora: "-"
            })
            const arms_material_img = reactive({
                arms_material_control: false,

                green_dungeondrop_url: "",
                blue_dungeondrop_url: "",
                purple_dungeondrop_url: "",
                golden_dungeondrop_url: "",

                grey_monsterdrop_url: "",
                green_monsterdrop_url: "",
                blue_monsterdrop_url: "",
                forging_ore_url: "https://oss.foweng.cn/arms_material_img/70px-精锻用魔矿.png",

                green_elitedrop_url: "",
                blue_elitedrop_url: "",
                purple_elitedrop_url: "",
                mora_url: "https://oss.foweng.cn/talent_material_img/70px-摩拉.png",

                green_dungeondrop_name: "",
                blue_dungeondrop_name: "",
                purple_dungeondrop_name: "",
                golden_dungeondrop_name: "",

                green_elitedrop_name: "",
                blue_elitedrop_name: "",
                purple_elitedrop_name: "",

                grey_monsterdrop_name: "",
                green_monsterdrop_name: "",
                blue_monsterdrop_name: "",
            })
            const arms_level_fanwei = ref([0, 0])
            const arms_level_bt = ref(false)
            const marks_arms_level = reactive({
                20 : {
                    label: "lv.20"
                },
                50 : {
                    label: "50"
                },
                70 : {
                    label: "70"
                },
                90 :{
                    label: "lv.90"
                }
            })

            const confirm_arms = (value) =>{
                arms_name.value = value[1];
                armsimg.arms_img_url = "https://oss.foweng.cn/arms_img/70px-" + arms_name.value  + ".png";
                armsimg.arms_img_control = true;

                // 重置等级
                arms_level_fanwei.value[0] = 0;
                arms_level_fanwei.value[1] = 0;


                // 重置材料数量
                needarmsInfo.green_dungeondrop = "-";
                needarmsInfo.blue_dungeondrop = "-";
                needarmsInfo.purple_dungeondrop = "-";
                needarmsInfo.golden_dungeondrop = "-";

                needarmsInfo.grey_monsterdrop = "-";
                needarmsInfo.green_monsterdrop = "-";
                needarmsInfo.blue_monsterdrop = "-";
                needarmsInfo.forging_ore = "-";

                needarmsInfo.green_elitedrop =  "-";
                needarmsInfo.blue_elitedrop = "-";
                needarmsInfo.purple_elitedrop =  "-";
                needarmsInfo.mora = "-";

                // 查询角色所需材料请求
                const armsmaterialDTO = {
                    arms_name: arms_name.value
                }
                armsmaterial(armsmaterialDTO).then((res) =>{
                    if (res.data.code === 200){
                        let data = res.data.data;

                        // 替换图像显示
                        arms_material_img.green_dungeondrop_url
                            = "https://oss.foweng.cn/arms_material_img/70px-" + data.green_dungeondrop + ".png";
                        arms_material_img.blue_dungeondrop_url
                            = "https://oss.foweng.cn/arms_material_img/70px-" + data.blue_dungeondrop + ".png";
                        arms_material_img.purple_dungeondrop_url
                            = "https://oss.foweng.cn/arms_material_img/70px-" + data.purple_dungeondrop + ".png";
                        arms_material_img.golden_dungeondrop_url
                            = "https://oss.foweng.cn/arms_material_img/70px-" + data.golden_dungeondrop + ".png";

                        arms_material_img.green_elitedrop_url
                            = "https://oss.foweng.cn/arms_material_img/70px-" + data.green_elitedrop + ".png";
                        arms_material_img.blue_elitedrop_url
                            = "https://oss.foweng.cn/arms_material_img/70px-" + data.blue_elitedrop + ".png";
                        arms_material_img.purple_elitedrop_url
                            = "https://oss.foweng.cn/arms_material_img/70px-" + data.purple_elitedrop + ".png";

                        arms_material_img.grey_monsterdrop_url
                            = "https://oss.foweng.cn/monsterdrop_img/70px-" + data.grey_monsterdrop + ".png";
                        arms_material_img.green_monsterdrop_url
                            = "https://oss.foweng.cn/monsterdrop_img/70px-" + data.green_monsterdrop + ".png";
                        arms_material_img.blue_monsterdrop_url
                            = "https://oss.foweng.cn/monsterdrop_img/70px-" + data.blue_monsterdrop + ".png";

                        // 替换文字显示
                        arms_material_img.green_dungeondrop_name = data.green_dungeondrop;
                        arms_material_img.blue_dungeondrop_name = data.blue_dungeondrop;
                        arms_material_img.purple_dungeondrop_name = data.purple_dungeondrop;
                        arms_material_img.golden_dungeondrop_name = data.golden_dungeondrop;

                        arms_material_img.green_elitedrop_name = data.green_elitedrop;
                        arms_material_img.blue_elitedrop_name = data.blue_elitedrop;
                        arms_material_img.purple_elitedrop_name = data.purple_elitedrop;

                        arms_material_img.grey_monsterdrop_name = data.grey_monsterdrop;
                        arms_material_img.green_monsterdrop_name = data.green_monsterdrop;
                        arms_material_img.blue_monsterdrop_name = data.blue_monsterdrop;
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
                arms_material_img.arms_material_control = true;
            }
            const calculate_quantity = () =>{
                // 未选择武器
                if (armsimg.arms_img_control === false){
                    // 消息提示
                    ElNotification({
                        title: '未选武器',
                        message: '您未选择计算升级材料的武器！',
                        type: 'warning',
                        duration: 3000
                    })
                    return;
                }
                if (submitArms()){
                    // 消息提示
                    ElNotification({
                        title: '未选武器等级',
                        message: '您未选择武器升级等级，试试滑动两端滑块。',
                        type: 'warning',
                        duration: 3000
                    })
                } else {
                    const armsDTO = {
                        arms_name: arms_name.value,
                        arms_level_start: arms_level_fanwei.value[0],
                        arms_level_end: arms_level_fanwei.value[1],
                        arms_level_bt: arms_level_bt.value,
                    }
                    console.log(armsDTO)
                    armstotal(armsDTO).then((res) =>{
                        if (res.data.code === 200){
                            let data = res.data.data;

                            needarmsInfo.green_dungeondrop = data.green_dungeondrop;
                            needarmsInfo.blue_dungeondrop = data.blue_dungeondrop;
                            needarmsInfo.purple_dungeondrop = data.purple_dungeondrop;
                            needarmsInfo.golden_dungeondrop = data.golden_dungeondrop;

                            needarmsInfo.grey_monsterdrop = data.grey_monsterdrop;
                            needarmsInfo.green_monsterdrop = data.green_monsterdrop;
                            needarmsInfo.blue_monsterdrop = data.blue_monsterdrop;
                            needarmsInfo.forging_ore = data.forging_ore;

                            needarmsInfo.green_elitedrop =  data.green_elitedrop;
                            needarmsInfo.blue_elitedrop = data.blue_elitedrop;
                            needarmsInfo.purple_elitedrop =  data.purple_elitedrop;
                            needarmsInfo.mora = data.mora;

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
            const submitArms = () =>{
                let rule = arms_level_fanwei.value[0] === arms_level_fanwei.value[1]
                return rule;
            }

            const arms_level_minus = () =>{
                if (arms_level_fanwei.value[1] <= 0){
                    arms_level_fanwei.value[1] = 0;
                }else {
                    arms_level_fanwei.value[1] = arms_level_fanwei.value[1] - 10;
                }
            }
            const arms_level_plus = () =>{
                if (arms_level_fanwei.value[1] >= 90){
                    arms_level_fanwei.value[1] = 90;
                }else {
                    arms_level_fanwei.value[1] = arms_level_fanwei.value[1] + 10;
                }
            }

            return {
                arms_name,
                value,
                arms_cascader,
                arms_level_fanwei,
                arms_level_bt,
                marks_arms_level,
                ...toRefs(needarmsInfo),
                ...toRefs(armsimg),
                ...toRefs(arms_material_img),

                confirm_arms,
                calculate_quantity,
                submitArms,

                arms_level_minus,
                arms_level_plus
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
