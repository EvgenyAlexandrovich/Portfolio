import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Skills = styled.section`
    position: relative;
`;

const Skill = styled.div`
    width: 330px;
    flex-grow: 1;
    padding: 62px 20px 40px;

    @media ${theme.media.mobile} {
        padding: 62px 0px 40px;
    }
`;

const IconWrapper = styled.div`
    position: relative;
    color: ${theme.colors.accent};

    &::before {
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg) translateX(-50%) translateY(-50%);

        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`;

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`;

const SkillText = styled.p`
    text-align: center;
`;

export const S = {
    Skills,
    Skill,
    IconWrapper,
    SkillTitle,
    SkillText,
};
