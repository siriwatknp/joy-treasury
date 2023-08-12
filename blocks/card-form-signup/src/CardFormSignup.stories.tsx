import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardFormSignup from "./CardFormSignup";

const meta = {
  title: "Card/Form/Signup",
  component: CardFormSignup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardFormSignup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => (
    <div
      style={{
        width: 440,
        padding: 20,
        maxWidth: "100%",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <CardFormSignup />
    </div>
  ),
};
