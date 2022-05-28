const Koa = require('koa');

const app = new Koa();

function testfn(){
    console.log("test")
    
// var db = new sqlite3.Database('./test.db',function() {
//   db.run("create table test(name varchar(15))",function(){
//     db.run("insert into test values('hello,world')",function(){
//       db.all("select * from test",function(err,res){
//         if(!err)
//           console.log(JSON.stringify(res));
//         else
//           console.log(err);
//       });
//     })
//   });
// });

    
}
 

app.use(async ctx => {
    var x = "good";
    var querydata = null;
    testfn();
    var sqlite3 = require('sqlite3');
    var db = new sqlite3.Database('./test.db');
    var yy = db.all("select * from fast95user where id=1",function(err,res){
        if(!err) {
            querydata = JSON.stringify(res)
            console.log(querydata)
            ctx.body += querydata;
        }
        else{
            console.log(err)
        }
        
    })
    console.log("yyksj"+yy);
    console.log("yyksj"+JSON.stringify(yy));
    // ctx.body = 'Hello Vercel' + querydata;
    ctx.body += 'ksjf;lka';

});

 

app.listen(3008, () => {

    console.log('3008项目启动')

});