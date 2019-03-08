const mogerConfig = (config, {proxy, mock}) => {
  let paths, baseUrl
  const results = {}
  if (config.mock || (config.mock === undefined && mock)) {
    baseUrl = config.mockUrl
    paths = config.mockPaths
  } else {
    paths = config.paths
    baseUrl = config.proxy || (config.proxy === undefined && proxy) ? config.proxyUrl : config.serverUrl
  }
  mapPath(results, paths, baseUrl)
 
  return results
}
const mapPath = (proxy, paths, baseUrl) => {
  for (let key in paths) {
    if (typeof paths[key] === 'object') {
      proxy[key] = {}
      mapPath(proxy[key], paths[key], baseUrl)
    } else {
      proxy[key] = /^http/.test(paths[key]) ? paths[key] : baseUrl + paths[key]
    }
  }
}
export default mogerConfig
