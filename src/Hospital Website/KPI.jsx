import React from "react";
import "../App.css";
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { MdTrendingUp } from "react-icons/md";
import img from "./img.png";


const RevenueCards = () => {
    return(
      <div className="dashboard-cards">
            <div className="card-box">
                <div className="card-Header">
                    <span className="card-icon revenue-icon">$</span>
                    <span className="card-title">Total Revenue</span>
                </div>
                <h5 className="card-value">
                    <MdOutlineCurrencyRupee />24.8k
                    </h5>
                <p className="card-text revenue-text">
                   <MdTrendingUp /> +12% vs yesterday</p>
            </div>
            <div  className="card-box">
                <div className="card-Header">
                    <span className="card-icon recived-icon">
                        <IoMdCheckmarkCircleOutline color="blue" /></span>
                    <span className="card-title">Received</span>
               </div>  
                    <h5 className="card-value">
                        <MdOutlineCurrencyRupee />
                        2.2K</h5>
                    <p className="card-text received-text">
                    9% collection <div>rate</div> </p>
            </div>
            <div className="card-box">
            <div className="card-Header">
                <span className="card-icon pending-icon"><CiClock2 /></span>
                <span className="card-title">Pending</span>
            </div>
            <h2 className="card-value"><MdOutlineCurrencyRupee />22.6K</h2>
            <p className="card-text pending-text">
                2 unpaid bills
            </p>
            </div>
            <div className="card-box">
                <div className="card-Header">
                    <span className="card-icon invoice-icon"><img src={img} alt="invoice"/></span>
                    <span className="card-title">                   
                         Invoices Today</span>
                </div>
                <h5 className="card-value">3</h5>
                <p className="card-text invoice-text">
                    Generated
                </p>
            </div>
      </div>
      

    );
};
export default RevenueCards;