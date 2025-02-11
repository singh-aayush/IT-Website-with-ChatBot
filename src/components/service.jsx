import Navbar from "./navbar";
import Footer from "./footer";
import { useEffect } from "react";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className="serviceContainer">
        <div className="serviceHeadingSection">
          <h1>Discover all services</h1>
        </div>
        <div className="allServices">
          <div className="serviceSections">
            <div className="serviceNumberOne mutualServiceClass">
              <h2>Artificial Intelligence</h2>
              <ul className="serviceLists">
                <li>Application Development</li>
                <li>Cloud Services</li>
                <li>Data Solutions</li>
                <li>Digital Strategy</li>
                <li>Technology Alliances</li>
              </ul>
            </div>
            <div className="serviceNumberTwo mutualServiceClass">
              <h2>Assurance</h2>
              <ul className="serviceLists">
                <li>Internal Audit</li>
                <li>IT Audit Solutions</li>
                <li>Managed Services</li>
                <li>International Audit</li>
                <li>Public Company Audit</li>
              </ul>
            </div>
            <div className="serviceNumberThree mutualServiceClass">
              <h2>International</h2>
              <ul className="serviceLists">
                <li>Indian Services</li>
                <li>International Tax</li>
                <li>Transfer Pricing</li>
                <li>Japanese Services</li>
                <li>International Audit</li>
              </ul>
            </div>
            <div className="serviceNumberFour mutualServiceClass">
              <h2>Consulting</h2>
              <ul className="serviceLists">
                <li>CFO Advisory Services</li>
                <li>Complex Disputes</li>
                <li>Forensic Accounting</li>
                <li>Human Capital</li>
                <li>Corporate Renewal</li>
              </ul>
            </div>
            <div className="serviceNumberFive mutualServiceClass">
              <h2>Digital Solutions</h2>
              <ul className="serviceLists">
                <li>Application Development</li>
                <li>Cloud Services</li>
                <li>Data Solutions</li>
                <li>Enterprise Solutions</li>
                <li>Technology Alliances</li>
              </ul>
            </div>
            <div className="serviceNumberSix mutualServiceClass">
              <h2>ESG & Sustainability</h2>
              <ul className="serviceLists">
                <li>Energy Transition Services</li>
                <li>Federal Tax</li>
                <li>Internal Audit</li>
                <li>Municipal Advisory</li>
                <li>Regulatory Compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}

export default Services;
