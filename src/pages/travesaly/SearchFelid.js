import React from 'react'


const data=[
    {
        img: "https://cdn3.iconfinder.com/data/icons/common-sports/4096/oarsmanship-512.png",
        name: "Boating",
        path: "/tickets",
    }
]

function SearchFelid() {
    return (
        <>
        <div>
        <div style={{ display: "flex", width: "100%" }}>
              <Col>
                {/* <Image style={{ width: 50 }} src={item.img} />
                <p style={{ marginLeft: -10 }}>{item.name}</p> */}
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/7_PdY3bPfmM?start=2"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Col>
            </div>
        </div>
            
        </>
    )
}

export default SearchFelid

