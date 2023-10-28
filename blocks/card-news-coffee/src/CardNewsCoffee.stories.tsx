import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardNewsCoffee from "./CardNewsCoffee";

const meta = {
  title: "Card/News/Coffee",
  component: CardNewsCoffee,
  parameters: {
    layout: "centered",
    githubUsername: "wwasuu", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardNewsCoffee>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Coffee: Story = {
  render: () => (
    <div 
      style={{
        width: 340,
        padding: 20,
        maxWidth: "100%",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <CardNewsCoffee />
    </div>
  ),
};


