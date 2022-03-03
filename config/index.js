let baseURL = ''
//相当于全局变量
switch (process.env.NODE_ENV) {
  // 开发环境
  case 'development':
    baseURL = {
      // apiUrl: 'http://192.168.10.51:8902/educate/'
      apiUrl: 'http://www.honguedu.com/educate/'
    }
    break
  // 线上环境
  case 'production':
    baseURL = {
      apiUrl: 'http://www.honguedu.com/educate/' // 生产环境url
    }
    break
  default:
}
export default baseURL