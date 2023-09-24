import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardSocialReply from "./CardSocialReply";

const meta = {
  title: "Card/Social/Reply",
  component: CardSocialReply,
  parameters: {
    layout: "centered",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardSocialReply>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Reply: Story = {
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
      <CardSocialReply/>
    </div>
  ),
};
