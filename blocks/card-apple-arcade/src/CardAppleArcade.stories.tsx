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
    <div style={{ width: 360, maxWidth: "100%" }}>
      <CardAppleArcade />
    </div>
  ),
};
