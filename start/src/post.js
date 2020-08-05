const querystring = {
  decode(str) {
    let _obj = {};
    str.split("&").forEach((item) => {
      const keyval = item.split("=");
      _obj[keyval[0]] = decodeURIComponent(keyval[1]);
    });
    return _obj;
  },
};

function parsePostData(ctx) {
  // 注意：ctx.request是context经过封装的请求对象
  // ctx.req是context提供的node.js原生HTTP请求对象
  // 同理ctx.response是context经过封装的响应对象
  // ctx.res是context提供的node.js原生HTTP响应对象。

  return new Promise(function (resolve, reject) {
    try {
      let postdata = "";
      ctx.req.addListener("data", (data) => {
        postdata += data;
      });
      ctx.req.addListener("end", () => {
        resolve(querystring.decode(postdata));
      });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = parsePostData;
