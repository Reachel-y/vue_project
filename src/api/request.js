import axios  from "axios";
const instance=axios.create({
  baseURL:'http://www.honguedu.com/educate',
  timeout: 2000
})

// 拦截器-请求拦截
instance.interceptors.request.use(config=>{
  
  // 部分接口需要拿到token
  let token=localStorage.getItem('token');
  if(token)
  {
    config.headers={
      'aa-token':token,
    }
  }
  return config;
},err=>{
  return Promise.reject(err)
})

// 拦截器-响应拦截
instance.interceptors.response.use(res=>{
  return res.data;
  },err=>{
    return Promise.reject(err);
  });
// 整体导出
  export default instance;