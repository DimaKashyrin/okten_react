import {useEffect, useState} from "react";
import {getUsers} from "../../services/service.api";
import User from "./user/User";
import './Users.css'
import UserDetails from "./userDetails/UserDetails";
import {Route} from "react-router-dom";

export default function Users(props) {

    let {match: {url}} = props;

    let[users,setUsers] = useState([]);

    useEffect(() =>{
      getUsers().then(value => setUsers([...value]))
    },[])

    return(
        <div className={'list-wrap'}>
            {
                users.map(value => <User item={value} key={value.id}/>)

            }
            <Route path={`${url}/:id`} render={(props =>{
                return <UserDetails{...props}/>
            })} />
        </div>
    )
}