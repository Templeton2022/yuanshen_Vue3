// 对所有的api接口进行统一管理
import requests from './request'

// 计算天赋合计接口
export const talenttotal = (talentDTO) => requests({
    url: '/talent/talenttotal',
    method: 'post',
    data: talentDTO
})

// 查询角色天赋材料接口
export const talentmaterial = (talentmaterialDTO) => requests({
    url: '/talent/talentmaterial',
    method: 'post',
    data: talentmaterialDTO
})

