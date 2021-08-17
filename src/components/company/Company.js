
export default function ({item: {name,catchPhrase,bs}}){
    return(
        <div>
            <div>COMPANY</div>
            <div>company-name: {name}</div>
            <div>catchPhrase: {catchPhrase}</div>
            <div>bs: {bs}</div>
        </div>
    )
}