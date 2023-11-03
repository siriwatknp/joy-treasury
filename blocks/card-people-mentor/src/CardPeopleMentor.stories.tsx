import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardPeopleMentor from "./CardPeopleMentor";

const meta = {
  title: "Card/People/Mentor",
  component: CardPeopleMentor,
  parameters: {
    layout: "centered",
    githubUsername: "mjkodkks",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardPeopleMentor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mentor: Story = {
  render: () => (
    <div
      style={{
        width: 400,
        padding: 20,
        maxWidth: "100%",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <CardPeopleMentor />
    </div>
  ),
};
