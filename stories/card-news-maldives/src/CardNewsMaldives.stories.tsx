import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";

import CardNewsMaldives from "./CardNewsMaldives";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Card/News/Maldives",
  component: CardNewsMaldives,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
} satisfies Meta<typeof CardNewsMaldives>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Maldives: Story = {
  render: () => (
    <div style={{ maxWidth: 343 }}>
      <CardNewsMaldives />
    </div>
  ),
};
