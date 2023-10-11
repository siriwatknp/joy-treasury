import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import LayoutGridPosts3 from "./LayoutGridPosts3";

const meta = {
  title: "Layout/Grid/Posts3",
  component: LayoutGridPosts3,
  parameters: {
    layout: "padded",
    githubUsername: "siriwatknp",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof LayoutGridPosts3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Posts3: Story = {
  render: () => (
    <LayoutGridPosts3>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          style={{
            backgroundColor: "gainsboro",
            minHeight: "256px",
          }}
        />
      ))}
    </LayoutGridPosts3>
  ),
};
