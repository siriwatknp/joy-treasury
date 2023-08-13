import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import LayoutGridPosts from "./LayoutGridPosts";

const meta = {
  title: "Layout/Grid/Posts",
  component: LayoutGridPosts,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof LayoutGridPosts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => (
    <LayoutGridPosts>
      {[...Array(3)].map((_, i) => (
        <div style={{ backgroundColor: "gainsboro" }} />
      ))}
    </LayoutGridPosts>
  ),
};
