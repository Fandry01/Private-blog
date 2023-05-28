import React from 'react';
import './blogposts.css';
import posts from '../../data/posts.json';
import {Link} from "react-router-dom";

function Blogposts(props) {
    const post = posts;

    return (
        <>
            <h3> het aantal Posts is {post.length}</h3>
           <ul>
               {post.map((blog)=>{
                   console.log(blog.title);
                   return <li className="blog-link" key={blog.id}>
                       <Link to={`/blogpost/${blog.id}`}>
                           {blog.title}
                       </Link>
                   </li>
               })}
           </ul>
        </>
    );
}

export default Blogposts;