const Koa = require("koa");
const app = new Koa();
const port = 3000;

// const loggerAsync = require("./middleware/logger-asyc.js");
const bodyParser = require('koa-bodyparser')
const router = require('./router')

// app.use(loggerAsync());
// app.use(require('./src/get'))
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

app.listen(port);
console.log(`[demo] start-quick is starting at localhost:${port}`);
