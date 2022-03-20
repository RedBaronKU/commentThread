export default function Comment({comment,replies}){
    console.log(replies);
    return(
        <div className="comment">
            <div className="comment-image-container col-2">
                <img src="/user-icon.png" alt="x"/>
            </div>
            <div className="comment-right-part col-8">
                <div className="comment-author-container">
                    {comment.author}
                </div>
                <div className="comment-timeStamp">
                    {comment.createdAt}
                </div>
                <div className="comment-body-container">
                    {comment.body}
                </div>
                {
                    (replies !== undefined) && (
                        <div className="comment-replies">
                            {replies.map(reply=>(
                                <Comment key={reply.id} comment={reply}/>
                            ))}                        
                        </div>
                    )
                        
                }
            </div>
        </div>
    )
}