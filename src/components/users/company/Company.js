export  default function Company({item:{name,catchPhrase,bs}}) {
    return(
        <div>
            <div>COMPANY:</div>
            <div>{name}</div>
            <div>{catchPhrase}</div>
            <div>{bs}</div>
        </div>
    )
}