import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import LayoutGridPosts from "./LayoutGridPosts";

const meta = {
  title: "Layout/Grid/Posts",
  component: LayoutGridPosts,
  parameters: {
    layout: "padded",
    githubUsername: "siriwatknp",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof LayoutGridPosts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Posts: Story = {
  render: () => (
    <LayoutGridPosts>
      {[...Array(3)].map((_, i) => (
        <div style={{ backgroundColor: "gainsboro" }} />
      ))}
    </LayoutGridPosts>
  ),
};
