import React from "react";
import { useHistory } from "react-router-dom";
import { Image } from "react-bootstrap";
import busIcon from "../assets/icons/bus.png";
import eventsIcon from "../assets/icons/events.png";
import guidesIcon from "../assets/icons/guides.png";
import homestaystwoIcon from "../assets/icons/homestaystwo.png";
import hotelsIcon from "../assets/icons/hotels.png";
import packagesIcon from "../assets/icons/packages.png";
import taxisIcon from "../assets/icons/taxis.png";
import ticketsIcon from "../assets/icons/tickets.png";
import tavelpassIcon from "../assets/icons/travelpass.png";

import "../assets/css/quicklinks.css";

import { NavLink } from "react-router-dom";

const QuickLinks = ({ Position, Top }) => {
  const history = useHistory();

  return (
    <div className="flex_container" style={{ position: Position, top: Top }}>
      <NavLink to="/buspass" className="flex_item">
        <Image draggable={false} style={{ width: "30px%" }} src={busIcon} />
      </NavLink>
      <NavLink to="/bastareventsandactivities" className="flex_item">
        <Image draggable={false} style={{ width: "30px%" }} src={eventsIcon} />
      </NavLink>
      <NavLink to="/planTourGuides" className="flex_item">
        <Image
          draggable={false}
          style={{ width: "30px%", margin: "0.5rem 0" }}
          src={guidesIcon}
        />
      </NavLink>
      <NavLink to="/plan" className="flex_item">
        <Image
          draggable={false}
          style={{ width: "30px%" }}
          src={homestaystwoIcon}
        />
      </NavLink>
      <NavLink to="/hotellist" className="flex_item">
        <Image draggable={false} style={{ width: "30px%" }} src={hotelsIcon} />
      </NavLink>
      {/* <NavLink to="/planTourPackages" className="flex_item">
        <Image
          draggable={false}
          style={{ width: "30px%" }}
          src={packagesIcon}
        />
      </NavLink> */}
      <NavLink to="/planTaxis" className="flex_item">
        <Image draggable={false} style={{ width: "30px%" }} src={taxisIcon} />
      </NavLink>
      <NavLink to="/tickets" className="flex_item">
        <Image draggable={false} style={{ width: "30px%" }} src={ticketsIcon} />
      </NavLink>
      <NavLink to="/dmpass" className="flex_item">
        <Image
          draggable={false}
          style={{ width: "30px%" }}
          src={tavelpassIcon}
        />
      </NavLink>
    </div>
  );
};

export default QuickLinks;
