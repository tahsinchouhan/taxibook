import React from "react";
import { useHistory } from "react-router-dom";
import { Image } from "react-bootstrap";
import exploreIcon from "../assets/icons/exploreActive.svg";
import busIcon from "../assets/icons/bus.svg";
import eventsIcon from "../assets/icons/event.svg";
import guidesIcon from "../assets/icons/guide.svg";
import homestaysIcon from "../assets/icons/Homestays.svg";
import hotelsIcon from "../assets/icons/Hotel.svg";
import packagesIcon from "../assets/icons/suitcase.svg";
import taxisIcon from "../assets/icons/taxi.svg";
import ticketsIcon from "../assets/icons/ticket.svg";
import travelpassIcon from "../assets/icons/passport.svg";

import "../assets/css/quicklinks.css";

import { NavLink } from "react-router-dom";

const QuickLinksArr = [
  {
    icon: busIcon,
    title: "Buses",
    route: "/buspass",
  },
  {
    icon: homestaysIcon,
    title: "Homestays",
    route: "/plan",
  },
  {
    icon: hotelsIcon,
    title: "Hotels",
    route: "/hotellist",
  },
  {
    icon: taxisIcon,
    title: "Taxis",
    route: "/planTaxis",
  },
  {
    icon: exploreIcon,
    title: "Destinations",
    route: "/populardestinations",
  },
  {
    icon: guidesIcon,
    title: "Tour Guides",
    route: "/planTourGuides",
  },
  {
    icon: ticketsIcon,
    title: "Tickets",
    route: "/tickets",
  },
  {
    icon: travelpassIcon,
    title: "Travel Pass",
    route: "/dmpass",
  },
  {
    icon: packagesIcon,
    title: "Tour Packages",
    route: "/curatedexperiences",
  },
  // {
  //   icon: eventsIcon,
  //   title: "Events & Activities",
  //   route: "/bastareventsandactivities",
  // },
];

const QuickLinks = ({ Position, Top }) => {
  const history = useHistory();

  return (
    <div className="flex_container" style={{ position: Position, top: Top }}>
      {[...QuickLinksArr].map((item, i) => (
        <NavLink key={i} to={item.route} className="flex_item">
          <Image draggable={false} style={{ width: "30px%" }} src={item.icon} />
          <p>{item.title}</p>
        </NavLink>
      ))}
    </div>
  );

  // // return (
  // //   <div className="flex_container" style={{ position: Position, top: Top }}>
  // //     <NavLink to="/buspass" className="flex_item">
  // //       <Image draggable={false} style={{ width: "30px%" }} src={busIcon} />
  // //     </NavLink>
  // //     <NavLink to="/bastareventsandactivities" className="flex_item">
  // //       <Image draggable={false} style={{ width: "30px%" }} src={eventsIcon} />
  // //     </NavLink>
  // //     <NavLink to="/planTourGuides" className="flex_item">
  // //       <Image
  // //         draggable={false}
  // //         style={{ width: "30px%", margin: "0.5rem 0" }}
  // //         src={guidesIcon}
  // //       />
  // //     </NavLink>
  // //     <NavLink to="/plan" className="flex_item">
  // //       <Image
  // //         draggable={false}
  // //         style={{ width: "30px%" }}
  // //         src={homestaystwoIcon}
  // //       />
  // //     </NavLink>
  // //     <NavLink to="/hotellist" className="flex_item">
  // //       <Image draggable={false} style={{ width: "30px%" }} src={hotelsIcon} />
  // //     </NavLink>
  // //     {/* <NavLink to="/planTourPackages" className="flex_item">
  // //       <Image
  // //         draggable={false}
  // //         style={{ width: "30px%" }}
  // //         src={packagesIcon}
  // //       />
  // //     </NavLink> */}
  // //     <NavLink to="/planTaxis" className="flex_item">
  // //       <Image draggable={false} style={{ width: "30px%" }} src={taxisIcon} />
  // //     </NavLink>
  // //     <NavLink to="/tickets" className="flex_item">
  // //       <Image draggable={false} style={{ width: "30px%" }} src={ticketsIcon} />
  // //     </NavLink>
  // //     <NavLink to="/dmpass" className="flex_item">
  // //       <Image
  // //         draggable={false}
  // //         style={{ width: "30px%" }}
  // //         src={tavelpassIcon}
  // //       />
  // //     </NavLink>
  //   </div>
  // );
};

export default QuickLinks;
