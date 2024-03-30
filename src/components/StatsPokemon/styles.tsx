import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    align-items: left;
`;

export const StyledH4 = styled.h4`
    color: #1677ff;
    font-size: 16px;
    line-height: 19.09px;
    font-weight: 700;
    text-align: left;
    justify-content: center;
    text-align: justify;
    margin-top: 10px;
`;

export const StyledText = styled.div`
    text-align: justify;
    color: rgba(116, 116, 118, 1);
    font-size: 16px;
    line-height: 19.09px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const StyledContent = styled.div`
    text-align: justify;
    color: rgba(116, 116, 118, 1);
    font-size: 16px;
    line-height: 19.09px;
`;

export const StyledSkills = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: auto;
    gap: 2px 10px;
    margin-top: 15px;
    align-self: self-start;
    max-width: 50%;

    .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const StyledImage = styled.img`
    margin-top: 20px;
    justify-self: center;
`;

export const StyledNumbers = styled.p`
    padding-left: 7px;
    justify-self: center;
`;
