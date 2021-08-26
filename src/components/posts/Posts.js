import {getPosts} from "../../services/service.posts";
import {useEffect, useState} from "react";
import Post from "./post/Post";
import {Route} from "react-router-dom";
import PostDetails from "./postDetails/PostDetails";
import './Posts.css'
export default function Posts(props) {
    let{match:{url}} = props;

    let[posts,setPosts] = useState([])
    useEffect(()=> {
        getPosts().then(value => setPosts([...value]))
    },[])
    return(
        <div className={'list-wrap'}>
            <div className={'post-list'}>
                {
                    posts.map(value => <Post item={value} key={value.id}/>)
                }
            </div>
            <div className={'post-details-wrap'}>
                <Route path={`${url}/:id`} render={(props) =>{
                    return <PostDetails {...props}/>
                }}/>
            </div>
        </div>
    )
}