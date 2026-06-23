import React from "react";
import { useNavigate } from "react-router-dom";
import Container1 from "./Container1.png";
import Container2 from "./Container2.png";

const Charts = () => {
    return (
    <section className="dashboard-img">  
      <div className="dashboard-cards">
        <img src={Container1} alt="chart1" className="chart-img"/>
    </div>
    <div className="dashboard-cards">
        <img src={Container2} alt="chart2" className="chart-img"/>
    </div>
    </section>
    );

};
export default Charts;
