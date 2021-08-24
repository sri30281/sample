const moment =require('moment');
const http=require('http');
var server=http.createServer(function(req,res)
{
    res.write(moment().format('DD MMM YYYY, h:mm:ss a'));
    res.end();
})
server.listen(5000,function(err)
{
    if(!err)
    console.log('Server listening on port 3000');
})


