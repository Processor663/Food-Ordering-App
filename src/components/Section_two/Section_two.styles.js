import styled from "styled-components";




const Wrapper = styled.div`
    padding: 5em 0 5em;
`;

const Content = styled.div`
    margin: auto;
    padding: 0em 0 3em;

    .title {
        font-family: var(--fontFamily-forum);
        font-weight: var(--fw-600);
    }


    .subtitle {
        color: #ff0000;
        font-weight: bold;
        letter-spacing: 0.2rem;
    }

    img {
        max-width: 100%
    }

    figure {
        margin: 0 auto;
        width: 10.25rem;
        margin-bottom: 1.2rem;
    }

    @media screen and (min-width:1025px) {
        width: 90%;
    }

     @media screen and (max-width:998px) {
        padding: 0em 0 2em;


    }

`;

const Card_container = styled.div`
    overflow-x: auto;
`;


const Flex_container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0.8rem;

`;


export { Wrapper, Content, Flex_container, Card_container };