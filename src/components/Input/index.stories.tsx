import type { Meta, StoryObj } from "@storybook/react";
import Component from ".";

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Primary: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email address",
    id: "email",
    type: "email",
  },
};
