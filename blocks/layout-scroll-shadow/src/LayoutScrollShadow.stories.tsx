import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import LayoutScrollShadow from "./LayoutScrollShadow";

const meta = {
  title: "Layout/Scroll/Shadow",
  component: LayoutScrollShadow,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof LayoutScrollShadow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: () => (
    <LayoutScrollShadow sx={{ width: 500, height: "80vh" }}>
      {[...Array(100)].map((_, i) => (
        <div key={i} style={{ lineHeight: "40px" }}>
          Lorem ipsum is placeholder text.
        </div>
      ))}
    </LayoutScrollShadow>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <LayoutScrollShadow
      orientation="horizontal"
      sx={{ width: "80vw", height: 300, display: "flex" }}
    >
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          style={{
            lineHeight: "40px",
            letterSpacing: "0.25em",
            writingMode: "vertical-rl",
          }}
        >
          占位符文本
        </div>
      ))}
    </LayoutScrollShadow>
  ),
};
