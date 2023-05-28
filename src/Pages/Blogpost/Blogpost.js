import React from 'react';
import posts from '../../data/posts.json';
import {useParams} from "react-router-dom";
import './Blogpost.css';

function Blogpost() {
    const {id} = useParams()
    const currentPost = posts.find((post)=>{
        return post.id === id;
    })
    console.log(currentPost);
    return (
        <>
            <div className="blogBox">
                <h3>Title {currentPost.title}</h3>
                <p>{currentPost.content}</p>
                <p>Date {currentPost.date}</p>
            </div>
        </>
    );
}

export default Blogpost;