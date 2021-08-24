export default function Comment({item:{name,email,body,postId,id}}){
    return(
        <div className={'card-wrap'}>
            <div><strong>{name}</strong></div>
            <div>{email}</div>
            <div>{body}</div>
            <div>{postId} ----------- {id}</div>
        </div>
    )
}