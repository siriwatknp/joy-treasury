import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardNewsPlane from "./CardNewsPlane";

const meta = {
  title: "Card/News/Plane",
  component: CardNewsPlane,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardNewsPlane>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => (
    <div style={{ width: 300, maxWidth: "100%" }}>
      <CardNewsPlane />
    </div>
  ),
};
