import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardPreviewCafe2 from "./CardPreviewCafe2";

const meta = {
  title: "Card/Preview/Cafe2",
  component: CardPreviewCafe2,
  parameters: {
    layout: "centered",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardPreviewCafe2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cafe2: Story = {
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
      <CardPreviewCafe2 />
    </div>
  ),
};
