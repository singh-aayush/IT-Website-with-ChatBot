import { use } from "react";
import About from "./about";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="homeContainer">
        <div className="headingSection">
          <h1>
            My<span>Tech</span>
          </h1>
          <h2>Innovating the Future, One Byte at a Time</h2>
          <p>
            Innovate. Elevate. Transform. Tech-driven solutions for a smarter
            future
          </p>
          <div className="homePageButtons">
            <button
              className="portfolioButton"
              onClick={() => navigate("/portfolio")}
            >
              Portfolio
            </button>
            <button
              className="contactUsButton"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <About></About>
    </>
  );
}

export default Home;
