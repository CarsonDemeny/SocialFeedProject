import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import CreatePost from './Components/CreatePost/CreatePost';
import NavBar from './Components/NavBar/NavBar';
import './App.css';

function App() {

  const [posts, setPosts] = useState([{userName: 'name test', comment: "post test"}])

  function addNewPost (newPost){
    let tempPosts = [...posts, newPost];
    
    setPosts(tempPosts);
    console.log(tempPosts);
  }
  return (
    <div>
      <NavBar />
      <CreatePost addNewPostProperty={addNewPost} />
      <DisplayPost xyzposts={posts}/>
    </div>
  );
}

export default App;