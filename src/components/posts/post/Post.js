export default function Post({item:{userId,id,title,body}}) {
    return(
        <div className={'card-wrap'}>
            <div><strong>{title}</strong></div>
            <div>{body}</div>
            <div>{id} --------- {userId}</div>
        </div>
    )
}