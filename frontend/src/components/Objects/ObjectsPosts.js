import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'

const ObjectsPosts = ({ items }) => {
    const [first, setFirst] = useState([])
    
    useEffect(() => {
        Axios.get("http://localhost:3001/api/objects")
        .then((response) => {
            setFirst(response.data)
        })
    }, [])
    
  return (
    <section className='prod-list'>
        {first.map((item, key) => {
        return (
            <div className='column' key={key}>
            <div className='img'>
                <img className='picture' src={item.image} alt='img' />
                <strong style={{fontSize: '13px'}}>{item.name}</strong>
                <p>{item.desc}</p>
                
            </div>
        </div>
        )
    }
    )}
    </section>
    
  )
}

export default ObjectsPosts;