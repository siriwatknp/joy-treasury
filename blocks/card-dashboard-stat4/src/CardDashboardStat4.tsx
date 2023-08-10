import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import SvgIcon from "@mui/joy/SvgIcon";
import Typography from "@mui/joy/Typography";

export default function CardDashboardStat4() {
  return (
    <Card orientation="horizontal">
      <AspectRatio
        variant="soft"
        color="primary"
        ratio="1"
        sx={{ width: 48, borderRadius: "50%" }}
      >
        <div>
          <SvgIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
              <path
                fillRule="evenodd"
                d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z"
                clipRule="evenodd"
              />
            </svg>
          </SvgIcon>
        </div>
      </AspectRatio>
      <CardContent>
        <Typography
          level="h1"
          component="div"
          endDecorator={
            <Typography
              level="body-xs"
              color="success"
              endDecorator={
                <SvgIcon color="success" fontSize="md">
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
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </SvgIcon>
              }
            >
              20.6%
            </Typography>
          }
          sx={{ alignItems: "baseline" }}
        >
          875
        </Typography>
        <Typography textColor="text.tertiary">Mobile</Typography>
      </CardContent>
      <IconButton
        variant="plain"
        color="neutral"
        sx={{ alignSelf: "flex-start", mt: -1, mr: -1 }}
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
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </SvgIcon>
      </IconButton>
    </Card>
  );
}
