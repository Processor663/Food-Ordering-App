import React, { Component } from 'react';

// Styled Components
import { Hero_Bg, Hero_Bg_Shape, Hero_Content } from './Hero.styles';

// Bootstrap Components
import { Container } from 'react-bootstrap';

// Vanilla CSS
import Button from "../Button/Button";

// Images
import heroBurger from "../../assets/hero-burger.png";
import heroBanner from "../../assets/hero-banner-bg.png";



const Hero = () => {
  return (
    <>
      <Hero_Bg>
        <Hero_Bg_Shape>
          <Container className='container'>
            <Hero_Content>
              <p className='hero-substitle'>
                Eat Sleep And
              </p>
              <h2 className='hero-title'>
                Supper delicious <br /> Burger in town!
              </h2>
              <p className='hero-text'>
                Food is any substance consumed to provide nutritional <br />support for an organism.
              </p>
              <div>
                <Button >Reservation</Button>
              </div>
            </Hero_Content>
            <figure className='image-wrapper'>
              <img src={ heroBurger } alt='Burger' className='img-one' />
              <img src={ heroBanner } alt='Burger' className='img-two' />
            </figure>
          </Container>


        </Hero_Bg_Shape>
      </Hero_Bg>

    </>
  );
};

export default Hero;