import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import LayoutGridPosts2 from "./LayoutGridPosts2";

const meta = {
  title: "Layout/Grid/Posts2",
  component: LayoutGridPosts2,
  parameters: {
    layout: "padded",
    githubUsername: "siriwatknp",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof LayoutGridPosts2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Posts2: Story = {
  render: () => (
    <LayoutGridPosts2>
      {[...Array(5)].map((_, i) => (
        <div style={{ backgroundColor: "gainsboro" }} />
      ))}
    </LayoutGridPosts2>
  ),
};
