const Koa = require('koa');
const fs = require('fs')


function testfn(){
    console.log("test")
    


    
}
 

const Router = require('koa-router');
 
const app = new Koa();
const router = new Router({prefix: '/api'});
 
router.get('/name', (ctx, next) => {
    ctx.body = {
        name: 'xuxiaoxi'
    }
  });
 
app
  .use(router.routes())
  .use(router.allowedMethods());



 

app.listen(3008, () => {

    console.log('3008项目启动')

});