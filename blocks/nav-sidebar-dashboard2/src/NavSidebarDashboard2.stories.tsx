import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import NavSidebarDashboard2 from "./NavSidebarDashboard2";

const meta = {
  title: "Nav/Sidebar/Dashboard2",
  component: NavSidebarDashboard2,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NavSidebarDashboard2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => (
    <div style={{ width: 300, maxWidth: "100%" }}>
      <NavSidebarDashboard2 />
    </div>
  ),
};


