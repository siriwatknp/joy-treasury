import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";

export default function CardDashboardStat5() {
  return (
    <Card>
      <CardContent orientation="horizontal" sx={{ alignItems: "center" }}>
        <Typography textColor="text.icon" sx={{ flex: "auto" }}>
          Total Profit
        </Typography>
        <IconButton variant="plain" color="neutral" sx={{ mt: -1, mr: -1 }}>
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
      </CardContent>
      <Typography level="h1" component="div">
        $42,000.00
      </Typography>
      <Divider />
      <CardContent orientation="horizontal">
        <Typography
          color="success"
          level="body-sm"
          startDecorator={
            <AspectRatio
              variant="soft"
              color="success"
              ratio="1"
              sx={{ width: 20, borderRadius: "50%" }}
            >
              <div>
                <SvgIcon color="inherit" fontSize="xs">
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
              </div>
            </AspectRatio>
          }
          sx={{ flex: "auto" }}
        >
          +33.57%
        </Typography>
        <Typography textColor="text.icon" level="body-sm">
          Profit in this period
        </Typography>
      </CardContent>
    </Card>
  );
}
