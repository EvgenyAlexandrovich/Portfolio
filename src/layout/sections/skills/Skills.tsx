import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { S } from "./Skills_Styles";
import { Fade } from "react-awesome-reveal";

const skillData = [
    {
        iconId: "html5",
        title: "html5",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "css3",
        title: "css3",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "React",
        title: "React",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "typescript",
        title: "typescript",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "styled components",
        title: "styled components",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
    {
        iconId: "WEB DESIgN",
        title: "WEB DESIgN",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
    },
];

export const Skills = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"center"}>
                    <Fade cascade={true} damping={0.1}>
                        {skillData.map((s, index) => {
                            return (
                                <Skill
                                    iconId={s.iconId}
                                    key={index}
                                    title={s.title}
                                    description={s.description}
                                />
                            );
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};
