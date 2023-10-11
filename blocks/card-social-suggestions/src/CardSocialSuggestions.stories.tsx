import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardSocialSuggestions from "./CardSocialSuggestions";

const meta = {
  title: "Card/Social/Suggestions",
  component: CardSocialSuggestions,
  parameters: {
    layout: "centered",
    githubUsername: "pobch",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardSocialSuggestions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Suggestions: Story = {
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
      <CardSocialSuggestions />
    </div>
  ),
};
