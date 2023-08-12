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
    <div
      style={{
        width: 400,
        padding: 20,
        maxWidth: "100%",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <CardAppleEssentials />
    </div>
  ),
};
