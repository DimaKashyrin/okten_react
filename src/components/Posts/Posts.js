import {useEffect, useState} from "react";
import {getPosts} from "../../sevices/api";
import Post from "../Post/Post";
import './Posts.css';

export default function Posts(){

    let [posts, setPosts] = useState([]);
    let [post,setPost] = useState(null);

    useEffect(() => {
        getPosts().then(value => setPosts([...value.data]))
    },[])

    const selectedPost = (post) => {
        setPost({...post})
    }

    return(
        <div className={'wrap'}>
            <div className={'posts-box'}>
                {
                    posts.map(value =>
                        <Post
                            item={value}
                            selectedPost={selectedPost}
                            key={value.id}
                        />
                    )
                }
            </div>
            {
                post && <div className={'selected-box'}>
                    <div className={'single-card-post'}>
                        <div className={'single-title'}>{post.title}</div>
                        <div className={'single-body'}>{post.body}</div>
                        <div className={'box-inform'}>
                            <div>POST # {post.id}</div>
                            <div>USER # {post.userId}</div>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}