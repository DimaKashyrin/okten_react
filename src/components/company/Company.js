
export function Company({company:{name,catchPhrase,bs}}) {
    return(
        <div>
            <h4>Company</h4>
            <div>name: {name}</div>
            <div>catchPhrase: {catchPhrase}</div>
            <div>bs: {bs}</div>
        </div>
    )
}