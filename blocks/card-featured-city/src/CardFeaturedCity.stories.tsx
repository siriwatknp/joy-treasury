import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CardFeaturedCity from "./CardFeaturedCity";

const meta = {
  title: "Card/Featured/City",
  component: CardFeaturedCity,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <React.Fragment>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
          rel="stylesheet"
        />
        <Story />
      </React.Fragment>
    ),
  ],
} satisfies Meta<typeof CardFeaturedCity>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  render: () => (
    <div style={{ width: 300, maxWidth: "100%" }}>
      <CardFeaturedCity />
    </div>
  ),
};
