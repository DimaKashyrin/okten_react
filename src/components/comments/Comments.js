import {useEffect, useState} from "react";
import {getComments} from "../../service/comments.service";
import Comment from "../comment/Comment";
import './Comments.css';

export default function Comments() {
    let [comments,setComments] = useState([]);

    useEffect(() => {
        getComments().then(({data}) => setComments([...data]) );
    })
    return(
        <div className={'wrap-comments'}>
            {
                comments.map(value => <Comment item={value} key={value.id}/>)
            }
        </div>
    )

}