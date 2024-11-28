import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postSlice";

const Posts = () => {
  const {posts , isLoading , isError , error} = useSelector((state) => state.posts);
  const disPatch = useDispatch();

  useEffect(() => {
    disPatch(fetchPosts());
  }, [disPatch]);


//  choosing what to render

let content ; 

if(isLoading == true) {
    content = <h2>Loading posts......</h2>
}

if(posts.length > 0) {
    content = <ul>{
    posts.map(post => <li key={post.id}>{
    post.title
    }</li>)
    }</ul>
}

  return <div>
    <div className="text-white flex justify-center"> 
    {content}

    </div>
  </div>;
};

export default Posts;
