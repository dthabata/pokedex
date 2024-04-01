import styled from 'styled-components';
import whiteDots from '../../assets/pattern-2.png';
import pokeball from '../../assets/pokeball-2.png';

export const MainWrapper = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    color: #fff;
    padding-bottom: 10px;
`;

export const DetailsHeaderWrapper = styled.section`
    background-color: #8bbe8a;
    padding-top: 2rem;
    padding-bottom: 2rem;
    height: 210px;
`;

export const DetailsHeader = styled.div`
    max-width: 900px;
    margin: 0 auto;
    margin-top: -2rem;
    padding-top: 2rem;
    background: url(${whiteDots}), url(${pokeball}); 
    background-size: 4rem, 12%;
    background-position: top 0px right 32%, top 90% left 32%;
    background-repeat: no-repeat;

    h3 {
        margin-top: 10px;
        margin-bottom: 20px;
    }

    span {
        font-weight: 700;
        font-size: 12px;
        text-align: center;
        margin-bottom: -50px;
        color: rgba(23, 23, 27, 0.6);
    }
`;

export const DetailsInfo = styled.div`
    display: flex !important;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    text-align: center;
    justify-content: center;
    gap: 30px;
`;

export const DetailsImage = styled.div`
    img {
        width: 90%;
        height: 100%;
        max-width: 150px;
        min-width: 50px;
        max-height: 220px;
        min-height: 100px;
        object-fit: contain;
    }
`;

export const DetailsText = styled.div`
    margin-top: 10px;
    font-size: 20px;
`;

export const DetailsBodyWrapper = styled.section`
    max-width: 600px;
    margin: 0 auto;

    @media screen and (min-width:1px) and (max-width:600px) {
        padding-left: 5%;
        padding-right: 5%;
    }
`;

export const Element = styled.div`
    img {
        margin-right: 5px;
    }
`;
