import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardDashboardStat6 from "./CardDashboardStat6";

const meta = {
  title: "Card/Dashboard/Stat6",
  component: CardDashboardStat6,
  parameters: {
    layout: "padded",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardDashboardStat6>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stat6: Story = {
  render: () => <CardDashboardStat6 />,
};
