import React from 'react'

const Posts = ({ items }) => {

  return (
    <section className='products'>
      <div className='products_panelList-wrap'>
        <div className='products_list-wrap'>
          <div className='list-wrap'>
        {items.map((item, key) => {
        return (
        <div className='listItem-wrap' key={key}>
            
                <img className='product_image' src={item.image} alt='img' />
                    <div className="split_wrap">
                      <div className='split' />
                      <div className='split__button_s' />
                      <div className='split__button_ss' />
                      <div className='split__button_sss' />
                    </div>
                <header>
                <h4>{item.name}</h4>
                <span>{item.desc}</span>
                </header>
                <footer>
                <a href={item.link}>Find out more</a>
                </footer>
            
        </div>
        )
    }
    )}
    </div>
    </div>
    </div>
    </section>
    
  )
}

export default Posts