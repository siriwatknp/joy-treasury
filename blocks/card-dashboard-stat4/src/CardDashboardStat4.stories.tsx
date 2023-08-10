import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardDashboardStat4 from "./CardDashboardStat4";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Card/Dashboard/Stat4",
  component: CardDashboardStat4,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardDashboardStat4>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Block: Story = {
  render: () => (
    <div style={{ width: 300, maxWidth: "100%" }}>
      <CardDashboardStat4 />
    </div>
  ),
};
