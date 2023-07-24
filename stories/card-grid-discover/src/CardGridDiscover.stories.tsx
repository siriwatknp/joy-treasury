import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CardGridDiscover from "./CardGridDiscover";

const meta = {
  title: "Card/Grid/Discover",
  component: CardGridDiscover,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardGridDiscover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => (
    <div style={{ width: 400, maxWidth: "100%" }}>
      <CardGridDiscover />
    </div>
  ),
};
