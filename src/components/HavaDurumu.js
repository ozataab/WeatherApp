import "./style.css"
import image from "../images/img.jpg";
import { Audio } from 'react-loader-spinner';

const HavaDurumu = (props) => {

    const { weather } = props;

    if (!weather) {
        return (
            <div className="container">
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="grey"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                />

            </div>
        )
    }

    return (

        <div responsive="sm" className="container">

            <img className='img1' alt='' src={image} />
            <h2 className="baslik "> Hava Durumu  </h2>
            <div><span class="material-symbols-outlined">
                sunny
            </span><span class="material-symbols-outlined">
                    ac_unit
                </span><span class="material-symbols-outlined">
                    rainy
                </span></div>

            <h3 >{weather.name}</h3>
            <h4 >{weather.weather.map((data) => data.description).join(", ")}</h4>

            <p className="derece ">{weather.main.temp} °C</p>
            <p >{new Date(weather.dt * 1000).toLocaleDateString()}</p>

        </div>

    )


}
export default HavaDurumu;
