import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import InputColorPicker from "./InputColorPicker";

const meta = {
  title: "Input/Color/Picker",
  component: InputColorPicker,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => <InputColorPicker />,
};
