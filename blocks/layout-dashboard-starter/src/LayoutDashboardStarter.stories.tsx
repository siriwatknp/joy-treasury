import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import LayoutDashboardStarter from "./LayoutDashboardStarter";

const meta = {
  title: "Layout/Dashboard/Starter",
  component: LayoutDashboardStarter,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof LayoutDashboardStarter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Starter: Story = {
  render: () => <LayoutDashboardStarter />,
};
