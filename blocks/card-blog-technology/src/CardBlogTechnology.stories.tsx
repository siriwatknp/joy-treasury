import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardBlogTechnology from "./CardBlogTechnology";

const meta = {
  title: "Card/Blog/Technology",
  component: CardBlogTechnology,
  parameters: {
    layout: "centered",
    githubUsername: "patorseing", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardBlogTechnology>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Technology: Story = {
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
      <CardBlogTechnology />
    </div>
  ),
};


