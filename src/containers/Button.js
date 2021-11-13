import React from 'react'
// import '../../../assets/css/ReuseableComponents.css'

function ButtonComponent(props) {

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ margin: "-7px" }}>
                {props.data.map(item => {
                    const className = props.activeButton === item.name ? "btn-success" : "btn-light";
                    return (
                        // <div className="ml-1" key={item.value}>
                        <button
                            key={item.value}
                            type='button'
                            style={props.style}
                            className={`btn ${className} `}
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
