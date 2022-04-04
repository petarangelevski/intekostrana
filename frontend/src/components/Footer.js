import React from 'react';
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <footer className="footer">
    	<ul class="footer_navigation">
            <li><a href="/">Дома</a></li>
            <li><a href="/api/zanas">За нас</a></li>
            <li><a href="/api/products">Производи</a></li>
            <li><a href="/api/objects">Објекти</a></li>
            <li><a href="/api/kontakt">Контакт</a></li>
            <li><a href="/api/sistemi">Системи</a></li>
      </ul>
      <div className='footer-social-media'>
        <a href='https://www.facebook.com/profile.php?id=100015692923237'>
          <FacebookIcon />
        </a>
      </div>
      <div class="dnd">
        &#xFEFF;© ИНТЕКО ЕКСПОРТ-ИМПОРТ. Сите права задржани.
        <br/>
        Designed &amp; developed by <a href="https://www.facebook.com/petar.angelevskimerdzanovski/">Петар Ангелевски</a>.        
      </div>

</footer>
  )
}

export default Footer