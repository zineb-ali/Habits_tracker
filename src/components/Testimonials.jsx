import React, { useState, useEffect } from "react";
import "./../styles/Testimonials.css";
import img11 from "../assets/img/img11.jpg";  // Importation correcte
import img12 from "../assets/img/img12.jpg"; 
import img13 from "../assets/img/img13.jpg"; 
import img14 from "../assets/img/img14.jpg"; 
import img15 from "../assets/img/img15.jpg"; 
import img16 from "../assets/img/img16.jpg"; 

const testimonials = [
  {
    name: "Jennifer Olson",
    role: "Product Manager",
    text: "Before Habitify, I struggled with managing my time effectively and within deadlines. But the app has helped me create a well-structured routine and stick to it. I've improved my productivity and reduced stress levels.",
    photo: img11, // Utilisation de l'image importée
  },
  {
    name: "Jennifer Olson",
    role: "Product Manager",
    text: "Before Habitify, I struggled with managing my time effectively and within deadlines. But the app has helped me create a well-structured routine and stick to it. I've improved my productivity and reduced stress levels.",
    photo: img12, // Utilisation de l'image importée
  },
  {
    name: "Jennifer Olson",
    role: "Product Manager",
    text: "Before Habitify, I struggled with managing my time effectively and within deadlines. But the app has helped me create a well-structured routine and stick to it. I've improved my productivity and reduced stress levels.",
    photo: img13, // Utilisation de l'image importée
  },
  {
    name: "Jennifer Olson",
    role: "Product Manager",
    text: "Before Habitify, I struggled with managing my time effectively and within deadlines. But the app has helped me create a well-structured routine and stick to it. I've improved my productivity and reduced stress levels.",
    photo: img14, // Utilisation de l'image importée
  },
  {
    name: "Jennifer Olson",
    role: "Product Manager",
    text: "Before Habitify, I struggled with managing my time effectively and within deadlines. But the app has helped me create a well-structured routine and stick to it. I've improved my productivity and reduced stress levels.",
    photo: img15, // Utilisation de l'image importée
  },
  {
    name: "Jennifer Olson",
    role: "Product Manager",
    text: "Before Habitify, I struggled with managing my time effectively and within deadlines. But the app has helped me create a well-structured routine and stick to it. I've improved my productivity and reduced stress levels.",
    photo: img16, // Utilisation de l'image importée
  },
  // Ajoutez d'autres témoignages ici...
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-container">
      <h2>Proven Success Stories</h2>
      <p className="testimonials-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laboriosam maxime praesentium amet quia, incidunt veritatis obcaecati eveniet sapiente est soluta? Cum minus eum a voluptas maxime fuga ad nisi.
      </p>

      <div className="testimonial-wrapper">
        <div
          className="testimonial-slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-photo">
                <img src={testimonial.photo} alt={`${testimonial.name}'s photo`} />
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">{testimonial.name}</p>
              <span className="testimonial-role">{testimonial.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
