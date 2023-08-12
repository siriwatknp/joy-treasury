import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CarouselAppleGames from "./CarouselAppleGames";

const meta = {
  title: "Carousel/Apple/Games",
  component: CarouselAppleGames,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CarouselAppleGames>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
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
      <CarouselAppleGames />
    </div>
  ),
};
