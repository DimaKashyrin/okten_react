import './Post.css'
import {
    Link
} from "react-router-dom";

export default function Post({item,item: {id,title}}) {
    return(
        <div className={'card-post'}>
            <div className={'post-id'}>{id}</div>
            <div className={'post-title'}>{title}</div>
            <div className={'link-box'}>
                <Link to={{pathname:`/posts/${id}`,state : item}}>show more...</Link>
            </div>
        </div>
    )
}
