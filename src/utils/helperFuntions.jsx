import ClearImg from "../assets/images/clear.png";
import CloudImg  from "../assets/images/clouds.png";
import DrizzleImg from "../assets/images/drizzle.png";
import RainImg from "../assets/images/rain.png";
import SnowImg from "../assets/images/snow.png";
import MistImg from "../assets/images/mist.png";

export const getWeatherIcon = (weatherMain) => {
    const weatherIconData = {
      clouds:CloudImg,
      clear:ClearImg,
      rain:RainImg,
      snow:SnowImg,
      drizzle:DrizzleImg,
      mist:MistImg,
      haze:MistImg,
      smoke:MistImg
    }
    return weatherIconData[weatherMain]
  }