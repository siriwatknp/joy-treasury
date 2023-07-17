import React from "react";
import type { Preview } from "@storybook/react";
import { Title, Subtitle, Description, Primary, Controls, Stories, Source, Markdown, CodeOrSourceMdx } from '@storybook/blocks';
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { useDarkMode } from "storybook-dark-mode";

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
    docs: {
      page: (props, context) => {
        console.log('props', props, context)
        return (
          <>
            <Title>CLI</Title>
            <CodeOrSourceMdx />
          </>
        );
      },
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
  ],
};

export default preview;
