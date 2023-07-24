import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";

export default function CardDashboardStat1() {
  return (
    <Card size="lg">
      <CardContent orientation="horizontal">
        <CardContent sx={{ gap: 1 }}>
          <div>
            <Typography level="title-lg">Orders</Typography>
            <Typography component="div" level="h1">
              201
            </Typography>
          </div>
          <Typography
            color="success"
            startDecorator={
              <SvgIcon color="inherit">
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
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
              </SvgIcon>
            }
          >
            8.2%{" "}
            <Typography
              level="body-xs"
              textColor="text.tertiary"
              sx={{ ml: 1, alignSelf: "last baseline" }}
            >
              Since last month
            </Typography>
          </Typography>
        </CardContent>
        <SvgIcon fontSize="xl3">
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
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </SvgIcon>
      </CardContent>
    </Card>
  );
}
