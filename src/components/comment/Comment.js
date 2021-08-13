import './Comment.css';
export default function Comment({item:{postId, id, name,email, body} }) {

    return(
        <div className={'card-comments'}>
            <h3>{name}</h3>
            <div className={'email-comments'}>{email}</div>
            <div className={'body-comments'}>{body}</div>
            <div className={'footer-comments'}><span>iD # {id}</span>    <span>belongs to post  # {postId}</span></div>

        </div>
    )

}