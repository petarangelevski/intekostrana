import React from 'react';
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {
  return (
    <footer className="footer">
      <div className='footer-social-media'>
        <a href='https://www.facebook.com/profile.php?id=100015692923237'>
          <FacebookIcon />
        </a>
        <a href='mailto:info@inteko.mk'>
          <MailOutlineIcon />
        </a>
      </div>
      <ul class="footer_navigation">
            <li><a href="/">Дома</a></li>
            <li><a href="/api/zanas">За нас</a></li>
            <li><a href="/api/products">Производи</a></li>
            <li><a href="/api/objects">Објекти</a></li>
            <li><a href="/api/kontakt">Контакт</a></li>
            <li><a href="/api/sistemi">Системи</a></li>
      </ul>
      <div class="dnd">
        &#xFEFF;© ИНТЕКО ЕКСПОРТ-ИМПОРТ. Сите права задржани.
        <br/>
        Designed &amp; developed by <a href="https://www.facebook.com/petar.angelevskimerdzanovski/">Петар Ангелевски</a>      
      </div>

</footer>
  )
}

export default Footer