import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardPricingPlan2 from "./CardPricingPlan2";

const meta = {
  title: "Card/Pricing/Plan2",
  component: CardPricingPlan2,
  parameters: {
    layout: "centered",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardPricingPlan2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plan2: Story = {
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
      <CardPricingPlan2 />
    </div>
  ),
};


