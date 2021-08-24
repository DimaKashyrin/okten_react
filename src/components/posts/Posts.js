import {useEffect, useState} from "react";
import {getPosts} from "../../services/service.api";
import Post from "./post/Post";

export default function Posts(){
let[posts,setPosts] = useState([])
    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    })
    return (
        <div className={'elements-wrap'}>
            {
                posts.map(value => <Post item={value} key={value.id}/>)
            }
        </div>
    )
}