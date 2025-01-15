import React from "react";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

export const Logo = () => {
    return (
        <LogoStyled
            onClick={() => {
                scroll.scrollToTop();
            }}
        >
            <Icon iconId={"html5"} />
        </LogoStyled>
    );
};

const LogoStyled = styled.a`
    color: ${theme.colors.accent};
    cursor: pointer;
`;
