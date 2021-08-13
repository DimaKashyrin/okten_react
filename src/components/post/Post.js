import './Post.css'
import {useEffect, useState} from "react";
// import {getPostsUser} from "../../service/posts.service";
import {getCommentsPost} from "../../service/comments.service";
import Comment from "../comment/Comment";
export function Post({item:{userId,id,title,body}}) {

    let [comments, setComments] = useState([]);

    useEffect(() => {

        getCommentsPost(id).then(({data}) => setComments([...data] ))

    },);

        return(
            <div className={'post-card'}>

                <div>POST # {id}</div>
                <h3>{title}</h3>
                <div className={'post-body'}>{body}</div>
                <div className={'footer-inform'}><em>by user # {userId}</em></div>
                {
                   comments.map((value) => <Comment item={value} key={value.id}/>)
                }

            </div>
        )
}