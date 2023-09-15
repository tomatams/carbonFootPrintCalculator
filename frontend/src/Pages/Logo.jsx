import Logo from "../pictures/Logo.png";
import "./Logo.css";

const Home = () => {
    return (
        <div>
            <div className="image-logo">
                <img id="logo-img" src={Logo} alt="website-logo" width="300" />
            </div>
        </div>
    )
}

export default Home;
