import './Post.css'
export function Post({item:{userId,id,title,body}}) {
        return(
            <div className={'post-card'}>

                <div>POST # {id}</div>
                <h3>{title}</h3>
                <div className={'post-body'}>{body}</div>
                    <div className={'footer-inform'}><em>by user # {userId}</em></div>
            </div>
        )
}