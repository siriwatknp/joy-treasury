import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardAppleEssentials from "./CardAppleEssentials";

const meta = {
  title: "Card/Apple/Essentials",
  component: CardAppleEssentials,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardAppleEssentials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => (
    <div style={{ width: 360, maxWidth: "100%" }}>
      <CardAppleEssentials />
    </div>
  ),
};
