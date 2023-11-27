// Styled Component
import styled, { isStyledComponent } from "styled-components";

// Images
import hero_bg from "../../assets/hero-bg.jpg";
import hero_bg_shape from "../../assets/hero-bg-shape.png";



const Hero_Bg = styled.section`
    background-image: url(${ hero_bg });
    background-size: cover;
    background-repeat: no-repeat;

    .container {
        display:flex;
    }
`;

const Hero_Bg_Shape = styled.section`
    padding-top: 8em;
    overflow-x: hidden;

    .hero-substitle {
        color: var(--dark-orange);
        font-family: var(--ff-shadows-into-light);
        font-size: var(--fs-3);
        letter-spacing: 1px;

         @media screen and (max-width:1000px) {
            font-size: var(--fs-5);
        }
    }

    .hero-title {
        font-size: 4rem;
        font-weight: var(--fw-700);
        color: var(--champagne-pink);


        @media screen and (max-width:1050px) {
            font-size: 3rem;
        }

         @media screen and (max-width:998px) {
            font-size: var(--fs-2);
        }
        
    }

    .hero-text {
        font-size: var(--fs-5);
        color: var(--desert-sand);
        margin-bottom: 2em; 

         @media screen and (max-width:1050px) {
            font-size: 1rem;
        }
    }

    .image-wrapper {
        position: relative;
        width: 55%;
    

        img {
            width:100%;
        }

        .img-one {
            position: relative;
            top: 0%;
            left: 8%;
            z-index:100;
        }

        .img-two {
            width: 120%;
            position:absolute;
            bottom: 5%;
            left:5%;
            z-index:10;
        }


         @media screen and (max-width: 768px) {
            display: none;
        }
    }


    @media screen and (min-width: 769px) {
        background-image: url(${ hero_bg_shape });
        background-position-x: left;
        background-size: cover;
        background-repeat: no-repeat;

    }

    
     @media screen and (max-width: 1199px) {
        padding-top: 5em;

         .hero-title {
            font-size: 2.5rem;
        }
    }


     @media screen and (max-width: 768px) {
       text-align: center;
    }
   
`;

const Hero_Content = styled.div`
    width: 55%;
    margin-bottom: 6rem;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export { Hero_Bg, Hero_Bg_Shape, Hero_Content };