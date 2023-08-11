import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import LayoutDashboardStarter from "./LayoutDashboardStarter";

const meta = {
  title: "Layout/Dashboard/Starter",
  component: LayoutDashboardStarter,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LayoutDashboardStarter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => <LayoutDashboardStarter />,
};
