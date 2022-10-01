import './features.css'

function CardFeature({texto,background,icono}){
    return(
        <article className={background? "feature featureazul":"feature featurenegro"}>
            <i className={icono}></i>
            <h3>{texto}</h3>
        </article>
    )
}
export default CardFeature;