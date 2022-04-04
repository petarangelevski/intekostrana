import React from 'react';
import ListItem from './ListItem';
import './styles.css'


const List = ({ list }) => {
  return (
    <div className='list-wrap'>
      {list.map((item) => (
        <ListItem key={item.sport_equipment_id} item={item} />
      ))}
    </div>
  )
}

export default List