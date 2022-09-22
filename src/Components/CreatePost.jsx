import './CreatePost.css';
import React, { useState } from 'react';



const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            userName: name,
            comment: post,
        };
        console.log(newPost);
        props.addNewPostProperty(newPost);
    }

    return(

                <div className='border-box'>
                    <div class='create-post'>
                        <form style={{margin: '1em'}} onSubmit={handleSubmit}>
                            
                            <div class="container">
                            <div class='row'>
                            <div className="col">
                            <div class="username-post">   
                                <label class="col-sm-2 col-form-label col-form-label-lg">Name</label>
                                    <div class="col-sm-10'">
                                    <input class="form-control form-control-lg" id="colFormLabelLg" type='name' value={name} onChange={(event) => setName(event.target.value)}/>
                                    </div>
                                

                                <label class="col-sm-2 col-form-label col-form-label-lg">Post</label>
                                    <div class="col-sm-10'">
                                        <input class="form-control form-control-lg" id="colFormLabelLg" type='post' value={post} onChange={(event) => setPost(event.target.value)}/>
                                    </div>    
                            </div>   
                            </div>
                            
                            <div className="col align-self-end">
                                <div class='button-create'>
                                    <button class='button' type='submit'>Create</button>
                                </div>
                            </div> 
                            </div>
                            </div>
                            
                        </form>

                    </div>
                </div>

    );
}

export default CreatePost