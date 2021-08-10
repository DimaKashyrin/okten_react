import './Simpsons.css';

export function Simpsons({name,surname,age,info,photo}) {

    return (
        <div className={'card-box'}>
            <div className={'image-box'}>
                <img
                    src={photo}
                    alt=""
                    className={'image'}
                />
            </div>
            <div className={'name-box'}>
                <div>{name}</div>
                <div>{surname}</div>
            </div>
            <div className={'age-box'}>age - {age}</div>
            <div className={'info-box'}>
                <p>{info}</p>
            </div>


        </div>
    )
}

