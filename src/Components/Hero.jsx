import "../Styles/Hero.css";
import hero from "../Assets/Images/Deadpool-Hero.gif";
import deadpoolcomic from "../Assets/Images/Deadpool-Comic.png";
import { Navbar } from "./Navbar";
import { MenuDropdown } from "./MenuDropdown";

export const Hero = () => {
    return(<div className="Hero-Main-Div">
        <div class="logos">
      <div class="logos-slide">
      <p className="hero-bg-text">|DATAANALYST|WEBDEVELOPER|MACHINELEARNING</p>

      </div>

      <div class="logos-slide">
      <p className="hero-bg-text">|DATAANALYST|WEBDEVELOPER|MACHINELEARNING</p>
      </div>
      <div class="logos-slide">
      <p className="hero-bg-text">|DATAANALYST|WEBDEVELOPER|MACHINELEARNING</p>
      </div>
    </div>
        <div className="Hero-Content-Div">
            <p>Hey this is, </p>
            <h1>Shree Krishna</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>

        </div>
<div className="Hero-Image-Div">
        <img className="Comic" src={deadpoolcomic} alt="comic"/>
        <div className="Deadpool">
            <img className="Deadpool-Image" src={hero} alt="Deadpool"/>
            </div>
        </div>
       
    </div>);
}