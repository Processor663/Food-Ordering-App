import styled from "styled-components";



const Promo_card = styled.div`
    width: 24%;
    padding: 0.2em 0.2em;
    position: relative;
    z-index: 1;
    text-align: center;
    box-shadow: var(--shadow-2);
    cursor: pointer;
    background-color: var(--white);
    color: var(--sonic-silver);


    &:hover {
        color:var(--white) !important;

        h4 {
            color:var(--white) !important;
        }

        .card-shape {
            transform: scaleY(1);
            clip-path: var(--clip-path-2);
        }

        .font {
            color:var(--white) !important;
        }
    }

    .font {
        color: var(--dark-orange);
        font-size: 5rem;
        margin: 1rem 0rem;
    }

    .card-shape {
        position: absolute;
        inset: 0;
        background-color: var(--deep-saffron);
        clip-path: var(--clip-path-1);
        transform: scaleY(0.3);
        transform-origin: bottom;
        z-index: -1;
        transition: var(--transition-1);
    }


    figure img {
        max-width: 75%;
    }

    @media screen and (max-width: 998px) {
        min-width: 250px;

        .font {
            font-size: 3rem;
        }

        p {
            font-size: 0.8rem;
        }
    }

}

`;

export { Promo_card };