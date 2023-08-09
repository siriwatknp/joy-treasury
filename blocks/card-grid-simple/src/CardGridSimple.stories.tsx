import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CardGridSimple from "./CardGridSimple";

const meta = {
  title: "Card/Grid/Simple",
  component: CardGridSimple,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardGridSimple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => <CardGridSimple />,
};
