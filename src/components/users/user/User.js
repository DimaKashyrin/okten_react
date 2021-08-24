import './User.css'
import Address from "../address/Address";
import Company from "../company/Company";

export default function User({item:{id, name, username,email,phone,website,address,company}}) {
    return(
        <div className={'card-wrap'}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <div>{website}</div>
            <Address item={address}/>
            <Company item={company}/>

        </div>
    )
}