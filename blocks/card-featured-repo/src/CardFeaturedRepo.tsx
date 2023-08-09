import React from "react";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";
import Sheet from "@mui/joy/Sheet";

export default function CardFeaturedRepo() {
  return (
    <Card size="lg" sx={{ borderRadius: "xl", boxShadow: "lg" }}>
      <CardContent orientation="horizontal" sx={{ alignItems: "flex-start" }}>
        <div>
          <Typography level="title-lg">siriwatknp/joy-treasury</Typography>
          <Typography>
            A collection of UI inspiration built with Joy UI.
          </Typography>
        </div>
        <ButtonGroup size="sm" variant="soft">
          <Button
            startDecorator={
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
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </SvgIcon>
            }
          >
            Star
          </Button>
          <IconButton>
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
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </SvgIcon>
          </IconButton>
        </ButtonGroup>
      </CardContent>
      <CardContent orientation="horizontal" sx={{ gap: 2 }}>
        <Typography
          level="body-sm"
          startDecorator={
            <Sheet
              variant="solid"
              color="primary"
              sx={{ width: 8, height: 8, borderRadius: "50%" }}
            />
          }
        >
          TypeScript
        </Typography>
        <Typography
          level="body-sm"
          startDecorator={
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
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </SvgIcon>
          }
        >
          20k
        </Typography>
        <Typography level="body-sm">Updated August 2023</Typography>
      </CardContent>
    </Card>
  );
}
