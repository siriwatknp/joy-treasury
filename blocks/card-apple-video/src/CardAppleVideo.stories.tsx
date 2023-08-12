import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardAppleVideo from "./CardAppleVideo";

const meta = {
  title: "Card/Apple/Video",
  component: CardAppleVideo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardAppleVideo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => (
    <div
      style={{
        width: 360,
        padding: 20,
        maxWidth: "100%",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <CardAppleVideo />
    </div>
  ),
};
