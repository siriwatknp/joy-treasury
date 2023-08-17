import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardAppleEssentials from "./CardAppleEssentials";

const meta = {
  title: "Card/Apple/Essentials",
  component: CardAppleEssentials,
  parameters: {
    layout: "centered",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardAppleEssentials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Essentials: Story = {
  render: () => (
    <div
      style={{
        width: 400,
        padding: 20,
        maxWidth: "100%",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <CardAppleEssentials />
    </div>
  ),
};
