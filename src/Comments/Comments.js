import { useState,useEffect } from "react";
import {getComments as getCommentsApi} from "../Api.js"
import Comment from "./Comment.js";
import CommentForm from "./CommentForm.js";

export default function Comments(){
    const [allComments,setAllComments]=useState([]);
    
    const getReplies = (commentID) => 
        allComments.filter(comment=>{
            return comment.parentId === commentID;
        }).sort((a,b)=>new Date(a.createdAt).getTime()-new Date(b.createdAt).getTime());    
    
    const addComment = (text,parentId) => {

    }    
    const rootComments=allComments.filter( comment => {
        return comment.parentId==null;
    });
    
    useEffect(()=>{
        getCommentsApi().then(data=>{
            console.log(data);
            setAllComments(data);
        });
    },[]);
    
    return(
        <div className="comments">
            <h1 className="comment-title">Comments</h1>
            
            <div className="comment-container">
            {
                rootComments.map(comment=>(
                    <Comment
                        comment={comment}
                        key={comment.id}
                        replies={getReplies(comment.id)}
                    />
                ))
            }
            </div>
        </div>
    )
}  