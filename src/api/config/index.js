
import interfaceConf from './interface'
import mogerConfig from './mogerConfig'

const mock = false // 启动mock数据 （优先级低于模块的mock配置）
const proxy = false // 默认代理  =>  使用代理请求数据（优先级低于模块的proxy配置）

const api = mogerConfig(interfaceConf, {
  mock, proxy
})

export {
  api
}
