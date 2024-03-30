import React from 'react';
import {
    StyledSection,
    StyledH4,
    StyledText,
    StyledContent,
    StyledSkills,
    StyledImage,
    StyledNumbers,
} from './styles';
import { Flex, Progress } from 'antd';
import badge1 from '../../assets/badge-1.png';

const StatsPokemon: React.FC = () => {
    return (
        <StyledSection className="stats-info">
            <StyledH4>Base Stats</StyledH4>
            <div className="stats-progress">
                <Flex gap="small" vertical>
                    <Progress percent={30} />
                    <Progress percent={50} status="active" />
                    <Progress percent={70} status="exception" />
                    <Progress percent={100} />
                    <Progress percent={50} showInfo={false} />
                </Flex>
            </div>
            <StyledText>
                The ranges shown on the right are for a level 100 pokemon. Maximum values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values are based on a hindering nature, 0 EVs, 0 IVs.
            </StyledText>
            <StyledH4>Type Defenses</StyledH4>
            <StyledContent>
                The effectiveness of each type on Bulbasaur.
            </StyledContent>
            <StyledSkills>
                {[...Array(18)].map((_, index) => (
                    <React.Fragment key={index}>
                        <StyledImage className="stats-img" src={badge1} alt="" />
                        <StyledNumbers className="random-numbers">{Math.floor(Math.random() * 6)}</StyledNumbers>
                    </React.Fragment>
                ))}
            </StyledSkills>
        </StyledSection>
    );
}

export default StatsPokemon;
