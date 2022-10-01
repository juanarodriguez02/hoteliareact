import fondofeatures from './bg-features.png';
import './features.css'

function Feature() {
    return ( 
        <div class="features">

        <img src={fondofeatures}/>
            
            <h2 class="featurestitulo">Razones por las que disfrutaras quedarte con nosotros</h2>
        
            <div class="featuresdesc">

                <div class="featurearriba">
                    <div class="feature featureazul">
                        <i class="fa-solid fa-bell-concierge"></i>
                     
                        <p>Lorem ipsum <br/> dolor</p>
                    </div>

                    <div class="feature featurenegro">
                        <i class="fa-solid fa-bed"></i> 
                        <p>Lorem ipsum <br/> dolor</p>
                    </div>
                </div>

                <div class="featureabajo">
                    <div class="feature featureazul">
                        <i class="fa-solid fa-wifi"></i> 
                        <p>Lorem ipsum</p>
                    </div>

                    <div class="feature featurenegro">
                        <i class="fa-solid fa-dumbbell"></i> 
                        <p>Lorem ipsum</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;