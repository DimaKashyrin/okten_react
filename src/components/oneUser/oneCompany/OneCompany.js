
export default function OneCompany({user:{company:{name,catchPhrase,bs}}}) {
    return(
        <div>
            <div>COMPANY</div>
            <div>name-company: {name}</div>
            <div>catchPhrase: {catchPhrase}</div>
            <div>bs: {bs}</div>
        </div>
    )
}