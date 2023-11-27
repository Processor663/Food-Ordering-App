import React from 'react';

// Styled Components
import { Flex_container, Shape_white, Wrapper } from './Section_three.styles';
import { Container } from 'react-bootstrap';
import Button from '../Button/Button';

// Images
import about_banner from "../../assets/about-banner.png";
import sale_shape_red from "../../assets/sale-shape-red.png";
import List_item from './List_item/List_item';




function Section_three () {
    return (
        <>
            <Shape_white />
            <Wrapper>
                <Container>
                    <Flex_container>
                        <figure>
                            <img src={ about_banner } alt='image' />
                            <img src={ sale_shape_red } alt='image' className='sale-shape-red scale-up-anim' />
                        </figure>
                        <div>
                            <h1 className='title'>Caferio, Burgers, <br /> and Best Pizzas
                                <span style={ { color: "var(--dark-orange)" } }> in Town!</span>
                            </h1>
                            <p className='text'>
                                Embark on a culinary odyssey starting with Cafe Rio, where Mexican-inspired
                                dishes redefined freshness. 

                                Transition to the burger haven, where classics and gourmet creations unite.

                                Conclude your journey with artisanal pizzas, where handcrafted crusts meet
                                creative toppings. 

                            </p>
                            <div className='list'>
                                <List_item>Delicious & Healthy Foods</List_item>
                                <List_item>Fastest Food Home Delivery</List_item>
                                <List_item>Spacific Family And Kids Zone</List_item>
                                <List_item>Music & Other Facilities</List_item>
                            </div>
                            <Button>Order Now</Button>

                        </div>
                    </Flex_container>
                </Container>
            </Wrapper>
        </>
    );
}

export default Section_three;