import styled from "styled-components";

// Images
import shape_white from "../../assets/shape-white.png";
import hero_bg from "../../assets/hero-bg.jpg";



const Shape_white = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    padding: 0.5em;
    background-image: url(${ shape_white });
    background-repeat: no-repeat;
    background-size: cover;
    transform: rotate(180deg);

`;

const Wrapper = styled.div`
    padding: 5em 0;
    position: relative;
    background-image: url(${ hero_bg });
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--white);    

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
        color: var(--gainsboro);        
    }

     figure {
        position: relative;
        overflow: hidden;


        @media screen and (max-width: 768px) {
            margin-top: 2.5em;
        }
    }

    figure img {
        max-width: 100%; 
        transform: scale(1.3) translate(20px, 40px);
    }

     .sale-shape {
        width: 13.5rem;
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

    @media screen and (min-width: 769px) {
        display: flex;
        justify-content: space-between;
        text-align: left;


          > div {
            width: 50%;
            margin: 3em 0 3em;
        }

        figure {
            width: 50%;
        }
    }
    
`;


export { Wrapper, Shape_white, Flex_container };
