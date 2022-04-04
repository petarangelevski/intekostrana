import React from 'react';
import './styles.css';

const ListItem = ({
  item: { sport_equipment_id, equipment_brand_id, category_id, description, price, status, brand, type, image_path }
}) => {
  return (
    <div className='listItem-wrap'>
      <img src={image_path} alt="product_image" />
      <div className="split_wrap">
      <div className='split'/>
      <div className='split__button_s' />
      <div className='split__button_ss' />
      <div className='split__button_sss' />
      </div>
      <header>
        <h4>{brand}</h4>
        <span>{type}</span>
      </header>
      <footer>
        <p>
          {description}
        </p>
        <p>{price} den.</p>
        <p>{status}</p>
      </footer>
    </div>
  )
}

export default ListItem