import React ,{useEffect,useState} from 'react'
import {Table} from 'react-bootstrap'
import { API_PATH } from "../../Path/Path";
import axios from 'axios'
import moment from 'moment'
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";
import '../.././assets/css/viewTicket.css'

function ViewTicket() {

    const mobile = JSON.parse(localStorage.getItem('mobile'));

    const [busTickets, setBusTickets] = useState()
    const [busShow,setBusShow] = useState(false)
    const [hotelTickets, setHotelTickets] = useState()
    const [hotelShow,setHotelShow] = useState(false)
    const [style, setStyle] = useState("cont");



    // bus ticket api
    useEffect(() => {
        console.log('mobile',mobile)
        axios.post(API_PATH + `/api/v1/busticket/search`,{
            mobile,
        })
        .then((res) => {
            console.log('data this',res.data)
            setBusTickets(res.data.data)
        })
        .catch((e) => console.log(e));
    }, [])
     // hotel ticket api

    useEffect(() => {
      axios.get(API_PATH + `/api/v2/booking/search?mobile=${mobile}`)
      .then((res) => {
          console.log('data hotel',res.data)
          setHotelTickets(res.data.data)
      })
      .catch((e) => console.log(e));
  }, [])

    console.log('bustickets',busTickets)
    console.log('hotelTickets',hotelTickets)

    const hotelHandler =()=>{
      setHotelShow(!hotelShow)
      setBusShow(false)
      setStyle("cont2");
    }
    const busHandler =()=>{
      setBusShow(!busShow)
      setHotelShow(false)
      setStyle("cont2");
    }
    return (
        <>
              <Header/>
              <div className="container">
              <div className="row">
              <button className="text-center text-success mt-5 col-md-4 border py-3 button" onClick={hotelHandler}>Hotel Tickets</button>
              <button className="text-center text-success mt-5 col-md-4 border py-3 button" onClick={busHandler}>Bus Tickets</button>
        <button className="text-center text-success mt-5 col-md-4 border py-3 button">Cab Tickets</button>
        </div>
        </div>
        <div className="container mt-5">
        {busShow ?  <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th className="text-center">Date</th>
      <th className="text-center">Booking id</th>
      <th className="text-center">Trip Name</th>
      <th className="text-center">Amount</th>
      <th className="text-center">View Ticket</th>

    </tr>
  </thead>
  <tbody>
  {busTickets?.map((item,index)=>{
      return(
    <tr>
      <td className="text-center">{moment(item.date).format('DD-MM-YYYY')}</td>
      <td className="text-center">{item.booking_Id}</td>
      <td className="text-center">{item.trips_id.trip_name}</td>
      <td className="text-center">{item.amount}</td>
      <td className="text-center">
        <a href={`http://15.206.92.158/bus-detail/${item.booking_Id}`}>View Ticket</a>
      </td>

    </tr>)
  })}
   
  </tbody>
</Table>
:null}
           

 {/* hotel table */}
 {hotelShow ?  <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th className="text-center">Date</th>
      <th className="text-center">Booking id</th>
      <th className="text-center">Hotel Name</th>
      <th className="text-center">Amount</th>
      <th className="text-center">View Ticket</th>

    </tr>
  </thead>
  <tbody>
  {hotelTickets?.map((item,index)=>{
      return(
    <tr>
      <td className="text-center">{moment(item.created_at).format('DD-MM-YYYY')}</td>
      <td className="text-center">{item.booking_id}</td>
      <td className="text-center">{item.hotel_id.hotel_name}</td>
      <td className="text-center">{item.amount}</td>
      <td className="text-center">
        {/* <a href={`http://15.206.92.158/bus-detail/${item.booking_Id}`}>View Ticket</a> */}
      </td>

    </tr>)
  })}
   
  </tbody>
</Table>
:null}
        </div>
        <div className="mt-5">
          <Footer />
        </div>
        </>
    )
}

export default ViewTicket
