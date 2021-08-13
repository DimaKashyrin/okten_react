import {Address} from "../address/Address";
import {Company} from "../company/Company";
import './User.css';
import {useEffect, useState} from "react";
import {getPostsUser} from "../../service/posts.service";
import {Post} from "../post/Post";

export default function User({item, item: {address},item: {company}}) {
    let [posts, setPosts] = useState([]);

    useEffect(() => {

        getPostsUser(item.id).then(({data}) => setPosts([...data]))

    })

    return(
        <div className={'user-card'}>
            <h3>{item.name}</h3>
            <div>Id # {item.id}</div>
            <div>user-name: {item.username}</div>
            <div>email: {item.email}</div>
            <Address address={address}/>
            <Company company={company}/>
            {
                posts.map((value => <Post item={value} key={value.id}/>))
            }
        </div>
    )
}