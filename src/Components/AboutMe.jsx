import "../Styles/AboutMe.css";
import AboutMeImage from "../Assets/Images/AboutMeImage.png";


export const AboutMe = () => {
    return(
        <div className="AboutMeDiv">
            <div className="AboutMe-Inner-Div">
            <div className="AboutMeHeading">Something About Me!</div>
            <div className="AboutMeContent">
            <div className="AboutMeImage"><img src={AboutMeImage}/></div>
            <div className="AboutMeText">
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. 
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters .
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
            </div>
            </div>
            </div>
        </div>
    );
}