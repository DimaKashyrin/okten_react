import './Post.css'

export default function Post({item,selectedPost,item: {title,id}}) {
    const clickPost = () => {
        selectedPost(item)
    }
    return(
        <div className={'post-card'}>
            <div className={'header-post'}>POST # {id}</div>
            <div className={'title-post'}>{title}</div>
            <div className={'btn-box'}>
                <button onClick={clickPost}>
                    read...
                </button>
            </div>
        </div>
    )
}