import React, { Component } from 'react';

// Boostrap Components
import { Container } from 'react-bootstrap';

// Styled Component
import { Content, Flex_container, Card_container, Wrapper } from './Section_two.styles';
import Card from './Card/Card';

// Images
import separator from "../../assets/separator.svg";



function Section_two () {
  return (
    <>
      <Container className='text-center'>
        <Wrapper>
          <Content>
            <p className='subtitle'>FLAVORS FOR ROYALTY</p>
            <figure>
              <img src={ separator } alt='separator' />
            </figure>
            <h2 className='title'>We Offer <span style={ { color: "var(--dark-orange)" } }>Top Notch</span></h2>
            <p className='text' style={ { color: "var(--sonic-silver)" } }>
              Beyond the sustenance it provides, food is a connector, bringing people together 
              in shared moments of joy and camaraderie. Whether it's a family dinner, a gathering of friends,
              or a romantic evening, the act of sharing a meal becomes a ritual that strengthens bonds and creates
               lastings memories.
              Supper delicious Burger in town!
            </p>
          </Content>
          <Card_container>
            <Flex_container>
              <Card />
              <Card />
              <Card />
              <Card />
            </Flex_container>
          </Card_container>
        </Wrapper>
      </Container>
    </>
  );
}

export default Section_two;