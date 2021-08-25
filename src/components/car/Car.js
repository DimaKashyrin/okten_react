import './Car.css'

export default function Car({item:{id,model,price,year}}) {
    return(
        <div className={'car-card'}>

            <div className={'title'}>iD # {id}</div>
            <div className={'car-inform-box'}>
                <div>model: <strong>{model}</strong></div>
                <div>price: <strong>{price} $</strong></div>
                <div>year: <strong>{year}</strong></div>
            </div>

        </div>
    )

}