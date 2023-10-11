import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardPricingPlan from "./CardPricingPlan";

const meta = {
  title: "Card/Pricing/Plan",
  component: CardPricingPlan,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardPricingPlan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plan: Story = {
  render: () => (
    <div
      style={{
        width: 340,
        padding: 20,
        maxWidth: "100%",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <CardPricingPlan />
    </div>
  ),
};
