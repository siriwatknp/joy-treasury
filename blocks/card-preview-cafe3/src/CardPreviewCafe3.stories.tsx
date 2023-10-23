import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardPreviewCafe3 from "./CardPreviewCafe3";

const meta = {
  title: "Card/Preview/Cafe3",
  component: CardPreviewCafe3,
  parameters: {
    layout: "centered",
    githubUsername: "Annerez", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardPreviewCafe3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cafe3: Story = {
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
      <CardPreviewCafe3 />
    </div>
  ),
};


