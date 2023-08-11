import React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import SvgIcon from "@mui/joy/SvgIcon";
import Typography from "@mui/joy/Typography";

function Widget({
  title,
  value,
  metadata,
  icon,
}: {
  title: React.ReactNode;
  value: React.ReactNode;
  metadata: React.ReactNode;
  icon: React.ReactElement;
}) {
  return (
    <Card size="lg" variant="outlined" orientation="horizontal">
      <CardContent>
        <Typography level="title-sm" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography level="h2">{value}</Typography>
        <Typography level="body-xs">{metadata}</Typography>
      </CardContent>
      <SvgIcon size="sm">{icon}</SvgIcon>
    </Card>
  );
}

export default function CardDashboardStat6() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(300px, 1fr))",
        gap: 3,
      }}
    >
      <Widget
        title="Total Revenue"
        value="$45,231.89"
        metadata="+20.1% from last month"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        }
      />

      <Widget
        title="Subscriptions"
        value="+2350"
        metadata="+180.1% from last month"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        }
      />

      <Widget
        title="Sales"
        value="+12,234"
        metadata="+19% from last month"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
            <path d="M2 10h20"></path>
          </svg>
        }
      />

      <Widget
        title="Active Now"
        value="+573"
        metadata="+201 since last hour"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        }
      />
    </Box>
  );
}
