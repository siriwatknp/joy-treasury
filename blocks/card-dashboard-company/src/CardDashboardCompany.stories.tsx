import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardDashboardCompany from "./CardDashboardCompany";

const meta = {
  title: "Card/Dashboard/Company",
  component: CardDashboardCompany,
  parameters: {
    layout: "centered",
    githubUsername: "siriwatknp",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardDashboardCompany>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Company: Story = {
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
      <CardDashboardCompany />
    </div>
  ),
};
