import {useEffect,useState} from "react";
import {getUser} from "../../service/user.service";
import {OneAddress} from "./oneAddress/OneAddress";
import OneCompany from "./oneCompany/OneCompany";
import './OneUser.css'
export function OneUser() {

    let [user,setUser] = useState({});

    useEffect(() => {
        getUser(2).then(({data}) => setUser({...data}))
    },[])

    if (Object.keys(user).length === 0) {
        return null
    }

    return(
        <div className={'card-one-user'}>
           <div>ONE USER</div>
            <div>Id # {user.id}</div>
            <div>name: {user.name}</div>
            <div>user-name: {user.username}</div>
            <div>email: {user.email}</div>
            <OneAddress user={user}/>
            <OneCompany user={user}/>
        </div>
    )

}