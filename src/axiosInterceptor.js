// src/axiosInstance.js
import axios from 'axios'
import { ref } from 'vue'

// 创建一个响应式变量来存储token
export const token = ref('')

// 创建axios实例
const axiosInterceptor = axios.create({
  baseURL: '', // 设置基础URL
  headers: {
    'Content-Type': 'application/json'
  }
})

// 添加请求拦截器
axiosInterceptor.interceptors.request.use(
  (config) => {
    if (token.value) {
      config.headers.Authorization = `Bearer ${token.value}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInterceptor
