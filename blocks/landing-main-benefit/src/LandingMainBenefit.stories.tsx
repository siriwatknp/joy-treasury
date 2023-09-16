import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import LandingMainBenefit from "./LandingMainBenefit";

const meta = {
  title: "Landing/Main/Benefit",
  component: LandingMainBenefit,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof LandingMainBenefit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Benefit: Story = {
  render: () => <LandingMainBenefit />,
};
