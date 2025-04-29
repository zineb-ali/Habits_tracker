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
    role: "Chef de Produit",
    text: "Avant Habitify, j'avais du mal à gérer mon temps efficacement et à respecter les délais. Mais l'application m'a aidé à créer une routine bien structurée et à m'y tenir. J'ai amélioré ma productivité et réduit mon niveau de stress.",
    photo: img11, // Utilisation de l'image importée
  },
  {
    name: "Jennifer Olson",
    role: "Chef de Produit",
    text: "Avant Habitify, j'avais du mal à gérer mon temps efficacement et à respecter les délais. Mais l'application m'a aidé à créer une routine bien structurée et à m'y tenir. J'ai amélioré ma productivité et réduit mon niveau de stress.",
    photo: img12, // Utilisation de l'image importée
  },
  {
    name: "Jennifer Olson",
    role: "Chef de Produit",
    text: "Avant Habitify, j'avais du mal à gérer mon temps efficacement et à respecter les délais. Mais l'application m'a aidé à créer une routine bien structurée et à m'y tenir. J'ai amélioré ma productivité et réduit mon niveau de stress.",
    photo: img13, // Utilisation de l'image importée
  },
  {
    name: "Jennifer Olson",
    role: "Chef de Produit",
    text: "Avant Habitify, j'avais du mal à gérer mon temps efficacement et à respecter les délais. Mais l'application m'a aidé à créer une routine bien structurée et à m'y tenir. J'ai amélioré ma productivité et réduit mon niveau de stress.",
    photo: img14, // Utilisation de l'image importée
  },
  {
    name: "Jennifer Olson",
    role: "Chef de Produit",
    text: "Avant Habitify, j'avais du mal à gérer mon temps efficacement et à respecter les délais. Mais l'application m'a aidé à créer une routine bien structurée et à m'y tenir. J'ai amélioré ma productivité et réduit mon niveau de stress.",
    photo: img15, // Utilisation de l'image importée
  },
  {
    name: "Jennifer Olson",
    role: "Chef de Produit",
    text: "Avant Habitify, j'avais du mal à gérer mon temps efficacement et à respecter les délais. Mais l'application m'a aidé à créer une routine bien structurée et à m'y tenir. J'ai amélioré ma productivité et réduit mon niveau de stress.",
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
      <h2>Histoires de Succès Vérifiées</h2>
      <p className="testimonials-description">
        Habitify a aidé des milliers de personnes à améliorer leur gestion du temps et à adopter des habitudes plus saines. Découvrez comment nos utilisateurs ont transformé leur vie.
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
