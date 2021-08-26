export default function Geo({item:{lat,lng}}) {
    return(
        <div>
            <div>GEO:</div>
            <div>{lat}</div>
            <div>{lng}</div>
        </div>
    )
}