import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardPreviewCafe from "./CardPreviewCafe";

const meta = {
  title: "Card/Preview/Cafe",
  component: CardPreviewCafe,
  parameters: {
    layout: "centered",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardPreviewCafe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cafe: Story = {
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
      <CardPreviewCafe />
    </div>
  ),
};


