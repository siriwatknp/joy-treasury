import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/joy/Box";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import LandingCookiesToolbar from "./LandingCookiesToolbar";

const meta = {
  title: "Landing/Cookies/Toolbar",
  component: LandingCookiesToolbar,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof LandingCookiesToolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Toolbar: Story = {
  render: () => (
    <Box sx={{ "--_bottom-offset": "5rem" }}>
      <LandingCookiesToolbar />
    </Box>
  ),
};
