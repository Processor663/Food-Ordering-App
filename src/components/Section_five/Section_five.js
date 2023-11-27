import React from 'react';

// Styled Components
import { Wrapper, Shape_white, Flex_container, } from './Section_five.styles';
import Button from '../Button/Button';

// Boostrap Components
import { Container } from 'react-bootstrap';

// Images
import sale_shape from "../../assets/sale-shape.png"
import cta_banner from "../../assets/cta-banner.png"
import delivery_boy from "../../assets/delivery-boy.svg"
import delivery_banner_bg from "../../assets/delivery-banner-bg.png"




const Section_five = () => {
    return (
        <>
            <Shape_white />
            <Wrapper>
                <Container>
                    <Flex_container>                      
                        <div>
                            <h1 className='title'>A Moments Of <br /> Delivered On <br />
                                <span style={ { color: "var(--dark-orange)" } }> Right Time </span> & Place
                            </h1>
                            <p className='content'>
                                The restaurants in Hangzhou also catered to many northern Chinese 
                                who had fled south from Kaifeng during the Jurchen invasion of the 1120s,
                                 while it is also known that many restaurants were run by families
                            </p>
                            <Button>Order Now</Button>
                        </div>
                        <figure>
                            <img src={ delivery_banner_bg } alt='image' className='scale-up-anim' />
                            <img src={ delivery_boy } alt='image' className='sale-shape ' />
                        </figure>
                    </Flex_container>
                </Container>
            </Wrapper>
        </>
    );
};

export default Section_five;