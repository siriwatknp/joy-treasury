import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import NavSidebarDashboard from "./NavSidebarDashboard";

const meta = {
  title: "Nav/Sidebar/Dashboard",
  component: NavSidebarDashboard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NavSidebarDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => (
    <div style={{ width: 300, maxWidth: "100%" }}>
      <NavSidebarDashboard />
    </div>
  ),
};


