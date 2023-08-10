import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import NavHeadSimple from "./NavHeadSimple";

const meta = {
  title: "Nav/Head/Simple",
  component: NavHeadSimple,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NavHeadSimple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => <NavHeadSimple />,
};
