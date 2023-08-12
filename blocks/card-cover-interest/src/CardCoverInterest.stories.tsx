import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardCoverInterest from "./CardCoverInterest";

const meta = {
  title: "Card/Cover/Interest",
  component: CardCoverInterest,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardCoverInterest>;

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
      <CardCoverInterest />
    </div>
  ),
};
