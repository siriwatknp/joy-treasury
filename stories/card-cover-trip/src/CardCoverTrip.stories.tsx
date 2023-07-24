import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CardCoverTrip from "./CardCoverTrip";

const meta = {
  title: "Card/Cover/Trip",
  component: CardCoverTrip,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardCoverTrip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => (
    <div style={{ width: 300, maxWidth: "100%" }}>
      <CardCoverTrip />
    </div>
  ),
};


