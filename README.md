# create-proxy
a tool to add proxies to object, useful for trapping methods in object

## Install
```javascript
yarn add create-proxy
npm i create-proxy -S
```

## Usage
```javascript
import createProxy from 'create-proxy'

const target = {
  a () {},
  b () {},
  c: 1
}

const pTarget = createProxy(target, {
  a: {
    apply (target, thisArg, args) {
      target.apply(thisArg, args)
      console.log('proxy:a')
    }
  },
  b: {
    apply (target, thisArg, args) {
      target.apply(thisArg, args)
      console.log('proxy:b')
    }
  }
})

p.a() // proxy:a
p.b() // proxy:b
p.c // 1
```

## Example
- [vuex-router-histroy](https://github.com/L-Chris/vuex-router-history) trap router's methods(push、replace、go、back、forward) and create history log