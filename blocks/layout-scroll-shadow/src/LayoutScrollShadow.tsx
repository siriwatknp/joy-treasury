import React from "react";
import Box, { BoxProps } from "@mui/joy/Box";

export default function LayoutScrollShadow({
  sx,
  orientation = "vertical",
  ...props
}: BoxProps & { orientation?: "vertical" | "horizontal" }) {
  return (
    <Box
      sx={[
        (theme) => ({
          "--layout-orientation": `var(--${orientation})`,
          "--vertical": "var(--layout-orientation,)",
          "--horizontal": "var(--layout-orientation,)",
          "--layout-background": theme.vars.palette.background.body,
          overflow:
            "var(--vertical, hidden auto) var(--horizontal, auto hidden)",
          background: `linear-gradient(var(--vertical, to bottom) var(--horizontal, to right), var(--layout-background) 30%, transparent),
            linear-gradient(var(--vertical, to bottom) var(--horizontal, to right), transparent, var(--layout-background) 70%) 0 100%,
            radial-gradient(
              farthest-side at var(--vertical, 50% 0) var(--horizontal, 0 50%),
              rgba(0, 0, 0, 0.12),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
                farthest-side at var(--vertical, 50% 100%) var(--horizontal, 100% 50%),
                rgba(0, 0, 0, 0.12),
                rgba(0, 0, 0, 0)
              )
              0 100%`,
          backgroundSize:
            "var(--vertical, 100% 40px, 100% 40px, 100% 14px, 100% 14px) var(--horizontal, 40px 100%, 40px 100%, 14px 100%, 14px 100%)",
          backgroundPosition:
            "var(--vertical, 0 0, 0 100%, 0 0, 0 100%) var(--horizontal, 0 0, 100% 0, 0 0, 100% 0)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "local, local, scroll, scroll",
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
}
