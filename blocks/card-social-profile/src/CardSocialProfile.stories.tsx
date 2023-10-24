import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardSocialProfile from "./CardSocialProfile";

const meta = {
  title: "Card/Social/Profile",
  component: CardSocialProfile,
  parameters: {
    layout: "centered",
    githubUsername: "mildiemilk", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardSocialProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Profile: Story = {
  render: () => (
    <div
      style={{
        width: 420,
        padding: 20,
        maxWidth: "100%",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <CardSocialProfile />
    </div>
  ),
};
