const express=require('express')
const Joi=require('joi')
const app=express()
app.use(express.json())
const courses=
[
    { id:1,name:'course-1' },
     {   id:2,name:'course-2'},
      {  id:3,name:'course-3'}

]
app.get('/',(req,res)=>
{
    res.send('Holaa')
})

app.get('/api/courses',(req,res)=>
{
    res.send(courses)
})
app.get('/api/courses/:id',(req,res)=>
{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course)
    res.status(404).send('The course ID was not found');
    res.send(course)

})
app.post('/api/courses',(req,res)=>
{
    
    const result=validateCourse(req.body);
    if(result.error)
    return res.status(400).send(result.error.details[0].message)
    const course= { id: courses.length+1 , name:req.body.name}
    courses.push(course)
    res.send(course)
    
})
app.put('/api/courses/:id',(req,res)=>
{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course)
    return res.status(404).send('The course ID was not found');
    const result=validateCourse(req.body);
    if(result.error)
    return res.status(400).send(result.error.details[0].message)
   
    course.name=req.body.name;
    res.send(course)
    
})
function validateCourse(course)
{
    const schema=Joi.object({
        name:Joi.string().min(3).required()
    })
    return schema.validate(course);

}
app.delete('/api/courses/:id',(req,res)=>
{
    const course=courses.find(c=>c.id===parseInt(req.params.id));
    if(!course)
    return res.status(404).send('The course ID was not found');
   
    const index=courses.indexOf(course);
    courses.splice(index,1);
    res.send(course)
    
})

app.listen(5000,(err)=>
{
console.log("server listening")
})
