import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="background"></div>
      <div className="home">
        <div className="card-holder">
          <div className="card">
            <h3>Comprehensive Dental Services</h3>
            <p>
              We offer a wide range of general dentistry services to maintain
              your oral health. From routine check-ups and cleanings to
              fillings, our team ensures you receive the best care.
            </p>
            <Link to="/contact">
              {" "}
              <button className="card-button">Learn More</button>
            </Link>
          </div>

          <div className="card">
            <h3>Teeth Whitening</h3>
            <p>
              Brighten your smile with our professional teeth whitening
              services. Whether for a special occasion or just a boost to your
              confidence, we provide safe, effective whitening treatments.
            </p>
            <Link to="/contact">
              <button className="card-button ">Get a Brighter Smile</button>
            </Link>
          </div>

          <div className="card">
            <h3>Emergency Dental Care</h3>
            <p>
              Accidents happen. Our clinic is here for you in dental
              emergencies, from sudden toothaches to broken teeth. Get fast and
              professional care when you need it the most.
            </p>
            <Link to="/contact">
              {" "}
              <button className="card-button">Contact Us Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
