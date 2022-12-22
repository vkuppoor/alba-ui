import React from "react";
import "./Button.css";

export interface Props<as extends React.ElementType> {
    label?: string;
    color?:
        | "primary"
        | "secondary"
        | "success"
        | "warning"
        | "danger"
        | "info"
        | "light"
        | "dark";
    isDisabled?: boolean;
    as?: as;
}

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    color?:
        | "primary"
        | "secondary"
        | "success"
        | "warning"
        | "danger"
        | "info"
        | "light"
        | "dark";
    isDisabled?: boolean;
}

const COLORS = [
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark",
];

const Button = ({
    children,
    color = "primary",
    label,
    isDisabled = false,
    ...props
}: Props | InputProps) => {
    const checkColor = COLORS.includes(color) ? color : COLORS[0];

    return (
        <button
            // className={`${"primary"}
            //     ${color === "secondary" && "secondary"}
            //     ${color === "success" && "success"}
            //     ${color === "warning" && "warning"}
            //     ${color === "danger" && "danger"}
            //     ${color === "info" && "info"}
            //     ${color === "light" && "light"}
            //     ${color === "dark" && "dark"}
            // `}
            className={checkColor}
        >
            {label}
        </button>
    );
};

export default Button;
