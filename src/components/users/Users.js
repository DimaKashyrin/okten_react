import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../service/user.service";
import './Users.css'


export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        // getUsers().then(value => setUsers([...value]))

        getUsers().then(({data})=> setUsers([...data] ))

    }, []);


    return(
        <div className={'users-wrap'}>
            {
                users.map(value => <User item={value} key={value.id}/>)
            }
        </div>
    )
}