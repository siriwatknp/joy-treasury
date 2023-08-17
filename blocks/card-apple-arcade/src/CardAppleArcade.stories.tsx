import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardAppleArcade from "./CardAppleArcade";

const meta = {
  title: "Card/Apple/Arcade",
  component: CardAppleArcade,
  parameters: {
    layout: "centered",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardAppleArcade>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Arcade: Story = {
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
      <CardAppleArcade />
    </div>
  ),
};
