import OneGeo from "../oneGeo/OneGeo";

export function OneAddress({user: {address: {street,suite,city,zipcode,geo}} } ) {
    return(
        <div>
            <div>ADDRESS</div>
            <div>city: {city}</div>
            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>zipcode: {zipcode}</div>
            <OneGeo geo={geo}/>
        </div>
    )
}