import './Car.css'
export default function Car({item:{id,model,price,year}}) {
    return(
        <div className={'car-card'}>
            <div>iD # {id}</div>
            <div>model: {model}</div>
            <div>price: {price} $</div>
            <div>year: {year}</div>
        </div>
    )

}