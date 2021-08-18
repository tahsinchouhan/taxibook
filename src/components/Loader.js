import React from 'react'

import LoaderSpinner from "react-loader-spinner";

function Loader() {
    return (

        <div className="loader_center" style={{ display: "flex", justifyContent: "center", alignItems: "center", sheight: "100%" }}>
            <LoaderSpinner
                type="Circles"
                color="#b8b4fc"
                height={40}
                width={70}
                timeout={3000}
            />
        </div>
    )
}

export default Loader