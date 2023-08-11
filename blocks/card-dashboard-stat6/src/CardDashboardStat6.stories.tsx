import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardDashboardStat6 from "./CardDashboardStat6";

const meta = {
  title: "Card/Dashboard/Stat6",
  component: CardDashboardStat6,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardDashboardStat6>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => <CardDashboardStat6 />,
};
