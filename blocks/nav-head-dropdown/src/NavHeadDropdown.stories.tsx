import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import NavHeadDropdown from "./NavHeadDropdown";

const meta = {
  title: "Nav/Head/Dropdown",
  component: NavHeadDropdown,
  parameters: {
    layout: "centered",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof NavHeadDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dropdown: Story = {
  render: () => <NavHeadDropdown />,
};
