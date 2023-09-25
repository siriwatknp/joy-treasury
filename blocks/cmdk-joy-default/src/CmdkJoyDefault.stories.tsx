import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CmdkJoyDefault from "./CmdkJoyDefault";

const meta = {
  title: "Cmdk/Joy/Default",
  component: CmdkJoyDefault,
  parameters: {
    layout: "centered",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CmdkJoyDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <CmdkJoyDefault />,
};
