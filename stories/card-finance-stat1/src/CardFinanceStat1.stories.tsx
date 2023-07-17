import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CardFinanceStat1 from "./CardFinanceStat1";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Card/Finance/Stat1",
  component: CardFinanceStat1,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardFinanceStat1>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Stat1: Story = {
  render: () => (
    <div style={{ width: 300, maxWidth: "100%" }}>
      <CardFinanceStat1 />
    </div>
  ),
};
