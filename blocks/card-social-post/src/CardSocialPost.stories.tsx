import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardSocialPost from "./CardSocialPost";

const meta = {
  title: "Card/Social/Post",
  component: CardSocialPost,
  parameters: {
    layout: "centered",
    githubUsername: "patorseing", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardSocialPost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Post: Story = {
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
      <CardSocialPost />
    </div>
  ),
};


