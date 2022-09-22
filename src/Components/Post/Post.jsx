import "./Post.css";
import {useState} from 'react';

const Post = (props) => {

    const [likeButtonClass, setButtonClass] = useState("like");

    function handleClickLike(){
        if(likeButtonClass === "like"){
            setButtonClass("liked")
            setButtonClassDL("dislike")
        }
        else{
            setButtonClass("like")
        }
    }

    const [dislikeButtonClass, setButtonClassDL] = useState("dislike");

    function handleClickDislike(){
        if(dislikeButtonClass === "dislike"){
            setButtonClassDL("disliked")
            setButtonClass("like")
        }
        else{
            setButtonClassDL("dislike")
        }
    }
    console.log(props.xyzposts)

    return (
        <div className='post-border'>
            <table>
                <thead>
                    <div class='post-nametext'>
                    <tr>
                        <td style={{padding: '1em'}}>{props.xyzposts.userName}</td>
                    </tr>
                    </div>
                </thead>
                <tbody>
                    <div class='post-posttext'>
                    <tr>
                        <td style={{padding: '1em'}}>{props.xyzposts.comment}</td>
                    </tr>
                    </div>
                    <div class='button-border'>
                    <tr>
                        <button className={likeButtonClass} onClick={handleClickLike}>Like</button>
                        <button className={dislikeButtonClass} onClick={handleClickDislike}>Dislike</button> 
                    </tr>
                    </div>
                </tbody>
            </table>
        </div>
    );
}

export default Post;