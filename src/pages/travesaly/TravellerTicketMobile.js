import React from "react";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// import Carousel from "react-multi-carousel";

function TravellerTicketMobile() {
    const history = useHistory();
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 6,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 4,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 2,
        },
    };

    const data = [
        {
            img: "https://img.icons8.com/ios/452/passenger-with-baggage.png",
            name: "Travel Pass",
            path: "/dmpass",
        },
        {
            img: "https://cdn3.iconfinder.com/data/icons/transport-icons-2/512/BT_c3side-512.png",
            name: "Vehicle Pass",
            path: "/dmpass",
        },
        {
            img: "https://static.thenounproject.com/png/61798-200.png",
            name: "Bus Ticket",
            path: "/buspass",
        },

        {
            img: "https://www.iconpacks.net/icons/2/free-parking-sign-icon-1641-thumb.png",
            name: "Parking",
            path: "/tickets",
        },
        {
            img: "https://cdn3.iconfinder.com/data/icons/common-sports/4096/oarsmanship-512.png",
            name: "Boating",
            path: "/tickets",
        },
        {
            img: "https://cdn4.iconfinder.com/data/icons/nature-solid-icons-vol-3/72/108-512.png",
            name: "Nature Trekking",
            path: "/tickets",
        }
    ]
    const onTravelClick = () => {
        history.push('/dmpass')
    }

    const onBusClick = () => {
        history.push('/buspass')
    }
    const onTicketsClick = () => {
        history.push('/tickets')
    }


    return (
        <>
            {/* <Carousel partialVisbile itemClass="image-item" responsive={responsive}>

        {data.map((item, index) => (
          <div className="p-5 " onClick={() => history.push(item.path)}>
            <div style={{ display: "flex", width: "100%" }}>
              <Col>
                <Image style={{ width: 50 }} src={item.img} />
                <p style={{ marginLeft: -10 }}>{item.name}</p>
              </Col>
            </div>
          </div>
        ))}
        
      </Carousel> */}
            <div className="row">
                <div className="col-4" onClick={() => onTravelClick()} >
                    <Image style={{ width: 50 }} src="https://img.icons8.com/ios/452/passenger-with-baggage.png" />
                    <p style={{ marginLeft: -10 }}>Traveller Pass</p>
                </div>
                <div className="col-4" onClick={() => onTravelClick()} >
                    <Image style={{ width: 50 }} src="https://cdn3.iconfinder.com/data/icons/transport-icons-2/512/BT_c3side-512.png" />
                    <p style={{ marginLeft: -10 }}>Vehicle Pass</p>
                </div>
                <div className="col-4" onClick={() => onBusClick()}>
                    <Image style={{ width: 50 }} src="https://static.thenounproject.com/png/61798-200.png" />
                    <p style={{ marginLeft: -10 }}>Bus Ticket</p>
                </div>
            </div>
            <div className="row">
                <div className="col-4" onClick={() => onTicketsClick()}>
                    <Image style={{ width: 50 }} src="https://www.iconpacks.net/icons/2/free-parking-sign-icon-1641-thumb.png" />
                    <p style={{ marginLeft: -10 }}>Parking</p>
                </div>
                <div className="col-4" onClick={() => onTicketsClick()}>
                    <Image style={{ width: 50 }} src="https://cdn3.iconfinder.com/data/icons/common-sports/4096/oarsmanship-512.png" />
                    <p style={{ marginLeft: -10 }}>Boating</p>
                </div>
                <div className="col-4" onClick={() => onTicketsClick()}>
                    <Image style={{ width: 50 }} src="https://cdn4.iconfinder.com/data/icons/nature-solid-icons-vol-3/72/108-512.png" />
                    <p style={{ marginLeft: -10 }}>Nature Trekking</p>
                </div>
            </div>
        </>
    );
}

export default TravellerTicketMobile;
