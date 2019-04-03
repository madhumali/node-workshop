const express =require("express");
const app=express();
const PORT=process.envPORT || 3001;
const mongoCOnnection=process.env.MONGO_CONNECTION;

mongoose.connect(mongoConnection,{userNewUrlParser:true});

let post =mongoose.model('Post',{
    name:String,
    content:String
});

app.get("/post/all",(req,res)=>{
    console.log("GET APT");

    res.json({
        status:true,
        data:[]

    }).status(200);
});

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
});

app.post("/post/add",(req,res)=>{
    const newPost =new post({name:"Avengers",content:"Awesome movie...."});

    newPost
        .save()
        .then((results,err)=>{
            console.log("Here");
        });

});

app.delete("/post/:name",(req,res)=>{
    const postName=req.parms.name;

    post
        .deleteOne({name:postName})
        .then((result,err)=>{
            console.log(result);
        });
});

