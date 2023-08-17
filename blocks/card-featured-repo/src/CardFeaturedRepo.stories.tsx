import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardFeaturedRepo from "./CardFeaturedRepo";

const meta = {
  title: "Card/Featured/Repo",
  component: CardFeaturedRepo,
  parameters: {
    layout: "centered",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardFeaturedRepo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Repo: Story = {
  render: () => (
    <div
      style={{
        width: 440,
        padding: 20,
        maxWidth: "100%",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <CardFeaturedRepo />
    </div>
  ),
};
