const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

app.use(bodyParser())
app.use(async (ctx) => {
  console.log(ctx.method, ctx.url);
  let html = ``
  if (ctx.method === 'GET' && ctx.url === '/') {
    html = `
      <form method="POST" action="/">
        username: <input name="username" /><br/>
        password: <input name="password" />
        <button type="submit">submit</button>
      </form>
    `
  } else if (ctx.method === 'POST' && ctx.url === '/') {
    html = ctx.request.body
  } else {
    html = `none`
  }

  ctx.body = html
})

app.listen(3000)
console.log('koa server listening at port 3000');