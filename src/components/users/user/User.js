import './User.css'
import {
    // Link,
    withRouter
} from "react-router-dom";

function User({item,history}) {
    // console.log(history)
    const clickUser = () => {
        history.push(`/users/${item.id}`)
    }
    return(
        <div className={'card-wrap'}>
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>
                <button onClick={clickUser}>show more...</button>
            </div>
            {/*<Link to={`/users/${id}`}>user details...</Link>*/}
        </div>
    )
}
export default withRouter(User)