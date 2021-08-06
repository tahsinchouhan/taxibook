import React from "react";
import Header from "../components/Header";
import Section from "../components/Section";


import bg from "../assets/bg_12.jpg";
import Footer from "../components/Footer";



const Layout = ({ bg, children }) => {
  return (
    <React.Fragment>
       {children}
      <Footer />
    </React.Fragment>
  );
}
 
export default Layout;