import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../pages/travesaly/Footer";

const CovidResponse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Container>
        <div className="visitors">
          <h1 className="header__title text__dark">
            <span className="text__dark">For Visitors</span>
          </h1>
          <Container>
            <div className="block">
              <h4 className="block__title">
                <span>Covid-19</span> Response
              </h4>

              <ul className="visitor__list pt-3">
                <li className="visitor__list-item">
                  Make wearing a mask a normal part of being around other people
                </li>
                <li className="visitor__list-item">
                  Maintain at least a 1-metre social distance between yourself
                  and others
                </li>
                <li className="visitor__list-item">
                  Keep sanitizing your hands regularly
                </li>
              </ul>

              <p className="visitor__text">
                To make travel safer for everyone, many states in India and the
                countries across the globe, we have now made it mandatory for
                visitors to carry a COVID-19 negative test result. Getting a
                pre-travel test done is highly recommended as it certifies your
                ‘safe’ status, keeps everyone around you safe, and also helps
                you avoid long periods of mandatory quarantine upon arrival at
                your destination.
              </p>

              <p className="visitor__text">
                To keep everyone safe, we’ve now made the COVID- 19 test easily
                accessible for you
              </p>
            </div>
          </Container>
          <div className="block pt-5">
            <h4 className="block__title">
              <span>Booking</span> Details
            </h4>
            <ul className="visitor__list pt-3 pb-4">
              <li className="visitor__list-item">
                Simply navigate to curated experience section ,
              </li>
              <li className="visitor__list-item">
                Check nearby travel destinations and contact the tour operator
                for respective package
              </li>
              <li className="visitor__list-item">
                Confirm the availability and book your package as soon as
                possible .
              </li>
              <li className="visitor__list-item">
                According to government regulations, a valid Photo ID has to be
                carried by every person above the age of 18 to book travels with
                Amcho Bastar. The identification proofs accepted are Drivers
                License, Voters Card, Passport, Ration Card. Without a valid ID
                the guest will not be allowed to check in.
              </li>
              <li className="visitor__list-item">
                Our tour operators are empanelled and certified once booking is
                done you will get confirmation , ,travelbastar plays role of
                enabler to connect tourists and tour operators we are not liable
                for any financial transactions for both parties
              </li>
              <li className="visitor__list-item">
                Get your bagpack ready for adventures, activities once your
                package is confirmed
              </li>
              <li className="visitor__list-item">
                A to do checklist is recommended before you arrive as bastar has
                lots of surprises waiting for you !Contact tour operator for
                more
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default CovidResponse;
