import axios from 'axios'
// import { Message,Loading } from 'element-plus'
import { ElMessage, ElLoading } from 'element-plus'
// import {baseUrl} from './projectEnv'
// import router from '@/router'
import authToken from './authToken'


let loadingInstance = null  //全部loading
const instance = axios.create({
    timeout: 10000,
    // baseURL: baseUrl
    baseURL:'/api'
})
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let httpCode = {
    400: '请求参数错误',
    401: '权限不足, 请重新登录',
    403: '服务器拒绝本次访问',
    404: '请求资源未找到',
    500: '内部服务器错误',
    501: '服务器不支持该请求中使用的方法',
    502: '网关错误',
    504: '网关超时'
}

//添加请求拦截器
instance.interceptors.request.use(config => {
    config.headers['Authorization'] = 'Bearer '+ authToken.get();
    //发送请求之前配置

    //发起请求时加载全局loading，请求成功或失败时关闭
    loadingInstance = ElLoading.service({
        spinner: 'fa fa-spinner fa-spin fa-3x fa-fw',
        text: '拼命加载中...'
    })
    //添加时间戳参数，防止浏览器（IE）对get请求的缓存
    if(config.method === 'get'){
        config.params = {
            ...config.params,
            t: new Date().getTime()
        }
    }

    //导出文件，二进制流
    if (config.url.includes('pur/contract/export')) {
        config.headers['responseType'] = 'blob'
    }
    //文件上传
    if (config.url.includes('pur/contract/upload')) {
        config.headers['Content-Type'] = 'multipart/form-data'
    }  

    return config;
}, error=>{
    return Promise.reject(error)
})


//添加响应拦截器
instance.interceptors.response.use(response => {
    console.log(response)
    loadingInstance.close()

    const { data,statusText,message } = response
    if(statusText === 'OK'){  //状态码要更改
        return Promise.resolve(data)
    }else{
        ElMessage({
            message: data,
            type: 'error'
        })
        return Promise.reject(message)
    }
}, error => {
    console.log(error)
    loadingInstance.close()
    if(error.response){
        // 根据失败的请求码给予对应的提示信息
        const {status,data} = error.response
        let tips = status in httpCode ? httpCode[status] : data.message
        ElMessage({
            message: tips,
            type: 'error'
        })
        if(status === 401){
            //token失效
            // router.push({
            //     path: `login`
            // })
        }
        return Promise.reject(error)
    } else {
        ElMessage({
            message: '请求超时，请刷新重试',
            type: 'error'
        })
        return Promise.reject(new Error('请求超时，请刷新重试'))
    }
})


// 统一封装get请求
export const get = (url, params, config = {}) => {
    return new Promise((resolve, reject) => {
        instance({
            method: 'get',
            url,
            params,
            ...config
        })
        .then(response => {
            resolve(response)
        }).catch(error => {
            console.log(error)
            reject(error)
        })
    })
}

// 统一封装post请求
export const post = (url, params, config = {}) => {
    return new Promise((resolve, reject) => {
        instance({
            method: 'post',
            url,
            ...config
        })
        .then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

