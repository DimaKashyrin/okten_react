import Geo from "../geo/Geo";

export default function ({item: {street, city,suite,zipcode,geo}}){
    return(
        <div>
            <div>ADDRESS</div>
            <div>city: {city}</div>
            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>zipcode: {zipcode}</div>
            <Geo item={geo}/>
        </div>
    )
}