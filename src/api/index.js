// 对所有的api接口进行统一管理
import requests from './request'

// 计算天赋合计接口
export const talenttotal= (talentDTO) => requests({
    url: '/talent/talenttotal',
    method: 'post',
    data: talentDTO
})
