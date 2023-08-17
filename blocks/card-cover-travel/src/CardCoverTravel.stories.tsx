import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardCoverTravel from "./CardCoverTravel";

const meta = {
  title: "Card/Cover/Travel",
  component: CardCoverTravel,
  parameters: {
    layout: "centered",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardCoverTravel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Travel: Story = {
  render: () => (
    <div
      style={{
        width: 440,
        padding: 20,
        maxWidth: "100%",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <CardCoverTravel />
    </div>
  ),
};
