import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import NavHeadDropdown from "./NavHeadDropdown";

const meta = {
  title: "Nav/Head/Dropdown",
  component: NavHeadDropdown,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NavHeadDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => <NavHeadDropdown />,
};
