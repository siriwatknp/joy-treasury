import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardLinkEmbed from "./CardLinkEmbed";

const meta = {
  title: "Card/Link/Embed",
  component: CardLinkEmbed,
  parameters: {
    layout: "centered",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardLinkEmbed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Embed: Story = {
  render: () => (
    <div
      style={{
        width: "max-content",
        padding: 20,
        maxWidth: "100%",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <CardLinkEmbed />
    </div>
  ),
};
