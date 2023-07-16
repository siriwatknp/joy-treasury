import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";

import CardNewsSpa from "./CardNewsSpa";
import CardNewsSpaCover from "./CardNewsSpaCover";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Card/News/Spa",
  component: CardNewsSpa,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
} satisfies Meta<typeof CardNewsSpa>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Spa: Story = {
  render: () => (
    <div style={{ width: 400, maxWidth: "100%" }}>
      <CardNewsSpa />
    </div>
  ),
};

export const SpaCover: Story = {
  render: () => (
    <div style={{ width: 400, maxWidth: "100%", height: 600 }}>
      <CardNewsSpaCover />
    </div>
  ),
};
