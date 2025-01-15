import { theme } from "./Theme";

type FontPropType = {
    family?: string;
    weight?: number;
    color?: string;
    lineHeight?: number;
    Fmin?: number;
    Fmax?: number;
};

export const font = ({
    family,
    weight,
    color,
    lineHeight,
    Fmin,
    Fmax,
}: FontPropType) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`;
