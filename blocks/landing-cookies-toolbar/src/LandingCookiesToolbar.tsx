import React from "react";
import Alert from "@mui/joy/Alert";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import SvgIcon from "@mui/joy/SvgIcon";
import Typography from "@mui/joy/Typography";

export default function LandingCookiesToolbar() {
  return (
    <Alert
      variant="solid"
      invertedColors
      sx={{
        position: "fixed",
        bottom: "var(--_bottom-offset, 0.75rem)",
        left: "0.75rem",
        right: "0.75rem",
        bgcolor: "rgba(38,38,38,.6)",
        maxWidth: "lg",
        marginInline: "auto",
        overflow: "visible",
        borderRadius: ".5rem",
        backgroundColor: "rgba(38,38,38,.6)",
        backdropFilter: "blur(8px)",
        gap: "1.5rem",
        display: "grid",
        gridTemplateColumns: { lg: "1fr auto" },
      }}
    >
      <Typography fontSize="13px" textColor="text.primary">
        This website uses cookies and similar technologies to ensure
        functionality, evaluate website usage, and to serve marketing content.
        Visit our{" "}
        <Link href="#" underline="always" variant="plain">
          Cookie Policy
        </Link>{" "}
        and{" "}
        <Link href="#" underline="always" variant="plain">
          Privacy Policy
        </Link>{" "}
        for more information.
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          "& > button, a": {
            borderRadius: "3rem",
            minWidth: "clamp(0px, (489px - 100%) * 999, 100%)",
          },
        }}
      >
        <Button variant="soft">Cookie Preferences</Button>
        <Button variant="soft">Reject Cookies</Button>
        <Button
          variant="solid"
          endDecorator={
            <SvgIcon fontSize="md">
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
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </SvgIcon>
          }
        >
          Accept Cookies
        </Button>
      </Box>
    </Alert>
  );
}
