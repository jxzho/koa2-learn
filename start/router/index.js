const Router = require("koa-router");
// const parsePostData = require("../src/post");

let home = new Router();
home
  .get("form", async (ctx) => {
    let html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/form">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <p>file</p>
        <input type="file" name="file" /><br/>
        <button type="submit">submit</button>
      </form>
    `;
    ctx.body = html;
  })
  .get("/", async (ctx) => {
    let html = `
      <ul>
        <li><a href="/form">/form</a></li>
        <li><a href="/page/helloworld">/page/helloworld</a></li>
        <li><a href="/page/404">/page/404</a></li>
      </ul>
    `;
    ctx.body = html;
  })
  .post("form", async (ctx) => {
    // const postData = await parsePostData(ctx);
    ctx.body = ctx.request.body;
  });

let page = new Router();
page
  .get("/404", async (ctx) => {
    ctx.body = "404 page";
  })
  .get("/helloworld", async (ctx) => {
    ctx.body = "hello world";
  });

let router = new Router();
router.use("/", home.routes(), home.allowedMethods());
router.use("/page", page.routes(), page.allowedMethods());

module.exports = router;
