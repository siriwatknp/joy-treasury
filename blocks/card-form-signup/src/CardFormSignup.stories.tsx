import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardFormSignup from "./CardFormSignup";

const meta = {
  title: "Card/Form/Signup",
  component: CardFormSignup,
  parameters: {
    layout: "centered",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardFormSignup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Signup: Story = {
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
