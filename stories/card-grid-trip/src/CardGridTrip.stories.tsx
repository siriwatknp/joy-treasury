import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CardGridTrip from "./CardGridTrip";

const meta = {
  title: "Card/Grid/Trip",
  component: CardGridTrip,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardGridTrip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => (
    <div style={{ width: 300, maxWidth: "100%" }}>
      <CardGridTrip />
    </div>
  ),
};


