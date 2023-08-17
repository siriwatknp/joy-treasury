import { MDXProvider } from "@mdx-js/react";
import { ReactRenderer } from "@storybook/react";
import React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ModalDialog from "@mui/joy/ModalDialog";
import SvgIcon from "@mui/joy/SvgIcon";
import Tooltip from "@mui/joy/Tooltip";
import Typography from "@mui/joy/Typography";
import { AnchorMdx, CodeOrSourceMdx, HeadersMdx } from "@storybook/blocks";
import {
  background,
  color,
  ThemeProvider,
  themes,
  typography,
} from "@storybook/theming";
import { DecoratorFunction } from "@storybook/types";

const defaultTheme = {
  ...themes.light,
  color,
  background,
  typography,
};

const defaultComponents: Record<string, any> = {
  code: CodeOrSourceMdx,
  a: AnchorMdx,
  ...HeadersMdx,
};

export default function storyDialog(Component: React.ComponentType) {
  return function storyDialogDecorator(Story, context) {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Story />
        <Tooltip
          size="sm"
          title="Show source code"
          placement="top-start"
          sx={{ zIndex: 100000 }}
        >
          <IconButton
            size="lg"
            variant="soft"
            sx={{
              position: "fixed",
              bottom: "0.5rem",
              left: "0.5rem",
              zIndex: 99999,
              borderRadius: 40,
            }}
            onClick={() => setOpen(true)}
          >
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </SvgIcon>
          </IconButton>
        </Tooltip>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog>
            <ModalClose />
            <Typography level="h2">Usage</Typography>
            <Box sx={{ overflow: "auto" }}>
              <ThemeProvider theme={defaultTheme}>
                <MDXProvider components={defaultComponents}>
                  <Component />
                </MDXProvider>
              </ThemeProvider>
            </Box>
          </ModalDialog>
        </Modal>
      </>
    );
  } as DecoratorFunction<ReactRenderer, {}>;
}
