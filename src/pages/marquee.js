import React from 'react'
import { useHistory } from "react-router-dom"
import Logo from '.././assets/img/new_Logo.png'
function MarqueeComponent() {
    const history = useHistory()
    const marqueeHandler = () => {
        history.push("/buspass")
    }
    return (
        <>
            <div className="pt-3">
                <marquee width="100%" direction="right" height="1%" style={{ color: 'black', cursor: 'pointer' }} onClick={marqueeHandler}>
                    Book Bus Tickets <img src={Logo} style={{ height: '35px' }} />
                    {/* &#11088; */}
                </marquee>
            </div>
        </>
    )
}

export default MarqueeComponent
