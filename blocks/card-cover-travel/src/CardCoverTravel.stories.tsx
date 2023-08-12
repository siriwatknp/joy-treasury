import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardCoverTravel from "./CardCoverTravel";

const meta = {
  title: "Card/Cover/Travel",
  component: CardCoverTravel,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardCoverTravel>;

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
      <CardCoverTravel />
    </div>
  ),
};
