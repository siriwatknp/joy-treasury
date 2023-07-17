import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";

import CardTravelSpa from "./CardTravelSpa";
import CardTravelSpaCover from "./CardTravelSpaCover";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Card/Travel/Spa",
  component: CardTravelSpa,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardTravelSpa>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Spa: Story = {
  render: () => (
    <div style={{ width: 400, maxWidth: "100%" }}>
      <CardTravelSpa />
    </div>
  ),
};

export const SpaCover: Story = {
  render: () => (
    <div style={{ width: 400, maxWidth: "100%", height: 600 }}>
      <CardTravelSpaCover />
    </div>
  ),
};
