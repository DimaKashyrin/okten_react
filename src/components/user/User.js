import './User.css';

export default function User({item,item:{id,name,username,phone,website},selectedUser}) {
   const clickUser = () => {
       selectedUser(item)
   }

    return(
        <div className={'user-card'}>
            <div className={'user-id'}>id # {id}</div>
            <div>name: {name}</div>
            <div>user-name: {username}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div className={'user-btn-box'}>
                <button onClick={clickUser}> Details
                </button>
            </div>
        </div>
    )
}