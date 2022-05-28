const Koa = require('koa');

const app = new Koa();

function testfn(){
    console.log("test")
    


    
}
 

app.use(async ctx => {

 
    ctx.body = 'ksjf;lka';

});

 

app.listen(3008, () => {

    console.log('3008项目启动')

});