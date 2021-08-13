import {Geo} from "../geo/Geo";

export function Address({address: {street,suite,city,zipcode,geo}}) {
    return(
        <div>
            <h4>Address</h4>
            <div>city: {city}</div>
            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>zipcode: {zipcode}</div>
            <Geo geo={geo}/>
        </div>
    )

}