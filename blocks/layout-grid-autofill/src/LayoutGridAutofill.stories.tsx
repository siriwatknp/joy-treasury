import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import LayoutGridAutofill from "./LayoutGridAutofill";

const meta = {
  title: "Layout/Grid/Autofill",
  component: LayoutGridAutofill,
  parameters: {
    layout: "padded",
    githubUsername: "siriwatknp",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof LayoutGridAutofill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Autofill: Story = {
  render: () => (
    <LayoutGridAutofill>
      {[...new Array(10)].map((_, index) => (
        <div
          key={index}
          style={{ backgroundColor: "gainsboro", height: 100 }}
        />
      ))}
    </LayoutGridAutofill>
  ),
};
