import styled from 'styled-components';

export const AboutInfoSection = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    align-items: left;
    gap: 8px;
`;

export const AboutInfoText = styled.div`
    text-align: justify;
    color: rgba(116, 116, 118, 1);
    font-size: 16px;
    line-height: 19.09px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Heading = styled.h4`
    color: #1677ff;
    font-size: 16px;
    line-height: 19.09px;
    font-weight: 700;
    text-align: left;
`;

export const AboutTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 80%; 
    max-width: 480px;
    text-align: left;
    line-height: 42px;
`;

export const TableItem = styled.div`
    margin: 2px;
    padding: 5px;
    text-align: left;
`;

export const TableKey = styled.div`
    color: rgba(23, 23, 27, 1);
    font-weight: 700;
    min-width: 120px;
`;

export const TableValue = styled.div`
    color: rgba(116, 116, 118, 1);
`;

export const AboutImg = styled.img`
    margin-left: 10px;
`;

export const Gender = styled.div`
    display: flex;
    gap: 6px;
`;

export const MaleGender = styled.div`
    color: #1677ff;
`;

export const FemaleGender = styled.div`
    color: rgb(237, 110, 199);
`;
