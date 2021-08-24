import Geo from "../geo/Geo";

export default function Address({item:{street,suite,city,zipcode,geo}}) {
    return(
        <div>
            <div>ADDRESS:</div>
            <div>{street}</div>
            <div>{suite}</div>
            <div>{city}</div>
            <div>{zipcode}</div>
            <Geo item={geo}/>
        </div>
    )
}
