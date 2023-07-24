import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CardDashboardCompany from "./CardDashboardCompany";

const meta = {
  title: "Card/Dashboard/Company",
  component: CardDashboardCompany,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardDashboardCompany>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => (
    <div style={{ width: 300, maxWidth: "100%" }}>
      <CardDashboardCompany />
    </div>
  ),
};


