// import React, { useEffect, useState } from 'react'
// import '../../../assets/css/ReuseableComponents.css'

// function ButtonComponent(props)
// {
//     const [flag, setFlag] = useState(false);
//     const trigerOnClickEmpSideBtn = () =>
//     {
//         setFlag(true);
//     }
//     return (
//         <div className="btn-group d-flex justify-content-center">

//             <button

//                 className={`${ flag === true
//                     ? "btn btn-danger"
//                     : "btn btn-success"
//                     }`}
//                 onClick={trigerOnClickEmpSideBtn}
//             >
//                 {props.name}
//             </button>
          
//         </div>



//     )
// }

// export default ButtonComponent
import React, { useEffect } from 'react'
// import '../../../assets/css/ReuseableComponents.css'

function ButtonComponent(props)
{

    return (
    <>
        <div className="d-flex justify-content-center align-items-center" style={{margin:"-7px"}}>
            {props.data.map(item =>
            {
                const className = props.activeButton === item.name ? "btn-success" : "btn-light";
                return (
                    // <div className="ml-1" key={item.value}>
                        <button
                            style={props.style}
                            className={`btn ${ className } `}
                            value={item.value}
                            name={item.name}
                            onClick={props.trigerOnClickEmpSideBtn}
                        >
                            {item.name}
                        </button>
                    // </div>
                );
            })}
            </div>
            </>
    )
}

export default ButtonComponent
