import {useEffect, useState} from "react";
import {getUser} from "../../../services/service.api";
import './UserDetails.css';
import Address from "../address/Address";
import Company from "../company/Company";

export default function UserDetails(props) {

    let{match:{params:{id}}} = props;

    let[user,setUser] = useState(null);
    useEffect(() => {
        getUser(id).then(value => setUser({...value}))
    },[id]);

    return(
        <div>
            {
              user &&  <div className={'user-details-card'}>
                <div>{user.id}</div>
                <div>{user.name}</div>
                <div>{user.username}</div>
                <div>{user.email}</div>
                <Address item={user.address}/>
                <div>{user.phone}</div>
                <div>{user.website}</div>
                <Company item={user.company}/>
                </div>
            }
        </div>

    )
}