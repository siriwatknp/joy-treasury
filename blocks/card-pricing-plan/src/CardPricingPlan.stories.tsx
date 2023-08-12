import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardPricingPlan from "./CardPricingPlan";

const meta = {
  title: "Card/Pricing/Plan",
  component: CardPricingPlan,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardPricingPlan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
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
