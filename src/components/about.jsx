import { useEffect } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import ImageCarousel from "./carousel";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
// import ExampleCarouselImage from "./carouselImage";

function About() {
  const Navigate = useNavigate();
  useEffect(() => {
    const cards = document.querySelectorAll(".featureCard");
    const container = document.querySelector(".companyVisionSection");

    function rotateCards() {
      let angle = 0;
      cards.forEach((card, index) => {
        if (card.classList.contains("away")) {
          //   console.log("mee");
          card.style.transform = `translateY(-120vh) rotate(-48deg)`;
          card.style.opacity = "0";
          card.style.pointerEvents = "none";
        } else {
          //   console.log("ji");
          card.style.transform = `rotate(${angle}deg)`;
          angle -= 10;
          card.style.zIndex = cards.length - index;
          card.style.opacity = "1";
        }
      });
    }

    function isInViewport(element) {
      if (!element) return false;
      //   console.log("hlo");
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
    }

    function handleScroll() {
      //   console.log("Scrolling detected");

      if (!isInViewport(container)) {
        // console.log("Section not in viewport, skipping effect.");
        return;
      }

      let topValue = container.getBoundingClientRect().top;
      let distance = window.innerHeight / 2;
      //   console.log("topValue:", topValue, "distance:", distance);

      let index = Math.floor((window.innerHeight - topValue) / distance);
      //   console.log("Corrected Index:", index);

      index = Math.max(0, Math.min(cards.length - 1, index));
      //   console.log("Corrected Index:", index);

      cards.forEach((card, i) => {
        // console.log(`Card Index: ${i}, Calculated Index: ${index}`);

        if (i <= index) {
          card.classList.add("away");
        } else {
          card.classList.remove("away");
        }
      });

      rotateCards();
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="aboutContainer">
      <div className="aboutSection">
        <h1>
          Know More About <span>TechNova</span>
        </h1>
        <h2>Who We Are?</h2>
        <div className="cardSection">
          <div className="cards">
            <div className="cardOne card">
              <img src="/src/Image/mission.png" alt="our vision image" />
              <div className="description">
                Innovating to deliver value and build lasting partnerships for
                business success in a changing world.
              </div>
            </div>
            <div className="cardTwo card">
              <img src="/src/Image/expertise.png" alt="our expertise image" />
              <div className="description">
                Specialized in IT Industry, we provide tailored solutions to
                help clients thrive in a competitive market.
              </div>
            </div>
            <div className="cardThree card">
              <img src="/src/Image/values.png" alt="our values image" />
              <div className="description">
                Guided by integrity, collaboration, and excellence, we ensure
                success through ethical practices and high standards.
              </div>
            </div>
          </div>
        </div>
        <p>
          Our mission is to revolutionize industries through innovation,
          automation, and intelligent solutions.
        </p>

        <div className="companyVisionSection scrollSection">
          <div className="visionSection">
            <h2>Our Vision</h2>
            <p>
              We aim to create a smarter and more connected world by leveraging
              the latest advancements in AI, cloud computing, and software
              development. TechNova is committed to pushing boundaries and
              shaping the future of technology.
            </p>
          </div>
          <div className="chooseUsSection">
            <h2>Why Choose Us?</h2>
            <div className="aboutFeatureCards">
              <div className="featureCard featureFirstCard">
                <p>
                  🚀 <strong>Innovation & Creativity</strong> – Always ahead
                  with the latest tech.
                </p>
              </div>
              <div className="featureCard featureSecondCard">
                <p>
                  💡 <strong>Expert Professionals</strong> – A team of skilled
                  and passionate innovators.
                </p>
              </div>
              <div className="featureCard featureThirdCard">
                <p>
                  ⚡ <strong>Scalable Solutions</strong> – Future-proof
                  technology for long-term growth.
                </p>
              </div>
              <div className="featureCard featureFourthCard">
                <p>
                  🛠 <strong>24/7 Support</strong> – Always available for your
                  technical needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutPageButtons">
          <button
            className="servicesButton"
            onClick={() => Navigate("/service")}
          >
            Our Services
          </button>
          <button
            className="contactUsButton"
            onClick={() => Navigate("/contact")}
          >
            Get in Touch
          </button>
        </div>
      </div>
      {/* <Carousel slide={false}>
        <Carousel.Item>
          <ExampleCarouselImage text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Fourth slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Fifth slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      {/* <ImageCarousel></ImageCarousel> */}

      {/* <Footer></Footer> */}
    </div>
  );
}

export default About;
