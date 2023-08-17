import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import NavHeadSimple from "./NavHeadSimple";

const meta = {
  title: "Nav/Head/Simple",
  component: NavHeadSimple,
  parameters: {
    layout: "centered",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof NavHeadSimple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  render: () => <NavHeadSimple />,
};
