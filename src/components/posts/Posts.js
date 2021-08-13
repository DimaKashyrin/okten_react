import {useEffect, useState} from "react";
import {getPosts} from "../../service/posts.service";
import {Post} from "../post/Post";
import './Post.css';


export default function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(() => {


        getPosts().then(({data}) => setPosts([...data]))

    },[])


    return(
        <div className={'wrap-post'}>
            {
                posts.map(value => <Post item={value} key={value.id}/>)
            }
        </div>
    )
}