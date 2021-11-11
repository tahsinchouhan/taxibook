import React ,{useEffect,useState} from 'react'
import {Table} from 'react-bootstrap'
import { API_PATH } from "../../Path/Path";
import axios from 'axios'
import moment from 'moment'
import Header from "../../components/Header";
import Footer from "../travesaly/Footer";

function ViewTicket() {

    const mobile = JSON.parse(localStorage.getItem('mobile'));

    const [tickets, setTickets] = useState()
    useEffect(() => {
        console.log('mobile',mobile)
        axios.post(API_PATH + `/api/v1/busticket/search`,{mobile})
        .then((res) => {
            console.log('data this',res.data)
            setTickets(res.data.data)
        })
        .catch((e) => console.log(e));
    }, [])

    console.log('tickets',tickets)
    return (
        <>
              <Header/>

        <h1 className="text-center text-success mt-5">Booked Tickets</h1>
        <div className="container mt-5">
            <Table striped bordered hover size="sm">
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
  {tickets?.map((item,index)=>{
      return(
    <tr>
      <td className="text-center">{moment(item.date).format('DD-MM-YYYY')}</td>
      <td className="text-center">{item.booking_Id}</td>
      <td className="text-center">{item.name}</td>
      <td className="text-center">{item.amount}</td>
      <td className="text-center">
        <a href={`http://15.206.92.158/bus-detail/${item.booking_Id}`}>View Ticket</a>
      </td>

    </tr>)
  })}
   
  </tbody>
</Table>
        </div>
        <div className="mt-5">
          <Footer />
        </div>
        </>
    )
}

export default ViewTicket
