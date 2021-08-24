import {getUsers} from "../../services/service.api";
import {useEffect, useState} from "react";
import User from "./user/User";
import './Users.css'

export default function Users() {
    let[users,setUsers] = useState([]);
    useEffect(()=> {
        getUsers().then(value => setUsers([...value]))
    })
    return(
        <div className={'elements-wrap'}>
            {
                users.map(value => <User item={value} key={value.id}/>)
            }
        </div>
    )
}