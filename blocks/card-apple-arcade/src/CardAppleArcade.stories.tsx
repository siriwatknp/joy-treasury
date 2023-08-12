import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardAppleArcade from "./CardAppleArcade";

const meta = {
  title: "Card/Apple/Arcade",
  component: CardAppleArcade,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardAppleArcade>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => (
    <div
      style={{
        width: 400,
        padding: 20,
        maxWidth: "100%",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <CardAppleArcade />
    </div>
  ),
};
