import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardCoverTrip from "./CardCoverTrip";

const meta = {
  title: "Card/Cover/Trip",
  component: CardCoverTrip,
  parameters: {
    layout: "centered",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardCoverTrip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Trip: Story = {
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
      <CardCoverTrip />
    </div>
  ),
};
