import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import LayoutDashboardInset from "./LayoutDashboardInset";

const meta = {
  title: "Layout/Dashboard/Inset",
  component: LayoutDashboardInset,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LayoutDashboardInset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => <LayoutDashboardInset />,
};
