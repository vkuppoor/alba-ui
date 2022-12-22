import React from "react";
import "./Button.css";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "light" | "dark";
    isDisabled?: boolean;
}
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    color?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "light" | "dark";
    isDisabled?: boolean;
}
declare const Button: ({ children, color, label, isDisabled, ...props }: ButtonProps | InputProps) => JSX.Element;
export default Button;
