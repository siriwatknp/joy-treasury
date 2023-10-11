import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import LayoutDashboardCurve from "./LayoutDashboardCurve";

const meta = {
  title: "Layout/Dashboard/Curve",
  component: LayoutDashboardCurve,
  parameters: {
    layout: "fullscreen",
    githubUsername: "siriwatknp",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof LayoutDashboardCurve>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Curve: Story = {
  render: () => <LayoutDashboardCurve />,
};
