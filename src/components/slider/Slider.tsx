import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./../../styles/slider.css";
import { S } from "./Slyder_Styles";

type SlidePropsType = {
    text: string;
    userName: string;
};

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slyde>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.userName}</S.Name>
        </S.Slyde>
    );
};

const items = [
    <Slide
        userName={"Fyodor Dostoevsky"}
        text={"Life is suffocating without purpose"}
    />,
    <Slide
        userName={"Albert Einstein"}
        text={
            "Logic can take you from point A to point B, and imagination can take you anywhere"
        }
    />,
    <Slide
        userName={"Frank Sinatra"}
        text={"The best revenge is a huge success"}
    />,
    <Slide
        userName={"Latin proverb"}
        text={"If there is no wind, take the oars"}
    />,
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel mouseTracking items={items} />
    </S.Slider>
);
