// 1. 引入axios
import axios from 'axios'

// enum MESS {
//     "操作成功" = 200,
//     "密码错误" = 401,
//     "账号错误" = 402,
//     "请求异常" = 404
// }

// // 2. 配置axios基本配置，比如baseUrl,headers,timeout
// const $http = axios.create({
//     timeout:3000,
//     headers:{
//         "Content-Type":"application/json;chartset=utf-8"
//     }
// })

// // 3. 请求拦截
// $http.interceptors.request.use(config => {
//     config.headers = config.headers || {};
//     // config.headers.token = 
//     return axios
// })

// // 4. 响应拦截
// $http.interceptors.response.use(res => {
//     const code:number = res.data?.code;
//     if(code !=200) {
//         alert(MESS[code]);
//         return Promise.reject(res.data)
//     } else {
//         return res.data
//     }
// },err => {
//     console.log(err);
// })
// // 5. 进行二次封装
// export default $http