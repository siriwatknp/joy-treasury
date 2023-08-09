import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CardFeaturedRepo from "./CardFeaturedRepo";

const meta = {
  title: "Card/Featured/Repo",
  component: CardFeaturedRepo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardFeaturedRepo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => (
    <div style={{ width: 400, maxWidth: "100%" }}>
      <CardFeaturedRepo />
    </div>
  ),
};
