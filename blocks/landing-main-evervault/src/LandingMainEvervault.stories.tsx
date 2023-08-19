import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import LandingMainEvervault from "./LandingMainEvervault";

const meta = {
  title: "Landing/Main/Evervault",
  component: LandingMainEvervault,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof LandingMainEvervault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Evervault: Story = {
  render: () => <LandingMainEvervault />,
};
