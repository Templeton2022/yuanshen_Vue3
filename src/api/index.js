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

// 计算角色升级材料合计接口
export const roletotal = (roleDTO) => requests({
    url: '/role/roletotal',
    method: 'post',
    data: roleDTO
})

// 查询角色升级材料接口
export const rolematerial = (rolematerialDTO) => requests({
    url: '/role/rolematerial',
    method: 'post',
    data: rolematerialDTO
})
