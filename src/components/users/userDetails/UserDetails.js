
import {useEffect, useState} from "react";
import {getUser} from "../../../services/service.api";

export default function UserDetails(props) {

    let{match:{params:{id}}} = props;

    let[user,setUser] = useState({});
    useEffect(() => {
        getUser(id).then(value => setUser({...value}))
    },[id])

    return(
        <div>
            <div>{user.id} ---- {user.name}</div>
        </div>
    )
}