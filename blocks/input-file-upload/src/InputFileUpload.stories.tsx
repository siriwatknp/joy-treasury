import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import InputFileUpload from "./InputFileUpload";

const meta = {
  title: "Input/File/Upload",
  component: InputFileUpload,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof InputFileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => <InputFileUpload />,
};
