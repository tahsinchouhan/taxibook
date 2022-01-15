import React from 'react'
import { useHistory } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import busIcon from '../assets/icons/bus.png'
import eventsIcon from '../assets/icons/events.png'
import guidesIcon from '../assets/icons/guides.png'
import homestaystwoIcon from '../assets/icons/homestaystwo.png'
import hotelsIcon from '../assets/icons/hotels.png'
import packagesIcon from '../assets/icons/packages.png'
import taxisIcon from '../assets/icons/taxis.png'
import ticketsIcon from '../assets/icons/tickets.png'
import tavelpassIcon from '../assets/icons/travelpass.png'

import '../assets/css/quicklinks.css'

import { NavLink } from "react-router-dom";

const QuickLinks = () => {
    const history = useHistory()

    return (
        <div className="flex_container" style={{ top: "80%" }}>
            <NavLink className="" to="/buspass" className="flex_item">
                <Image
                    draggable={false}
                    // className="img-fluid"
                    style={{ width: "30px%", marginTop: "10px" }}
                    src={busIcon}
                />
            </NavLink>
            <NavLink className="" to="/homestaysinbastar" className="flex_item">
                <Image
                    draggable={false}
                    // className="img-fluid"
                    style={{ width: "30px%", marginTop: "10px" }}
                    src={homestaystwoIcon}
                />
            </NavLink>
            <NavLink className="" to="/hotellist" className="flex_item">
                <Image
                    draggable={false}
                    // className="img-fluid"
                    style={{ width: "30px%", marginTop: "10px" }}
                    src={hotelsIcon}
                />
            </NavLink>
            <NavLink className="" to="/taxiinbastar" className="flex_item">
                <Image
                    draggable={false}
                    // className="img-fluid"
                    style={{ width: "30px%", marginTop: "10px" }}
                    src={taxisIcon}
                />
            </NavLink>
            <NavLink className="" to="/tourguidesinbastar" className="flex_item">
                <Image
                    draggable={false}
                    // className="img-fluid"
                    style={{ width: "30px%", marginTop: "10px" }}
                    src={guidesIcon}
                />
            </NavLink>
            <NavLink className="" to="/tickets" className="flex_item">
                <Image
                    draggable={false}
                    // className="img-fluid"
                    style={{ width: "30px%", marginTop: "10px" }}
                    src={ticketsIcon}
                />
            </NavLink>
            <NavLink className="" to="/dmpass" className="flex_item">
                <Image
                    draggable={false}
                    // className="img-fluid"
                    style={{ width: "30px%", marginTop: "10px" }}
                    src={tavelpassIcon}
                />
            </NavLink>
            <NavLink className="" to="/tourpackagesinbastar" className="flex_item">
                <Image
                    draggable={false}
                    // className="img-fluid"
                    style={{ width: "30px%", marginTop: "10px" }}
                    src={packagesIcon}
                />
            </NavLink>
            <NavLink className="" to="/bastareventsandactivities" className="flex_item">
                <Image
                    draggable={false}
                    // className="img-fluid"
                    style={{ width: "30px%", marginTop: "10px" }}
                    src={eventsIcon}
                />
            </NavLink>

        </div>
    )
}

export default QuickLinks