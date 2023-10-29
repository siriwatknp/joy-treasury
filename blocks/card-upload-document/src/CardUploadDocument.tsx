import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Typography } from "@mui/joy";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import SvgIcon from "@mui/joy/SvgIcon";

export default function CardUploadDocument() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
  });

  return (
    <div {...getRootProps()}>
      <Card
        variant="plain"
        sx={{ minWidth: 300, borderRadius: "xl", boxShadow: "lg" }}
        size="sm"
      >
        <CardContent
          sx={{
            border: "1px dashed",
            borderColor: isDragActive
              ? "var(--variant-outlinedBorder, var(--joy-palette-neutral-outlinedBorder, var(--joy-palette-neutral-300, #CDD7E1)))"
              : "transparent",
            padding: "2rem",
            textAlign: "center",
            alignItems: "center",
            borderRadius: "var(--Card-radius)",
            gap: "1rem",
          }}
        >
          <div>
            <Typography level="title-md">Drop document here</Typography>
            <Typography level="body-sm">or upload it manually</Typography>
          </div>
          <Button
            component="label"
            role={undefined}
            tabIndex={-1}
            sx={{ borderRadius: "xl" }}
            color="primary"
            endDecorator={
              <SvgIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </SvgIcon>
            }
          >
            Upload manually
            <Box
              component="input"
              type="file"
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
        </CardContent>
      </Card>
    </div>
  );
}
