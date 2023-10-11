import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import NavSidebarDashboard from "./NavSidebarDashboard";

const meta = {
  title: "Nav/Sidebar/Dashboard",
  component: NavSidebarDashboard,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof NavSidebarDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  render: () => (
    <div style={{ width: 300, maxWidth: "100%" }}>
      <NavSidebarDashboard />
    </div>
  ),
};
