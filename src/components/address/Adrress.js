import {Geo} from "../geo/Geo";
import './Address.css';

export function Address({item:{street,suite,city,zipcode,geo}}) {
    return(
        <div>
            <div className={'title'}>ADDRESS</div>
            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>city: {city}</div>
            <div>zipcode: {zipcode}</div>
            <div>
                {
                    <Geo item={geo}/>
                }
            </div>

        </div>
    )

}