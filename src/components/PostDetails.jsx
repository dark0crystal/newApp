// PostDetail.js
import { useParams } from "react-router-dom";
import {useState , useEffect} from 'react'

export default function PostDetails() {
  const { postId } = useParams();
//     const [details , setDetails] = useState([]);

//   useEffect(()=>{
//     async function getDetail(){
//         const res = await fetch({`https://jsonplaceholder.typicode.com/comments/`})
//         const details =await res.json()
//         setDetails(details);
//     }

//     getDetail()
//   },[])



  // Sample data; in a real application, you would fetch this data based on postId
  const post = {
    id: postId,
    name: "Sample Name",
    email: "sample@example.com",
    body: "This is a detailed view of the post.",
  };

  return (
    <div className="container mt-5">
      <h1>{post.name}</h1>
      <h4>{post.email}</h4>
      <p>{post.body}</p>
    </div>
  );
}
