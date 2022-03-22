import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import SponsorImage from "./images/logo-babolat.png"
function Home() {
  <div className='sponsor'>
    <img src={SponsorImage} alt='sponsor' className='sponsorPic' />

  </div>
  return (
    <><section>
      <div className="section-center clearfix">
        <article className="about-img">
          <div className="about-picture-container">
            <img src="https://rkvardar.mk/files/styles/article/public/page/2018/08/31/sala-s.c.jane-sandanski-17354.jpg?itok=FW-nyHLn" alt="kave" class="about-picture" />
          </div>
        </article>
        <article className="about-info">
          <div className="section-title">
            <h3 className="section-header">za nasite</h3>
            <h2 className="section-header2">objekti</h2>
          </div>
          <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus.</p>
          <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, atque.</p>
          <a href="about.html" className="btn">procitajte povekje</a>
        </article>
      </div>
    </section>
      <section className="products clearfix">
        <div className="section-products">
          <article className="product-text">
            <div className="product-title">
              <h3 className="product-header">Poglednete gi</h3>
              <h2 className="product-header2">Nasite proizvodi</h2>
            </div>
            <p className="product-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo minus fuga ullam. Amet laudantium neque sit deleniti voluptates? Eaque maxime iure quisquam corporis sapiente pariatur.</p>
            <a href="products.html" className="btn">Proizvodi</a>
          </article>
          <article className="product-img">
            <div className="product-img-container1">
              <img src="https://cdnmedia.racquets4u.com/media/catalog/product/cache/6e8e24cc73e2eff11526e72b5f24c033/b/a/babolat-propulse-blast-all-court-tennis-shoes-cherry-white.jpg" alt="" className="product-picture" />
            </div>
            <br />
            <br />
            <div className="product-info">
              <h4 className="product-img-info1">Babolat propulse blast all court tennis shoes cherry white</h4>
              <h4 className="product-img-price1">6700 den</h4>
            </div>
          </article>
          <article className="product-img">
            <div className="product-img-container1">
              <img src="https://cdnmedia.racquets4u.com/media/catalog/product/cache/6e8e24cc73e2eff11526e72b5f24c033/b/a/babolat-propulse-blast-all-court-tennis-shoes-cherry-white.jpg" alt="" className="product-picture" />
            </div>
            <br />
            <br />
            <div className="product-info">
            <h4 className="product-img-info1">Babolat propulse blast all court tennis shoes cherry white</h4>
              <h4 className="product-img-price1">6700 den</h4>
            </div>
          </article>
          <article className="product-img">
            <div className="product-img-container1">
              <img src="https://cdnmedia.racquets4u.com/media/catalog/product/cache/6e8e24cc73e2eff11526e72b5f24c033/b/a/babolat-propulse-blast-all-court-tennis-shoes-cherry-white.jpg" alt="" className="product-picture" />
            </div>
            <br />
            <br />
            <div className="product-info">
            <h4 className="product-img-info1">Babolat propulse blast all court tennis shoes cherry white</h4>
              <h4 className="product-img-price1">6700 den</h4>
            </div>
          </article>
        </div>
      </section></>
  )
}

export default Home