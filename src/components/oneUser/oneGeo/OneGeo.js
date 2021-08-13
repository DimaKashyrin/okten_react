
export default function OneGeo({geo: {lat,lng}}) {
    return(
        <div>
            <div>GEO:</div>
            <div>{lat}</div>
            <div>{lng}</div>
        </div>
    )
}