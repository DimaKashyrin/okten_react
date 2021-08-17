import {useEffect, useState} from "react";
import {getComments} from "../../sevices/api";
import Comment from "../Comment/Comment";
import './Comments.css'

export default function Comments() {

    let [comments, setComments] = useState([]);
    let [comment, setComment] = useState(null);

    useEffect(()=>{
        getComments().then(value => setComments([...value.data]) )
    },[]);

    let selectedComment = (comment) => {
        setComment(comment)
    }

    return(
        <div className={'wrap-comments'}>
            <div className={'comments-box'}>
                {
                    comments.map(value =>
                        <Comment
                            item={value}
                            key={value.id}
                            selComment={selectedComment}
                        />
                    )
                }
            </div>
            {
                comment && <div className={'single-comment-box'}>
                    <div className={'single-comment-card'}>
                        <div className={'comment-name'}>{comment.name}</div>
                        <div className={'comment-email'}>{comment.email}</div>
                        <div className={'comment-body'}>{comment.body}</div>
                        <div className={'comment-inform'}>
                            <div>comment # {comment.id}</div>
                            <div>post # {comment.postId}</div>
                        </div>
                    </div>
                </div>
            }


        </div>
    )
}