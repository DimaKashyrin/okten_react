import './Geo.css';

export function Geo({item:{lat, lng}}) {
    let subTitle = 'subtitle';
    let positionElem = 'position'
    let boxGeo = 'geo-box'
    return(
        <div className={boxGeo}>
            <div className={subTitle}>GEO:</div>
            <div className={positionElem}>{lat}</div>
            <div className={positionElem}>{lng}</div>
        </div>
    )
}