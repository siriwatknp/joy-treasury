import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import LayoutGridPosts3 from "./LayoutGridPosts3";

const meta = {
  title: "Layout/Grid/Posts3",
  component: LayoutGridPosts3,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof LayoutGridPosts3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => (
    <LayoutGridPosts3>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          style={{
            backgroundColor: "gainsboro",
            minHeight: "256px",
          }}
        />
      ))}
    </LayoutGridPosts3>
  ),
};
