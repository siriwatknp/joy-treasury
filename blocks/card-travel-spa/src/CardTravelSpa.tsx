import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import CircularProgress from "@mui/joy/CircularProgress";
import Link from "@mui/joy/Link";
import SvgIcon from "@mui/joy/SvgIcon";
import Typography from "@mui/joy/Typography";

export default function CardTravelSpa() {
  return (
    <Card size="lg" sx={{ borderRadius: 0, boxShadow: "xl" }}>
      <CardOverflow>
        <AspectRatio ratio="7/5" maxHeight={300}>
          <img src="https://images.unsplash.com/photo-1470214203634-e436a8848e23" />
        </AspectRatio>
      </CardOverflow>
      <CardContent orientation="horizontal" sx={{ alignItems: "center" }}>
        <CardContent sx={{ gap: 1, flex: "max-content" }}>
          <Typography
            level="h2"
            sx={{
              fontFamily: (theme) =>
                `Cormorant, ${theme.vars.fontFamily.display}`,
            }}
          >
            Blissful Haven Spa
          </Typography>
          <Typography
            level="body-sm"
            fontWeight="lg"
            startDecorator={
              <SvgIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </SvgIcon>
            }
          >
            Mystical valleys of Eldoria
          </Typography>
        </CardContent>
        <Box sx={{ flex: "auto", textAlign: "center" }}>
          <CircularProgress
            color="success"
            thickness={2}
            determinate
            value={91}
            sx={{ "--CircularProgress-size": "52px", fontSize: "sm" }}
          >
            9.1
          </CircularProgress>
        </Box>
      </CardContent>
      <Typography level="body-sm" sx={{ my: 2 }}>
        Rejuvenate Your Senses in a Serene Oasis of Tranquility, where expert
        therapists pamper you with indulgent treatments, leaving you refreshed,
        revitalized, and radiating with inner harmony.
      </Typography>
      <CardOverflow
        sx={{
          bgcolor: "background.level1",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Typography level="body-xs">
            From <Typography color="success">$ 2,500</Typography> for 8 nights
          </Typography>
          <Link
            level="body-sm"
            fontWeight="lg"
            component="button"
            endDecorator={
              <SvgIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </SvgIcon>
            }
          >
            Book now
          </Link>
        </CardActions>
      </CardOverflow>
    </Card>
  );
}
