import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import LayoutDashboardCurve from "./LayoutDashboardCurve";

const meta = {
  title: "Layout/Dashboard/Curve",
  component: LayoutDashboardCurve,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LayoutDashboardCurve>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => <LayoutDashboardCurve />,
};
