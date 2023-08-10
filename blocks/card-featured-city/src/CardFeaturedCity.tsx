import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Link from "@mui/joy/Link";
import SvgIcon from "@mui/joy/SvgIcon";
import Typography from "@mui/joy/Typography";

export default function CardFeaturedCity() {
  return (
    <Card
      variant="plain"
      sx={{ boxShadow: "none", bgcolor: "transparent", borderRadius: "32px" }}
    >
      <AspectRatio ratio="3/4" sx={{ boxShadow: "md" }}>
        <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?fm=jpg&fit=crop&w=1080&q=80&fit=max" />
      </AspectRatio>
      <CardContent sx={{ gap: 1 }}>
        <Typography level="h2" sx={{ fontFamily: "Oswald" }}>
          DUBAI
        </Typography>
        <Typography level="body-sm">
          Dubai is a city and emirate in the United Arab Emirates known for
          luxury shopping, ultramodern architecture and a lively nightlife scene
        </Typography>
        <Link
          color="neutral"
          endDecorator={
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
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </SvgIcon>
          }
          sx={{ fontWeight: "lg", mt: 1, fontFamily: "Oswald" }}
        >
          MORE DETAILS
        </Link>
      </CardContent>
    </Card>
  );
}
