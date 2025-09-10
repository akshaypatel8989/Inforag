import React,{useState} from 'react'
import "./Section.css";

const images = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "https://picsum.photos/id/1019/1000/600/"
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next Slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>Services

      <div className="slider">
      <button className="prev" onClick={prevSlide}>
        ❮
      </button>

      <img src={images[currentIndex]} alt="slider" className="slide-image" />

      <button className="next" onClick={nextSlide}>
        ❯
      </button>
    </div>
     



   
    </div>
  )
}

