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
    <div style={{ width: 400, maxWidth: "100%" }}>
      <CardFormSignup />
    </div>
  ),
};
