import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CardDashboardStat5 from "./CardDashboardStat5";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Card/Dashboard/Stat5",
  component: CardDashboardStat5,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardDashboardStat5>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Block: Story = {
  render: () => (
    <div style={{ width: 300, maxWidth: "100%" }}>
      <CardDashboardStat5 />
    </div>
  ),
};
