import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from "react-redux";
import { getOtp, verifyOtp } from "../../redux/actions";
import Loader from "../Loader";
import Message from "../Message";
import { HiOutlineArrowRight } from 'react-icons/hi'

function HeritageWalkModal({ show, handleClose }) {
    const [modalShow, setModalShow] = useState(false);
    const [mobile, setMobile] = useState("");
    const [OTP, setOTP] = useState("");
    const [showDiv, setShowDiv] = useState(false);

    const dispatch = useDispatch();
    const { error, loading, message } = useSelector(state => state.commonReducer)
    const { user_data } = useSelector(state => state.loginReducer)

    const fetchOtp = _ => {
        dispatch(getOtp(mobile))
        setShowDiv(true);
    }
    const handleChange = otp => {
        setOTP(otp);
    }

    const handleSubmit = () => {
        if (OTP.length === 6) {
            dispatch(verifyOtp(mobile, OTP))
        }
    }
    useEffect(() => {
        if (user_data !== null) {
            handleClose()
        }
    }, [user_data])

    return (
        <>
            <div>
                {loading ? <Loader /> : null}
                {message ? <Message msg={message} type="success" /> : null}
                {error ? <Message msg={error} type="error" /> : null}
                <Modal show={show} size="lg">
                    <Modal.Header onClick={handleClose} closeButton>
                    </Modal.Header>
                    <Modal.Body className="show-grid">
                        <Container>
                            <Row>
                                {/* <Col style={{ alignSelf: "center" }}>
                                    <div style={{ textAlign: "center" }}>
                                        <img src={logo} alt="Login logo" className="login-logo" />
                                    </div>
                                </Col> */}
                                <Col>
                                    <div>
                                            <h1
                                                style={{ paddingTop: "20px", marginBottom: "20px", fontWeight: "bolder" }}
                                            >
                                                Jagdalpur Heritage Walk
                                            </h1>

                                            <p style={{ fontSize: "18px" }}>
                                                Danteshwari temple<HiOutlineArrowRight />Sirhasar chowk/Bhawan<HiOutlineArrowRight />Jagannath Temple <HiOutlineArrowRight /> Mata Mavli Temple <HiOutlineArrowRight /> Archaeological museum <HiOutlineArrowRight /> Jagdalpur Palace <HiOutlineArrowRight /> Dalpat Sagar <HiOutlineArrowRight /> Ram Mandir <HiOutlineArrowRight /> Krishna Temple <HiOutlineArrowRight /> Laxminarayan temple <HiOutlineArrowRight /> Raja Math <HiOutlineArrowRight /> Kachangudi <HiOutlineArrowRight /> Jiya dera <HiOutlineArrowRight /> Kameshwari gudi <HiOutlineArrowRight /> Anthropological Museum
                                            </p>

                                            <p>
                                                We start our heritage walk by taking the blessings of Maa Danteshwari by visiting Danteshwari temple which was constructed in 1890 by King Rudrapratap dev. After this we move towards Sirahsar chowk this place is the heart of Bastar Dussehra longest festival in the world lasting over 75 days. We also visit Jagannath Temple situated in Sirhasar chowk built in the late 19th century under the tenure of Kings in that era. Mata Mavli Temple is situated beside Jagannath Mandir and was built during the construction of Danteshwari temple. It is the temple of Mata Mavli, considered to be the younger sister of Danteshwari Mai. After this we visit the archaeological museum established in 1988 by the state government . After this we move to see Bastar Palace built during the tenure of King Rudrapratap dev and the new palace was built during the reign of Queen Prafulla Kumari Devi. After seeing the palace we move towards Dalpat Sagar Lake which is spread over 385 acres built during the reign of Raja Dalpat Deo. After this we move to see the temples situated near Dalpat Sagar firstly Ram Mandir built in 1902 secondly Krishna Temple located in front of Ram Mandir over a century old this temple holds 76 statues and lastly Laxminarayan temple which is around 160 years old situated next to Indravati river. We will also visit Raja Math which are basically pillars made in the memory of deceased kings of Bastar. It is located on the banks of the Indravati River.
                                            </p>
                                            <p>
                                                We move towards Kachangudi which means swing of thorns on the day of Ashvin Amavasya a young girl is swung on a swing of thorns to satisfy the goddess Kachan Devi after this the goddess will give permission to celebrate Bastar Dussehra. After this we visit Khameshwari Gudi, a place where Nisha Jatra takes place . This event takes place at midnight in which sacrifices are offered to deities so that their blessings remain in this area.  After this we move towards Jiya dera, a place where priests stay during the festival of Bastar Dussehra. Built by King Rudrapratap Dev in the early 20th century. After this we visit the Anthropology Museum built in 1972 which provides insight in the culture of Bastariya tribes. This museum contains footwear, headgear, ornaments, musical instruments, dresses, weapons, art work etc.
                                            </p>
                                        <Button className="login-button" variant="dark" onClick={handleClose} style={{ fontWeight: "bolder", width: "95px", marginBottom: "50px" }}>
                                           Close
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}
export default HeritageWalkModal;
