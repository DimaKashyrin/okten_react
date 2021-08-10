import {Address} from "../address/Adrress";
import './User.css';

export function User({item:{id,name,username,email,address,phone,website}}) {
    let wrapCard = 'card-user';
    let titleCard = 'title';
    return(
        <div className={wrapCard}>
            <div className={titleCard}>USER</div>
            <div> <em>id</em> # <strong>{id}</strong></div>
            <div>
                <div><em>name:</em> <strong>{name}</strong></div>
                <div><em>username:</em> <strong>{username}</strong></div>
            </div>
            <div><em>email:</em> <strong>{email}</strong></div>
            <div><em>phone:</em> <strong>{phone}</strong></div>
            <div><em>website:</em> <strong>{website}</strong></div>
            <div>
                {
                    <Address item={address}/>
                }
            </div>

        </div>
    )
}