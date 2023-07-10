import type { Meta, StoryObj } from "@storybook/react";

import Input from ".";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "UI/Input",
  argTypes: {
    placeholder: {
      control: { type: "radio" },
      options: ["Логин", "Пароль"],
    },
    type: {
      control: { type: "radio" },
      options: ["email", "password"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    placeholder: "Пароль",
    type: "password",
  },
};
