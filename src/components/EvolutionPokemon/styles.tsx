import styled from 'styled-components';

export const StyledSection = styled.section`
    .evolution-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 10px;
    }

    h4 {
        color: #1677ff;
        font-size: 16px;
        line-height: 19.09px;
        font-weight: 700;
        text-align: left;
        justify-content: center;
        text-align: justify;
        margin-bottom: 20px;
    }

    .pokemon-evolution {
        background-color: rgb(247, 247, 247);
        box-shadow: 10px 10px 20px rgba(43, 48, 43, 0.26);
        padding: 2rem;
        border-radius: 20%;
        width: 100px;
        height: 100px;
        object-fit: cover;
    }

    .grid-item {
        padding: 15px;
    }

    .first-evolution {
        display: flex;
        flex-direction: column;
        gap: 0;
        text-align: center;
    }

    .first-evolution span {
        color: rgba(116, 116, 118, 1);
        font-size: 12px;
        margin-top: 10px;
    }

    .first-evolution p, .evolving-info p {
        color: rgba(23, 23, 27, 1);
        font-size: 16px;
        font-weight: 700;
        margin-top: -2px;
        margin-bottom: -2px;
    }

    .evolving-info {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
        align-items: center;
        gap: 8px;
        margin-top: 40px;
        padding: 30px;
    }

    @media screen and (max-width: 768px) {
        .evolution-grid {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-items: center;
        }

        .pokemon-evolution {
            width: 80px;
            height: 80px;
            align-items: center;
        }

        .evolving-info {
            margin-top: 0;
        }
    }

    @media screen and (max-width: 480px) {
        .evolution-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(50px, 1fr 1fr));
            gap: 10px;
            justify-items: center;
            margin: 0;
            padding-bottom: 10px;
        }
    
        .grid-item {
            width: 100%;
            text-align: center;
            margin-bottom: 0;
            padding: 0;
        }
    
        .pokemon-evolution {
            width: 30px;
            height: 30px;
            padding: 10px;
        }
    
        .evolving-info {
            margin-top: 5px;
        }
    }
`;
