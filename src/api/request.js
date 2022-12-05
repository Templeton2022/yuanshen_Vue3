// 对axios进行二次封装
import axios from 'axios'

// requests就是axios，只不过稍微配置一下
const requests  = axios.create({
    // 配置对象
    //基础路径，发送请求时，路径当中会出现api
    baseURL: 'https://api.foweng.cn:9091/api',
    // 代表请求超时的时间
    timeout: 5000
})

export default requests;
