import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardGridSimple from "./CardGridSimple";

const meta = {
  title: "Card/Grid/Simple",
  component: CardGridSimple,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardGridSimple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: () => <CardGridSimple />,
};
