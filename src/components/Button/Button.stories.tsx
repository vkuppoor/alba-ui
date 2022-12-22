import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    color: "primary",
    label: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: "secondary",
    label: "Secondary",
};

export const Success = Template.bind({});
Success.args = {
    color: "success",
    label: "Success",
};

export const Warning = Template.bind({});
Warning.args = {
    color: "warning",
    label: "Warning",
};

export const Danger = Template.bind({});
Danger.args = {
    color: "danger",
    label: "Danger",
};

export const Info = Template.bind({});
Info.args = {
    color: "info",
    label: "Info",
};

export const Light = Template.bind({});
Light.args = {
    color: "light",
    label: "Light",
};

export const Dark = Template.bind({});
Dark.args = {
    color: "dark",
    label: "Dark",
};
