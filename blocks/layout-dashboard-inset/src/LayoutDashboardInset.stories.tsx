import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import LayoutDashboardInset from "./LayoutDashboardInset";

const meta = {
  title: "Layout/Dashboard/Inset",
  component: LayoutDashboardInset,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof LayoutDashboardInset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inset: Story = {
  render: () => <LayoutDashboardInset />,
};
