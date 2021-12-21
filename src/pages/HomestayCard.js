import React, { useState } from "react";
import { Image } from "react-bootstrap";
import BookNowForm from "./BookNowForm";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const HomestayCard = ({ item }) => {
  const history = useHistory();

  const { user_data } = useSelector((state) => state.loginReducer);
  const [showFormModal, setShowFormModal] = useState(false);

  return (
    <div className="curated__card">
      <Image
        draggable={false}
        style={{
          width: "350px",
          height: "220px",
          borderRadius: "10px",
        }}
        className="curated__card-img"
        src={item.upload_images}
      />
      <div className="curated__card-overlay"></div>
      <div style={{ width: "350px" }} className="curated__card-info ">
        <div className="curated__card-text">
          <h6 className="packages__block-title_ m-0">{item.title}</h6>
          <div>
            <small className="packages__block-subtitle ms-2">
              ₹ {item.price}
            </small>
          </div>
        </div>
        <div className="curated__card-btn">
          <button className="book-now" onClick={() => setShowFormModal(true)}>
            Book Now
          </button>
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
        </div>
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

export default HomestayCard;
