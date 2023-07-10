import type { Meta, StoryObj } from "@storybook/react";
import Button from "./";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "UI/Button",
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["red", "black", "blue", "green", "white"],
    },
    color: {
      control: { type: "radio" },
      options: ["white", "black"],
    },
    size: {
      control: { type: "select" },
      options: ["100px", "150px", "200px", "100%"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: "white",
    color: "black",
    children: "Click me",
  },
};
