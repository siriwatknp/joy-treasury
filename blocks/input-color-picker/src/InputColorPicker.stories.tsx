import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import InputColorPicker from "./InputColorPicker";

const meta = {
  title: "Input/Color/Picker",
  component: InputColorPicker,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof InputColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Picker: Story = {
  render: () => <InputColorPicker />,
};
