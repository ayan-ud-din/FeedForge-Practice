 import React from 'react'
 import axios from 'axios'
 import { useNavigate } from 'react-router-dom'
 
 const CreatePost = () => {

 const navigate = useNavigate();

const submitHandler = async(e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

 await axios.post('http://localhost:3000/create-post', formData)
.then((response) => {
    navigate('/');
  e.target.reset();

})
.catch((error) => {
    alert("Error creating post");
  console.log(error);
});


}


   return (
     <div>
       <h1>Create Post</h1>

    <form onSubmit = {submitHandler}>

<input type = "file" name = "image" accept = "image/*" />

<input type = "text" name = "caption" placeholder = "Enter Caption" />

<button>Post</button>
    </form>

     </div>
   )
 }
 
 export default CreatePost
 