import {useState} from 'react'
import { Button } from 'react-bootstrap';
export default function CommentForm ({handleSubmit,submitLabel}){
    const [text,setText] = useState("");
    const submitButton = (e) => {
        e.preventDefault();
        handleSubmit(text,null);
        setText("");
    }
    
    return(
        <form className="comment-form" onSubmit={submitButton}>
            <textarea 
                className="comment-form-textArea" 
                placeholder="Write your thoughts.." 
                value={text} 
                onChange={(e)=>{setText(e.target.value)}}
            />
            <Button onClick={submitButton} disabled={text.length ===0 ? true:false}>Submit</Button>
        </form>
    )

}
