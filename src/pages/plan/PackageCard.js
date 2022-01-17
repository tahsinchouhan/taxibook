import React, { useState } from "react";
import { Image } from "react-bootstrap";
import BookNowForm from "../BookNowForm";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./package-card.css"
const PackageCard = ({ item }) => {
  const history = useHistory();

  const { user_data } = useSelector((state) => state.loginReducer);
  const [showFormModal, setShowFormModal] = useState(false);

  return (
    <div className="package__card">
    <div style={{height: "180px"}}>

      <Image
        draggable={false}
        className="package__card-img"
        src={item.upload_images}
      />
    </div>

      <div style={{padding: "0 0.7rem"}}>
        <h6 className="package-card-heading">{item.title}</h6>
        <div className="package-card-text" >
          <p className="sm-text">
            Per person Per Night
          </p>
          <p className="package-price">
            ₹ {item.price}
          </p>
        </div>

        </div>
        <div className="package__card-btn">
        <button
            className="view-details"
            onClick={() =>
              history.push({
                pathname: `/packages_details/${item.title}`,
                item: item._id,
              })
            }
          >
            View Details
          </button>
          <button className="book-now" onClick={() => setShowFormModal(true)}>
            Book Now
          </button>
        </div>

      <BookNowForm
        item={item}
        show={showFormModal}
        handleModal={setShowFormModal}
        user_data={user_data}
      />
    </div>
  );
};

export default PackageCard;
