import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import NavSidebarDashboard2 from "./NavSidebarDashboard2";

const meta = {
  title: "Nav/Sidebar/Dashboard2",
  component: NavSidebarDashboard2,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof NavSidebarDashboard2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dashboard2: Story = {
  render: () => (
    <div style={{ width: 300, maxWidth: "100%" }}>
      <NavSidebarDashboard2 />
    </div>
  ),
};
