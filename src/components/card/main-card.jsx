
export const ProdactCard = ({img , title , text , before , after}) => {
    return <div>
        <section className="card">
            <div className="container">
                <div className="card__content">
                    <div className="card__block">
        <img className='card__img' src={img} alt="img" />
        <h2 className="card__title">{title}</h2>
        <p className="card__text">{text}</p>
        <div className="card__icons">
            <img src={before} alt="icon" />
            <img src={after} alt="icon" />
        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}
import './main.css'
