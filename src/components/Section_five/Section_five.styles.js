import styled from "styled-components";

// Images
import shape_white from "../../assets/shape-white.png";
import hero_bg from "../../assets/hero-bg.jpg";



const Shape_white = styled.div`
    width: 100%;
    padding: 0.5em;
    background-image: url(${ shape_white });
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #790C11;

   
`;

const Wrapper = styled.div`
    padding: 5em  0;
    position: relative;
    background-color: var(--white);
    

`;

const Flex_container = styled.div`
    text-align: center;

    .title {
        letter-spacing: -2px;
        margin-bottom: 1em;
        font-weight: var(--fw-600);
        line-height: 1.3;
    }

    .content {
        margin-bottom: 2em;
    }

     figure {
        position: relative;
        // overflow: hidden;

        @media screen and (max-width: 998px) {
            margin-top: 2.5em;
        }
    }

    figure img {
        max-width: 100%; 
    }

     .sale-shape {
        top: 0%;
        left: 0%;
        position: absolute;
    }

    // sale-shape Animation
    .scale-up-anim { animation: scaleUp 1s linear infinite alternate; }

    @keyframes scaleUp {
        0% { transform: scale(1);}
        100% { transform: scale(1.05); }
    }

    @media screen and (min-width: 998px) {
        display: flex;
        justify-content: space-between;
        text-align: left;


          > div {
            width: 50%;
            padding-top:3em;
        }

        figure {
            width: 50%;
        }
    }
    
`;


export { Wrapper, Shape_white, Flex_container };
