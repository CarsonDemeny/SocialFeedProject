import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import CreatePost from './Components/DisplayPost/CreatePost/CreatePost';

function App() {

  const [entries, setEntries] = useState([{name: 'name test', post: 'post test'}])

  function addNewPost(entry) {
    let tempPosts = [entry, ...entries];
    setEntries(tempPosts);
  }

  return (
    <div>
      <DisplayPost parentEntries={entries} />
      <CreatePost addNewPost={addNewPost}/>
    </div>
  );
}

export default App;