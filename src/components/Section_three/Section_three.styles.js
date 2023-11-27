import styled from "styled-components";

// Images
import shape_white from "../../assets/shape-white.png";





const Shape_white = styled.div`
    padding-top: 1em;
    background-image: url(${ shape_white });
    background-repeat: no-repeat;
    background-size: cover;
`;

const Wrapper = styled.div`
    padding: 5em 0;
    background-color: var(--white);

`;

const Flex_container = styled.div`
    text-align: center;

    .title {
        letter-spacing: -2px;
        margin-bottom: 1em;
        font-weight: var(--fw-600);
        line-height: 1.5;
    }
    
    > div .text {
        color: var(--sonic-silver);
    }

    figure {
        position: relative;
        margin-bottom: 2.5em;
    }

    figure img {
        width: 100%;  
    }

    .sale-shape-red {
        width: 13.5rem;
        top: 0%;
        left: 10%;
        position: absolute;
    }

    // sale-shape-red Animation
    .scale-up-anim { animation: scaleUp 1s linear infinite alternate; }

    @keyframes scaleUp {
        0% { transform: scale(1);}
        100% { transform: scale(1.05); }
    }

    .list {
        margin: 1em 0em;
    }

    @media screen and (min-width: 769px) {
        display: flex;
        justify-content: space-between;
        text-align: left;


            > div {
            width: 48%;
        }

        figure {
            position: relative;
            min-width: 45%;
        }

    }

`;


export { Wrapper, Shape_white, Flex_container };