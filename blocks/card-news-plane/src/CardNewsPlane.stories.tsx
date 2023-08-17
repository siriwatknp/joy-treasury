import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardNewsPlane from "./CardNewsPlane";

const meta = {
  title: "Card/News/Plane",
  component: CardNewsPlane,
  parameters: {
    layout: "centered",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardNewsPlane>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plane: Story = {
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
      <CardNewsPlane />
    </div>
  ),
};
