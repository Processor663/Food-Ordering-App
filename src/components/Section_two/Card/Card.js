import React from 'react';

//Styled Components
import {Promo_card} from './Card.styles'

// Images 
import promo_1 from '../../../assets/promo-1.png';

// Icons
import { FaPizzaSlice } from "react-icons/fa6";



function Card () {
  return (
    <>
      <Promo_card>
        <FaPizzaSlice className='font'/>
        <h4 style={{color: "#000000"}}>Soft drinks</h4>
        <p>Food is any substance consumed to provide nutritional support for an organism.</p>
        <figure>
          <img src={ promo_1 } alt='image' />
        </figure>
        <div className='card-shape'></div>
      </Promo_card>
    </>
  );
}

export default Card;