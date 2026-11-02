const express = require("express");
const postModel = require("./models/post.model");
const uploadFile  = require("./services/storage.service");
const multer = require("multer");
const cors = require("cors");

const app = express();

const upload = multer({storage: multer.memoryStorage()});

app.use(cors());
app.use(express.json());



app.post("/create-post",upload.single("image") , async (req, res) => {
 

const result = await uploadFile(req.file.buffer);

const post = await postModel.create({
    image: result.url,
    caption: req.body.caption
});

res.status(201).json({
    message: "Post created successfully",
    post
});

});


app.get("/posts",async (req,res)=>{
  
const posts =await postModel.find()

res.status(200).json({
    message: "Posts fetched successfully",
    posts
});

});



module.exports =app;
