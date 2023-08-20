import React from "react";
import type { Preview } from "@storybook/react";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import ChipDelete from "@mui/joy/ChipDelete";
import CssBaseline from "@mui/joy/CssBaseline";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import Sheet from "@mui/joy/Sheet";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import SvgIcon from "@mui/joy/SvgIcon";
import Tooltip from "@mui/joy/Tooltip";
import { linkTo } from "@storybook/addon-links";
import { useDarkMode } from "storybook-dark-mode";
import { useCopyToClipboard } from "usehooks-ts";
import "./global.css";
import cliToolbar from "./decorators/cliToolbar";

const ModeObserver = () => {
  const isDark = useDarkMode();
  const { setMode } = useColorScheme();
  React.useEffect(() => {
    if (isDark) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [isDark]);
  return null;
};

const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      hideNoControlsWarning: true,
      expanded: false,
    },
  },
  decorators: [
    (Story) => {
      return (
        <CssVarsProvider>
          <ModeObserver />
          <CssBaseline />
          <Story />
        </CssVarsProvider>
      );
    },
    cliToolbar(),
  ],
};

export default preview;
