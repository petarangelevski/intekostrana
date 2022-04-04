/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import "./Kontakt.css";

function Kontakt() {
  return (
    <div className='contact__container'>
      <div className='contact__map'><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2965.1886842610584!2d21.405230315284605!3d41.996225979213044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x1354143f7d258155%3A0x2f298f2e40d864c1!2sInteko%20Dooel%2C%20Mitropolit%20Teodosij%20Gologanov%2072%2C%20Skopje%201000!3m2!1d41.996187!2d21.407399299999998!5e0!3m2!1sen!2smk!4v1648860190085!5m2!1sen!2smk" style={{width: '600px', height: "450px", border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
      <div className='contact__text'>
        <h2>КОНТАКТ</h2>
        <p>Ние во ИНТЕКО сме секогаш спремни за било какви прашања или предлози за соработка кои ги имате. Можете да не контактирате преку пошта, телефон или email во било кое време.</p>

        <p>Нашата адреса е:</p>

        <strong>ИНТЕКО ДОО</strong>

        <p>Митрополит Теодосиј Гологанов</p>

        <p>1000 Скопје</p>

        <p>Република Македонија</p>

        <p>Телефон: +389 2 3074 136</p>

        <p>E-Пошта: <a href='mailto:info@inteko.mk'>info@inteko.mk</a></p>
      </div>
    </div>
  )
}

export default Kontakt;