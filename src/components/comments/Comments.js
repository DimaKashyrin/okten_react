import {useEffect, useState} from "react";
import {getComments} from "../../services/service.api";
import Comment from "./comment/Comment";

export default function Comments() {
    let[comments,setComments] = useState([]);
    useEffect(() => {
        getComments().then(value => setComments([...value]))
    })
    return(
        <div className={'elements-wrap'}>
            {
                comments.map(value => <Comment item={value} key={value.id}/> )
            }
        </div>
    )
}