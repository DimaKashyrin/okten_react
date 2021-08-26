
export default function PostDetails(props){
    let{location:{state:{id,userId,title,body}}} = props
    console.log(props)
    return(
        <div className={'card-post position'}>
            <div className={'post-title'}>{title}</div>
            <div className={''}>{body}</div>
            <div>iD # {id} ------------- user # {userId}</div>
        </div>
    )
}