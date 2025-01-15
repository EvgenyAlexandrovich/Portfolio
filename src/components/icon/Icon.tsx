import React from "react";
import iconSprite from "../../assets/image/icon-sprite.svg";

type IconPropsType = {
    width?: string;
    height?: string;
    viewBox?: string;
    iconId: string;
    color?: string;
};

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <svg
            width={props.width || "50"}
            height={props.height || "50"}
            viewBox={props.viewBox || "0 0 50 50"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <use xlinkHref={`${iconSprite}#${props.iconId}`} />
        </svg>
    );
};
