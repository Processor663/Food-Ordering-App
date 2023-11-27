import React from 'react';

// Styled Components
import { Wrapper, Shape_white, Flex_container, } from './Section_four.styles';
import Button from '../Button/Button';

// Boostrap Components
import { Container } from 'react-bootstrap';

// Images
import sale_shape from "../../assets/sale-shape.png"
import cta_banner from "../../assets/cta-banner.png"


const Section_four = () => {
    return (
        <>
            <Wrapper>
                <Shape_white />
                <Container>
                    <Flex_container>                      
                        <div>
                            <h1 className='title'>Mi-Foodie Have <br /> Excellent Of  <br />
                                <span style={ { color: "var(--dark-orange)" } }> Quality Burgers!</span>
                            </h1>
                            <p className='content'>
                                Embark on a culinary odyssey starting with Cafe Rio, where Mexican-inspired
                                dishes redefined freshness.

                                Transition to the burger haven, where classics and gourmet creations unite.

                                Conclude your journey with artisanal pizzas, where handcrafted crusts meet
                                creative toppings.

                            </p>
                            <Button>Order Now</Button>
                        </div>
                        <figure>
                            <img src={ cta_banner } alt='image' />
                            <img src={ sale_shape } alt='image' className='sale-shape scale-up-anim' />
                        </figure>
                    </Flex_container>
                </Container>
                <Shape_white />
            </Wrapper>
        </>
    );
};

export default Section_four;