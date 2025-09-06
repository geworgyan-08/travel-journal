import "./Home.css";
import { Header } from "../component/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Card, Rate } from "antd";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    toast.success("Welcome to Travel Journal 🚀", {
      position: "top-right",
      autoClose: 3000,
    });
  }, []);

  useEffect(() => {
    fetch("https://68bc0ecc0f2491613eddf8b4.mockapi.io/trips")
      .then((res) => res.json())
      .then((data) => setTours(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="video-hero">
        <Header />
        <video className="video-bg" autoPlay loop muted playsInline>
          <source src="/assets/Background.mp4" type="video/mp4" />
          Ձեր բրաուզերը չի աջակցում video tag-ին։
        </video>
      </div>

      <div className="tours-split">
        <div className="tour-left">TOURS IN ARMENIA</div>
        <div className="tour-right">OUTING TOURS</div>
      </div>

      <div className="image-cont">
        <img
          src="/assets/armenia-tour.avif"
          alt="Armenia Tour"
          className="tour-img"
        />
        <img src="/assets/outing-tour.jpg" className="tour-img"></img>
      </div>
      <div className="featured-tours-subtitle">
        <h2>Featured Tours</h2>
        <p>
          <i class="fas fa-plane"></i>
        </p>
        <p>Explore the best trips in Armenia and abroad</p>
      </div>

      <div className="tours-cards">
        {tours.map((tour) => (
          <Card
            key={tour.id}
            hoverable
            className="tour-card"
            cover={
              <img
                src={tour.image}
                alt={tour.title}
                className="tour-card-image"
              />
            }
          >
            <Card.Meta
              title={tour.title}
              description={tour.description}
              className="tour-card-meta"
            />
            <div className="tour-card-footer">
              <Rate
                disabled
                defaultValue={tour.rate}
                className="tour-card-rate"
              />
              <span className="tour-card-price">{tour.price}</span>
            </div>
          </Card>
        ))}
      </div>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-logo">
            <h3>Travel Journal</h3>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Contact Us</a>
              <a href="#">FAQs</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>

          <div className="footer-social">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Travel Journal. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
