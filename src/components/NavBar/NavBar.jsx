import React, { useState } from "react";
import "./NavBar.css";
import AppleIcon from "@mui/icons-material/Apple";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Search from "@mui/icons-material/Search";

const Navbar = () => {
  const [first, setfirst] = useState("");
  return (
    <div>
      {/* nav bar starts */}
      <nav>
        {/* logo part */}
        <div className="lineIcon">
          <DragHandleIcon />
        </div>
        <div className="Icon">
          <AppleIcon
            sx={{
              padding: "1rem",
            }}
          />
        </div>

        {/* accessories part */}
        <div className="content">
          <ul>
            <li>
              <a href="#Home">iPad</a>
            </li>
            <li>
              <a href="#Home">iPhone</a>
            </li>
            <li>
              <a href="#Home">Watch</a>
            </li>
            <li>
              <a href="#Home">AirPods</a>
            </li>
            <li>
              <a href="#Home">TV & Home</a>
            </li>
          </ul>
        </div>
        {/* search bar part */}
        <div className="SideBar">
          <ul>
            <li>
              <a href="#Home">Accessories</a>
            </li>

            <li>
              <a href="#Home">Support</a>
            </li>

            <li>
              <Search />
            </li>

            <li>
              <ShoppingBagIcon />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
