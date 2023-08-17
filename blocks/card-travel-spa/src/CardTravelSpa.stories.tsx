import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardTravelSpa from "./CardTravelSpa";
import CardTravelSpaCover from "./CardTravelSpaCover";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Card/Travel/Spa",
  component: CardTravelSpa,
  parameters: {
    layout: "centered",
  },
  decorators: [
    storyDialog(Usage),
    (Story) => (
      <React.Fragment>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant&display=swap"
          rel="stylesheet"
        />
        <Story />
      </React.Fragment>
    ),
  ],
} satisfies Meta<typeof CardTravelSpa>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Spa: Story = {
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
      <CardTravelSpa />
    </div>
  ),
};

export const SpaCover: Story = {
  render: () => (
    <div
      style={{
        width: 440,
        height: 600,
        padding: 20,
        maxWidth: "100%",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <CardTravelSpaCover />
    </div>
  ),
};
