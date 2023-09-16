import React from "react";
import type { Preview } from "@storybook/react";
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import { useDarkMode } from "storybook-dark-mode";
import "./global.css";
import cliToolbar from "./decorators/cliToolbar";
import draggableIframe from "./decorators/draggableIframe";

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
    draggableIframe(),
  ],
};

export default preview;
