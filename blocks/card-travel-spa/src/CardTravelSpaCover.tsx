import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardCover from "@mui/joy/CardCover";
import CircularProgress from "@mui/joy/CircularProgress";
import Link from "@mui/joy/Link";
import SvgIcon from "@mui/joy/SvgIcon";
import Typography from "@mui/joy/Typography";

export default function CardTravelSpaCover() {
  return (
    <Card
      variant="solid"
      invertedColors
      size="lg"
      sx={{
        borderRadius: 0,
        boxShadow: "xl",
        width: "100%",
        height: "100%",
      }}
    >
      <CardCover>
        <img src="https://images.unsplash.com/photo-1502784444187-359ac186c5bb" />
      </CardCover>
      <CardCover
        sx={{
          background:
            "linear-gradient(5deg, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px),linear-gradient(10deg, rgba(0,0,0,0.8), rgba(0,0,0,0) 190px)",
        }}
      />
      <CardContent sx={{ justifyContent: "flex-end" }}>
        <Typography
          level="h1"
          sx={{
            textShadow: "0 0 0.25em rgba(0 0 0 / 0.5)",
            fontFamily: (theme) =>
              `Cormorant, ${theme.vars.fontFamily.display}`,
            letterSpacing: 0,
          }}
        >
          <Link href="#" overlay textColor="inherit" underline="none">
            Blissful Haven Spa
          </Link>
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
      <CardContent
        orientation="horizontal"
        sx={{
          flex: "none",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography textColor="text.secondary">
          From <b>$ 2,500</b> for 8 nights
        </Typography>
        <CircularProgress
          thickness={2}
          determinate
          value={91}
          sx={{ "--CircularProgress-size": "52px", fontSize: "sm" }}
        >
          9.1
        </CircularProgress>
      </CardContent>
    </Card>
  );
}
