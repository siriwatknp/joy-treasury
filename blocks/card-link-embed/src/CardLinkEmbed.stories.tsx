import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardLinkEmbed from "./CardLinkEmbed";

const meta = {
  title: "Card/Link/Embed",
  component: CardLinkEmbed,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardLinkEmbed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => (
    <div style={{ width: "max-content", maxWidth: "100%" }}>
      <CardLinkEmbed />
    </div>
  ),
};
