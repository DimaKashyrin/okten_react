import {getUsers} from "../../services/api";
import {useEffect, useState} from "react";
import User from "../user/User";
import './Users.css';
import Address from "../address/Address";
import Company from "../company/Company";


export default function Users() {
    let [users, setUsers] = useState([]);
    let [user,setUser] = useState(null);

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]))
    })
    const selectedUser = (item) => {
        setUser({...item})
    };

    return(
        <div className={'wrap-users'}>
            <div>
                {
                    users.map(value => <User item={value} key={value.id} selectedUser={selectedUser}/>)
                }
            </div>

                {
                    user && <div className={'selected-user-box'}>
                        <div className="user-box">
                            <div>iD # {user.id}</div>
                            <div>name: {user.name}</div>
                            <div>user-name: {user.username}</div>
                            <div>phone: {user.phone}</div>
                            <div>website: {user.website}</div>
                        </div>
                        <Address item={user.address}/>
                        <Company item={user.company}/>

                    </div>
                }

        </div>
    )

}