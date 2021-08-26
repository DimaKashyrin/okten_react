import './User.css'
import {
    withRouter
} from "react-router-dom";

function User({item,history}) {
    const clickUser = () => {
        history.push(`/users/${item.id}`)
    }
    return(
        <div className={'card-wrap'}>

            <span>{item.id}</span>
            <span> {item.name}</span>
            <span><button onClick={clickUser}>show more...</button></span>

        </div>
    )
}
export default withRouter(User)