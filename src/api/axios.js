/**
 * 发送axios请求模块
 */
import axios from 'axios'
// 1.请求接口的封装
let BASE_URL = 'http://localhost:4000'

export default function ajax(data={},type='GET'){
    return new Promise((resolve, reject)=>{
        // 执行异步请求
        let promise;
        if(type === 'GET'){
            // 准备url query参数数据
            let dataStr = '' // 数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' +data[key] + '&'
            })
            if(dataStr !== ''){
                dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
                BASE_URL = BASE_URL + '?' +dataStr
            }
            // 发送get请求
            promise = axios.get(BASE_URL)
        }else {
            // 发送POST请求
            promise = axios.post(BASE_URL,data)
        }

        promise.then(value => {
            // 成功调用resolve
            resolve(value.data)
        }).catch(reason => {
            // 失败调用resolve
            reject(reason)
        })
    })

}
