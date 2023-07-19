import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CardFinanceStat2 from "./CardFinanceStat2";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Card/Finance/Stat2",
  component: CardFinanceStat2,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardFinanceStat2>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Stat1: Story = {
  render: () => (
    <div style={{ width: 300, maxWidth: "100%" }}>
      <CardFinanceStat2 />
    </div>
  ),
};
