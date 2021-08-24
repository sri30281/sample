const express=require('express');
var app=express();



// View engine setup
app.set('view engine', 'ejs');

app.use('/assets',express.static('assets'));
app.get('/',function(req,res)
{
   res.render('index');
})
app.listen(5000,function(err)
{
    if(!err)
    console.log('server listening');
})
