import { useState } from "react";
import NavigationBar from "./NavigationBar";
import "./Header.css";

const Header = () => {
    const [active, setActive] = useState("inactive");

    const handleClick = () => {
        setActive(active === "active" ? "inactive" : "active");
      };

    return (
      <header>
            <NavigationBar active={active} handleClick={handleClick} />
      </header>
    );
  };

export default Header;
