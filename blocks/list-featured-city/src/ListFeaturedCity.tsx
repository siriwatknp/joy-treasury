import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Link from "@mui/joy/Link";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import SvgIcon from "@mui/joy/SvgIcon";
import Typography from "@mui/joy/Typography";

export default function ListFeaturedCity() {
  return (
    <List sx={{ p: 0, "& > li": { p: 0 } }}>
      <ListItem>
        <Card
          variant="plain"
          orientation="horizontal"
          sx={{ boxShadow: "none", bgcolor: "transparent" }}
        >
          <AspectRatio flex sx={{ boxShadow: "md", minWidth: 144 }}>
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?fm=jpg&fit=crop&w=1080&q=80&fit=max" />
          </AspectRatio>
          <CardContent sx={{ gap: 0.5 }}>
            <Typography level="h4" sx={{ fontFamily: "Oswald" }}>
              DUBAI
            </Typography>
            <Typography level="body-sm">
              Dubai is a city and emirate in the United Arab Emirates known for
              luxury shopping, ultramodern architecture and a lively nightlife
              scene
            </Typography>
            <Link
              color="neutral"
              overlay
              href="#"
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
      </ListItem>

      <ListItem>
        <Card
          variant="plain"
          orientation="horizontal"
          sx={{ boxShadow: "none", bgcolor: "transparent" }}
        >
          <AspectRatio flex sx={{ boxShadow: "md", minWidth: 144 }}>
            <img src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?fm=jpg&fit=crop&w=1080&q=80&fit=max" />
          </AspectRatio>
          <CardContent sx={{ gap: 0.5 }}>
            <Typography level="h4" sx={{ fontFamily: "Oswald" }}>
              LONDON
            </Typography>
            <Typography level="body-sm">
              London, a vibrant blend of history and modernity, captivates with
              its iconic landmarks, dynamic culture, and richly diverse
              neighborhoods.
            </Typography>
            <Link
              color="neutral"
              overlay
              href="#"
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
      </ListItem>

      <ListItem>
        <Card
          variant="plain"
          orientation="horizontal"
          sx={{ boxShadow: "none", bgcolor: "transparent" }}
        >
          <AspectRatio flex sx={{ boxShadow: "md", minWidth: 144 }}>
            <img src="https://images.unsplash.com/photo-1582468546235-9bf31e5bc4a1?fm=jpg&fit=crop&w=1080&q=80&fit=max" />
          </AspectRatio>
          <CardContent sx={{ gap: 0.5 }}>
            <Typography level="h4" sx={{ fontFamily: "Oswald" }}>
              THAILAND
            </Typography>
            <Typography level="body-sm">
              With its stunning beaches, intricate temples, and enchanting
              traditions, Thailand remains a captivating destination that
              seamlessly blends natural beauty and cultural richness.
            </Typography>
            <Link
              color="neutral"
              overlay
              href="#"
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
      </ListItem>
    </List>
  );
}
