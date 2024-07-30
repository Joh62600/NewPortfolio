// src/components/Contact.js

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_slfub3w', 'template_skmbpgh', formData, 'ef8gG9Naw_NdmbjqJ')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message envoyé avec succès!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Échec de l\'envoi du message.');
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contactez-moi</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="subject">Sujet</label>
          <input
            type="text"
            id="subject"
            name="subject"
            autoComplete="subject"
            required
            value={formData.subject}
            onChange={handleChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            autoComplete="message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Envoyer</button>
        </form>
      </div>
      <div className="contact-details">
        <h2>Coordonnées</h2>
        <p>Johann Plee</p>
        <p>Email: johann.plee@gmail.com</p>
        <p>Téléphone: 0628750349</p>
        <p>Adresse: Uzerche</p>
      </div>
    </div>
  );
};

export default Contact;
