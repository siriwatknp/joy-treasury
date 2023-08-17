import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardCoverStream from "./CardCoverStream";

const meta = {
  title: "Card/Cover/Stream",
  component: CardCoverStream,
  parameters: {
    layout: "centered",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardCoverStream>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stream: Story = {
  render: () => (
    <div
      style={{
        width: 360,
        padding: 20,
        maxWidth: "100%",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <CardCoverStream />
    </div>
  ),
};
