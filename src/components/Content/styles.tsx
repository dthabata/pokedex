import styled from 'styled-components';
import { Input, Layout } from 'antd';

const { Search } = Input;
const { Content } = Layout;

export const StyledContent = styled(Content)`
    background-color: #fff !important;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 30px;
`;

export const StyledSearch = styled(Search)`
    background-color: #fff;
    line-height: 80px;
    color: #fff;
`;

export const StyledMain = styled.main`
    background-color: #fff;
`;

export const StyledSection = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 2rem 2rem;
    background-color: #fff;
    padding-top: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    justify-content: center;
`;

export const StyledCard = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, min-content);
    row-gap: 20px;
    border-radius: 1rem;
    padding: 2rem;
    cursor: pointer;
    background-color: #8bbe8a;
    color: #fff;
    box-shadow: 10px 10px 20px rgba(43, 48, 43, 0.26);
    background-image: url(${require('../../assets/pattern.png')}),
        url(${require('../../assets/pokeball.png')});
    background-size: 5rem, 30%;
    background-position: top 12px right 12px, bottom 10px left 10px;
    background-repeat: no-repeat;

    &:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease;
    }
`;

export const StyledSpan = styled.span`
    font-weight: 700;
    font-size: 12px;
    text-align: center;
    margin-bottom: -50px;
    color: rgba(23, 23, 27, 0.6);
`;

export const StyledH3 = styled.h3`
    font-size: 26px;
    margin-bottom: 5px;
    text-align: center;
    margin-bottom: -10px;
    margin-top: -5px;
`;

export const StyledElement = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    min-width: 20%;
    gap: 8px;
`;

export const StyledPokemon = styled.img`
    width: 100%;
    height: auto;
    max-width: 200px;
    min-width: 100px;
    max-height: 220px;
    min-height: 100px;
    object-fit: contain;
    justify-self: center;
`;
