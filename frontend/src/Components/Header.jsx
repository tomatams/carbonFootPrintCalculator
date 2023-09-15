import { useState } from "react";
import NavigationBar from "./NavigationBar";
import "./Header.css";
import Logo from "../Pages/Logo";

const Header = () => {
    const [active, setActive] = useState("inactive");

    const handleClick = () => {
        setActive(active === "active" ? "inactive" : "active");
      };

    return (
      <div>
        <Logo />
        <header>
              <NavigationBar active={active} handleClick={handleClick} />
        </header>
      </div>
      
    );
  };

export default Header;
