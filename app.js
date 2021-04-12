const express=require('express');
const app=express();
const path=require('path');
const port=80;


// for serving static file 
app.use('/static',express.static('static'))


//set the template engine as pug 
app.set('view engine', 'pug')

//set the view directory 
app.set('views',path.join(__dirname,'views'))

// Our pug demo end point 

app.get('/demo', function (req, res) {
    res.status(200).render('demo', { title: 'Hey salman',
     message: 'Hello there and thanks for telling me how to use pubG HAHAHAHAH!' })   
  });


app.get('/',(req,res)=>{
    res.send("This is home page")
})

app.get('/about',(req,res)=>{
    res.send("This is about page")
})

app.post('/about',(req,res)=>{
    res.send("This is post request about page ")
})


app.post('/this',(req,res)=>{
    res.status(404).send("404 not found")
})

app.post('/about',(req,res)=>{
    res.status(404).send("404  about page is not found")
})
app.post('/services',(req,res)=>{
    res.status(404).send("404  services page is not found")
})





app.listen(port,()=>{
    console.log(`this is application started successfully on port:${port}`);
})



