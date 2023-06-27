import img1 from './imges/ec1.jpg';
import img2 from './imges/ec2.jpg';
import img3 from './imges/ec3.jpg';
import './Slider.css';

function Slider() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100 height-500"  />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100 height-500"  />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100 height-500"  />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default Slider;
