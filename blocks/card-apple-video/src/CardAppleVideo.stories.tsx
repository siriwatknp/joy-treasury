import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardAppleVideo from "./CardAppleVideo";

const meta = {
  title: "Card/Apple/Video",
  component: CardAppleVideo,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardAppleVideo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Video: Story = {
  render: () => (
    <div
      style={{
        width: 360,
        padding: 20,
        maxWidth: "100%",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <CardAppleVideo />
    </div>
  ),
};
