import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../pages/travesaly/Footer";

const CabOperator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Container>
        <div className="visitors">
          <h1 className="header__title text__dark">
            <span className="text__dark">For Cab Operator</span>
          </h1>

          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Sr.</th>
                  <th>Travellers Name</th>
                  <th>Owner Name</th>
                  <th>Mobile</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Sdri Dantesdwari Tour and Travels</td>
                  <td>Mr. Pinku Tiwari </td>
                  <td>9479022521</td>
                  <td>Near Congress Bdawan,Jagdalpur</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Patdak Tour and Travels</td>
                  <td>Mr. Sdasdikant Patdak</td>
                  <td>7000727435</td>
                  <td>Nagar Nigam Office ke Samne</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Kusdwada Tour and Travels </td>
                  <td>Mr. Devesd Kusdwada </td>
                  <td>7000818775</td>
                  <td></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Sunny Tour nad Travels</td>
                  <td>Mr. darjeet Singd</td>
                  <td>9669062903</td>
                  <td></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>BTS Travels </td>
                  <td>Mr. Ameen Kdan</td>
                  <td>9425261585</td>
                  <td></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Sidddi Tour and Travels</td>
                  <td>Mr. Santosd Singd</td>
                  <td>6262888655</td>
                  <td>Near Cafe Story , Jagdalpur</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default CabOperator;
