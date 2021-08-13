import {useEffect, useState} from "react";
import {getComment} from "../../service/comments.service";
import './OneComment.css'

export default function OneComment() {

    let[comment, setComment] = useState({});

    useEffect(() => {
        getComment(7).then(({data}) => setComment({...data}))
    },[])

    if(Object.keys(comment).length === 0){
        return null
    }

    return (
        <div className={'card-one-comment'}>
            <h3>{comment.name}</h3>
            <div className={'email-comments'}>{comment.email}</div>
            <div className={'body-comments'}>{comment.body}</div>
            <div className={'footer-comments'}>
                <span>comment # {comment.id}</span>
                <span>belongs to post # {comment.postId}</span>
            </div>
        </div>
    )

}