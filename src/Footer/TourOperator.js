import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../pages/travesaly/Footer";

const TourOperator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Container>
        <div className="visitors">
          <h1 className="header__title text__dark">
            <span className="text__dark">Tour Operator's List</span>
          </h1>
          
          <div className="table-responsive">
            <table className="table" style={{width:'100%'}}>
              <thead>
                <tr>
                  <th width={10}>Sr.</th>
                  <th width={300}>Operator Name</th>
                  <th width={40}>Mobile</th>
                  <th>Address</th>
                  <th width={50}>Website</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Thakur Travels</td>
                  <td>09826698365</td>
                  <td>Anupama Chowk ,  Chitrakote Road , Jagdalpur</td>
                  <td><a href="https://thakurtravels-travelagency.business.site/">Visit</a></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Hansvahini Holidays	</td>
                  <td>08435411411</td>
                  <td>Dalpat Sagar Ward, Bajrang Nagar jagdalpur</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>HarshDeep Tours & Travels</td>
                  <td>9407645939 , 7000307990</td>
                  <td>Near Baba Ramdev Mandir Santosi Ward Jagdalpur, Chhattisgarh 494001 India</td>
                  <td><a href="https://harshdeep-tours-travels.business.site/#summary">Visit</a></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Dev Travels</td>
                  <td>7947343293</td>
                  <td>Old Bus Stand Near Kotari Market ,jagdapur</td>
                  <td><a href="https://devtravels-travelagency.business.site/">Visit</a></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Pathak travels</td>
                  <td>7000727435 ,  9407615003</td>
                  <td>Near Nagar Nigam , new Bus Stand road , Hikmipara , Jagdalpur</td>
                  <td></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Neeraj travel</td>
                  <td>97540 07002</td>
                  <td>Shop No. 8 , New Bus Stand , Jagdalpur</td>
                  <td></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Akhil Tour and Travels</td>
                  <td>7587267769</td>
                  <td></td>
                  <td><a href="https://akhiltourandtravels.business.site/">Visit</a></td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Devesh Tours and travels </td>
                  <td>07000818775, 09826422961</td>
                  <td>Kotari Market , Jagdalpur</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Gupta travels	</td>
                  <td>09425258519</td>
                  <td></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Balaji tour & travels</td>
                  <td>8319827420</td>
                  <td>Bodhgaht Chowk , Jagdalpur</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Bastar Travels</td>
                  <td>8770068448</td>
                  <td>House No. H-50, Bodhghat, Irrigation Colony , Jagdalpur </td>
                  <td><a href="https://www.bastartravels.com/">Visit</a></td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Laxmi Tours & Travels</td>
                  <td>08870382464</td>
                  <td>Chitrakote Road , housing board Colony , jagdalpur</td>
                  <td><a href="https://laxmitourstravels.business.site/">Visit</a></td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Smile Tour & Travels</td>
                  <td>9893768094</td>
                  <td>GF-12, MARKET COMPLEX,, HOUSING BOARD COLONY, NEAR SAI MANDIR , DHARAMPURA, Jagdalpur, Chhattisgarh 494001</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Tomar travels jagdalpur</td>
                  <td>9981509909</td>
                  <td></td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Rai Travels</td>
                  <td>9425259915</td>
                  <td>Collectorate Road , Naya Para , Jagdalpur</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Suvidha Travels</td>
                  <td>9407774999</td>
                  <td>C/O,SHEIKH NAZIMUDDIN, CHAITRAKOOT ROAD, Jagdalpur, Chhattisgarh 494001</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Humara Jagdalpur</td>
                  <td>9701900209</td>
                  <td>2nd Floor, Sai Samridhhi Building , pratapganj Para , Jagdalpur </td>
                  <td><a href="https://www.hamarajagdalpur.com/">Visit</a></td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Agrawal Holidays</td>
                  <td>8871800900</td>
                  <td>Collectorate Road , Naya Para , Jagdalpur</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Vivaan Holidays Chhattisgarh </td>
                  <td></td>
                  <td>opp. union bank, Pratap Dev Ward, Jagdalpur, Chhattisgarh 494001</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Jagdalpur Tour and Travels</td>
                  <td></td>
                  <td>P. L tiwari House, Gangamunda para near Sitka hotel, Jagdalpur, Chhattisgarh 494001</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Tiwari Tour and Travels</td>
                  <td>9406002229</td>
                  <td>ward no. 23, deepak tiwar, Ganga Nagar, Jagdalpur, Chhattisgarh 494001</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Ravi Tour and Travels</td>
                  <td></td>
                  <td>Aahawal, Jagdalpur, Chhattisgarh 494001</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Jagdalpuriya</td>
                  <td></td>
                  <td>Sbi Road, near Kapoor Bakery, Jagdalpur, Chhattisgarh 494001</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Glimps of Bastar	</td>
                  <td>79748 83620, 94242 81353</td>
                  <td>A/14 bodhghat colony Pt.sunderlal sharma ward, Jagdalpur, Chhattisgarh 494001</td>
                  <td><a href="https://glimpes-of-bastar.business.site/">Visit</a></td>
                </tr>
              </tbody>
            </table>
            <p> Want to add your business contact <a href="tel:+917987300407"> <strong>7987300407</strong> </a></p>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default TourOperator;
