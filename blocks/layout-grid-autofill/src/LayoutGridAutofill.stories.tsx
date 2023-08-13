import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import LayoutGridAutofill from "./LayoutGridAutofill";

const meta = {
  title: "Layout/Grid/Autofill",
  component: LayoutGridAutofill,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof LayoutGridAutofill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
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
