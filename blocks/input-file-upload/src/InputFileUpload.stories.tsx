import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import InputFileUpload from "./InputFileUpload";

const meta = {
  title: "Input/File/Upload",
  component: InputFileUpload,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof InputFileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Upload: Story = {
  render: () => <InputFileUpload />,
};
