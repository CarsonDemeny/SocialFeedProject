import Post from "../Post/Post";

const DisplayPost = (props) => {

    console.log(props.xyzposts)

    return (
        <div>

         {props.xyzposts.map((post) => {return(
            <Post xyzposts={post}/>
         ) })}
        </div> 

     );
}
 
export default DisplayPost;