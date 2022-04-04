import React from 'react'

const Posts = ({ items }) => {

  return (
    <section className='prod-list'>
        {items.map((item, key) => {
        return (
            <div className='column' key={key}>
            <div className='img'>
                <img className='picture' src={item.image} alt='img' />
                <strong style={{fontSize: '13px'}}>{item.name}</strong>
                <p>{item.desc}</p>
                <div>
                <a href={item.link}>Find out more</a>
                </div>
            </div>
        </div>
        )
    }
    )}
    </section>
    
  )
}

export default Posts