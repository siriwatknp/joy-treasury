import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import SvgIcon from "@mui/joy/SvgIcon";

export default function InputColorPicker() {
  const [color, setColor] = React.useState<string | null>(null);
  return (
    <Button
      component="label"
      tabIndex={-1}
      role={undefined}
      aria-label="fill color"
      variant="outlined"
      color="neutral"
      endDecorator={
        <SvgIcon fontSize="md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </SvgIcon>
      }
      sx={{ pl: 1 }}
    >
      <AspectRatio
        variant="outlined"
        ratio="1"
        sx={{
          borderRadius: "50%",
          width: "1.5em",
          bgcolor: color,
        }}
      />
      <Box
        component="input"
        type="color"
        value={color || ""}
        onChange={(event) => setColor(event.target.value)}
        sx={{
          clip: "rect(0 0 0 0)",
          clipPath: "inset(50%)",
          height: "1px",
          overflow: "hidden",
          position: "absolute",
          bottom: 0,
          left: 0,
          whiteSpace: "nowrap",
          width: "1px",
        }}
      />
    </Button>
  );
}
