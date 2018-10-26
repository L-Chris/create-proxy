export default function createProxy (target, proxyOptions) {
  const keys = Object.keys(proxyOptions)
  const keyMap = createMap(keys)
  const obj = Object.create(null)

  for (const key of keys) {
    obj[key] = new Proxy(target[key], proxyOptions[key])
  }

  const p = new Proxy(target, {
    get (target, key) {
      return keyMap[key] ? obj[key] : target[key]
    }
  })

  return p
}

function createMap (keys) {
  return keys.reduce((pre, val) => {
    pre[val] = true
    return pre
  }, Object.create(null))
}