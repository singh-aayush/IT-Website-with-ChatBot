import Footer from "./footer";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "Developed a modern e-commerce website with payment integration.",
    image: "/src/Image/ecommerce.jpg", // Replace with your image path
    link: "https://example.com", // Replace with your project link
  },
  {
    id: 2,
    title: "Business Landing Page",
    description: "Designed a sleek, responsive business landing page.",
    image: "/src/Image/landingpage.jpg",
    link: "https://example.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects and skills.",
    image: "/src/Image/portfolio.jpg",
    link: "https://example.com",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A blog platform with rich text editing and user authentication.",
    image: "/src/Image/blog.jpg",
    link: "https://example.com",
  },
];

function Portfolio() {
  return (
    <>
      <div className="portfolio-container">
        {/* Hero Section */}
        <div className="portfolio-hero">
          <h1>My Portfolio</h1>
          <p>Showcasing some of my best projects.</p>
        </div>

        {/* Projects Section */}
        <div className="portfolio-projects">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src="/public/image/download.jpg" alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="portfolio-contact">
          <h2>Let's Work Together</h2>
          <p>Have an idea? Let's build something amazing together!</p>
          <a href="/contact" className="contact-btn">
            Get in Touch
          </a>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}

export default Portfolio;
