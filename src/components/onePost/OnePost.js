import {useEffect, useState} from "react";
import {getPost} from "../../service/posts.service";
import './OnePost.css'

export default function OnePost() {

    let [post, setPost] = useState({})

    useEffect(() => {
        getPost(5).then(({data}) => setPost({...data}))
    },[])

    if (Object.keys(post).length === 0) {
        return null
    }
    return (
        <div className={'card-one-post'}>
            <div>post # {post.id}</div>
            <h3 className={'one-post-'}>{post.title}</h3>
            <div>{post.body}</div>
            <div className={'one-post-footer'}> <span>by user #{post.userId}</span></div>
        </div>
    )




}