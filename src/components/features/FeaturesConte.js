import Feature from './CardFeature.js';
import fondofeatures from './fondofeatures.png';
import './features.css'

function FeaturesConte(){
    return(
        <div id="features">           

            <img class="imgfeatures"src={fondofeatures}/>
           
            <h2 class="featurestitulo">Razones por las que disfrutarás quedarte con nosotros</h2>
            
            <div className="featuresdesc">
                <div class="featurearriba">
                    <Feature
                    icono='fa-solid fa-bell-concierge'
                    texto='Lorem ipsum'
                    background={true}/>
                    <Feature
                    texto='Lorem ipsum'
                    background={false}
                    icono='fa-solid fa-bed'/>
                </div>
                    
                <div class="featureabajo">
                    <Feature
                    texto='Lorem ipsum'
                    background={true}
                    icono='fa-solid fa-wifi'/>
                    <Feature
                    texto='Lorem ipsum'
                    background={false}
                    icono='fa-solid fa-dumbbell'/>
                </div>
            </div>
        </div>

    );
}
export default FeaturesConte;