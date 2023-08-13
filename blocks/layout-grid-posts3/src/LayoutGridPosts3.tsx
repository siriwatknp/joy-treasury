import React from "react";
import Box, { BoxProps } from "@mui/joy/Box";

export function Horizontal({ sx, ...props }: BoxProps) {
  return (
    <Box
      {...props}
      sx={[
        {
          gridArea: "horizontal",
          gridColumn: { xs: "1 / -1", md: "span 2" },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}

export function Vertical({ sx, ...props }: BoxProps) {
  return (
    <Box
      {...props}
      sx={[
        {
          gridArea: "vertical",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}

export default function LayoutGridPosts3({ sx, ...props }: BoxProps) {
  return (
    <Box
      {...props}
      sx={[
        {
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gridTemplateRows: { lg: "repeat(9, minmax(min(9vh, 80px), auto))" },
          gap: 2,
          "& > :first-of-type": {
            gridColumn: "span 2",
            gridRow: { lg: "span 4" },
          },
          "& > :not(:first-of-type, :last-of-type)": {
            gridRow: { md: "2", lg: "span 5" },
          },
          "& > :last-of-type": {
            gridColumn: "span 2",
            gridRow: { lg: "span 4" },
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}
