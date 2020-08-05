const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()

app.use(static(
  path.resolve(__dirname, './static')
))

app.use(async (ctx) => {
  ctx.body = 'Hello Koa.'  
})

app.listen(3000)
console.log('koa server listening at port 3000');