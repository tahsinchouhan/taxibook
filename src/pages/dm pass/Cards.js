import React from "react";
import { Col, Card } from "react-bootstrap";

export default function Cards(props) {
    return (
        <div style={{marginRight: 6, marginLeft: 6,marginTop: 20}}>
        <Card
          style={{
            width: 90,
            height: "120px",
            backgroundColor: " #864BD8",
            color: "white",
            fontWeight: "700",
            
          }}
        >
            <Card.Text className="location-card">
              {props.parname}
            </Card.Text>
            <Card.Text className="location-card-rate">₹{props.rate}</Card.Text>
            <Card.Text className="location-card-name">
              No. of Tickets
            </Card.Text>
            <div class="input-group plus-minus-input">
              <div class="input-group-button">
                <button
                  type="button"
                  class="button hollow circle"
                  data-quantity="minus"
                  data-field="quantity"
                >
                  -
                </button>
              </div>
              <input
                class="input-group-field"
                type="number"
                name="quantity"
                value="0"
              />
              <div class="input-group-button">
                <button
                  type="button"
                  class="button hollow circle"
                  data-quantity="plus"
                  data-field="quantity"
                >
                  +
                </button>
              </div>
            </div>
        </Card>
      </div>
    )
}
