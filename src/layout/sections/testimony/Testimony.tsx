import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "../skills/Skills_Styles";

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony id={"testimony"}>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={"Testimony"} />
                    </S.IconWrapper>
                    <Slider />
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    background-color: #fdd786;
    min-height: 50vh;

    ${S.IconWrapper} {
        margin: 40px 0 72px;
    }
`;
