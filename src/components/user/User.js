import {Address} from "../address/Address";
import {Company} from "../company/Company";
import './User.css';

export default function User({item, item: {address},item: {company}}) {
    return(
        <div className={'user-card'}>
            <h3>{item.name}</h3>
            <div>Id # {item.id}</div>
            <div>user-name: {item.username}</div>
            <div>email: {item.email}</div>
            <Address address={address}/>
            <Company company={company}/>
        </div>
    )
}