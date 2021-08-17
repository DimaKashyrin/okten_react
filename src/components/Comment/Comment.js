import './Comment.css'

export default function Comment({item,item:{id,name},selComment}){

    let clickComment = () => {
        selComment(item)
    }

    return(
        <div className={'comments-card'}>
            <div>{id}</div>
            <div className={'comments-title'}>{name}</div>
            <div>
                <button onClick={clickComment}>read more...</button>
            </div>
        </div>
    )
}