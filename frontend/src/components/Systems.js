/* eslint-disable react-hooks/exhaustive-deps */
import "./Systems.css";
import { itemss } from './data';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Systems = () => {

  return (
    <>
        <h1 className="systemsHeader">All the products</h1>
        <section class='prod-list'>
        {itemss.map((item, key) => {
            return (
                <div class='column' key={key}>
                <div class='img'>
                    <img class='picture' src={item.image} alt='img' />
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
    </section></>
  )
}

export default Systems