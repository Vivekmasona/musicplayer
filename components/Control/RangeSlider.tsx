import * as React from "react";
import Slider from "@mui/material/Slider";
import { SliderUnstyledOwnProps } from "@mui/base";
import { styled } from "@mui/material/styles";

function valuetext(value: number) {
    return `${value} seconds`;
}

const MySlider = styled(Slider)({
    color: "#52af77",
    height: 8,
    "& .MuiSlider-track": {
        border: "none",
        backgroundColor: "var(--theme)",
    },
    "& .MuiSlider-rail": {
        opacity: 0.4,
        height: 5,
        backgroundColor: "var(--color)",
    },
    "& .MuiSlider-thumb": {
        backgroundColor: "#00ffb8",
    },
}) as typeof Slider;

const minDistance = 2;

export default function RangeSlider({
    value,
    onChange,
    ...rest
}: SliderUnstyledOwnProps) {
    return (
        <MySlider
            getAriaLabel={() => "Track of playing music"}
            value={value}
            onChange={onChange}
            getAriaValueText={valuetext}
            disableSwap
            {...rest}
        />
    );
}
