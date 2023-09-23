import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import Stack from "@mui/joy/Stack";
import SvgIcon from "@mui/joy/SvgIcon";
import Typography from "@mui/joy/Typography";

const StarIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 64 64">
    <path
      d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24
C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24
C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
    />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24">
    <path
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      fill="none"
    />
    <path d="M12 6V12" />
    <path d="M16.24 16.24L12 12" />
  </svg>
);

const RightArrowIcon = () => (
  <svg viewBox="0 0 1024 1024">
    <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" />
  </svg>
);

const CircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="9.5 9.5 5 5">
    <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" />
  </svg>
);

export default function CardReviewCafe() {
  const imgUrl =
    "https://images.unsplash.com/photo-1617006898062-b7348c051570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2051&q=80";
  return (
    <Card sx={{ borderRadius: "25px", bgcolor: "#fff", p: 3, pb: 2 }}>
      <Typography textColor="#000" fontWeight="lg">
        Cafe Terbaru
      </Typography>
      <CardContent
        orientation="horizontal"
        sx={{ width: "100%", gap: 2, mt: 1 }}
      >
        <AspectRatio ratio="1" sx={{ minWidth: 150 }}>
          <img src={imgUrl} alt="" loading="lazy" />
        </AspectRatio>
        <Stack justifyContent="space-between" sx={{ width: "100%" }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography
              level="body-sm"
              textColor="#000"
              startDecorator={
                <SvgIcon sx={{ fontSize: 16, color: "black" }}>
                  <LocationIcon />
                </SvgIcon>
              }
            >
              1.2km
            </Typography>
            <Typography
              level="body-sm"
              textColor="#000"
              startDecorator={
                <SvgIcon color="warning" sx={{ fontSize: 16 }}>
                  <StarIcon />
                </SvgIcon>
              }
              sx={{ mr: 3 }}
            >
              4.8
            </Typography>
          </Stack>
          <Stack>
            <Typography textColor="#000" fontWeight="lg">
              Kopi & Kitchen
            </Typography>
            <Typography textColor="#000" fontWeight="lg">
              Sekaran
            </Typography>
          </Stack>
          <Typography level="body-sm" sx={{ mb: 2, color: "text.tertiary" }}>
            Coffee, Western, Local
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ color: "text.tertiary" }}
          >
            <Typography
              level="body-sm"
              startDecorator={
                <SvgIcon
                  sx={{
                    fontSize: 16,
                    stroke: "#000",
                    opacity: 0.5,
                  }}
                >
                  <ClockIcon />
                </SvgIcon>
              }
            >
              Buka
            </Typography>
            <SvgIcon sx={{ fontSize: 7, opacity: 0.7 }}>
              <CircleIcon />
            </SvgIcon>
            <Typography level="body-sm">Closed at 22:00</Typography>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions sx={{ flexDirection: "column", pt: 1 }}>
        <Button
          sx={{ bgcolor: "#000", color: "#fff", width: "100%" }}
          endDecorator={
            <SvgIcon sx={{ fontSize: 14, stroke: "white", strokeWidth: 1.5 }}>
              <RightArrowIcon />
            </SvgIcon>
          }
        >
          Lihat Detail
        </Button>
        <Stack
          spacing={0.5}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              width: 20,
              height: 8,
              borderRadius: "9999px",
              border: 1,
              backgroundColor: "#ccd4e4",
            }}
          />
          <SvgIcon sx={{ fontSize: 7, opacity: 0.3 }}>
            <CircleIcon />
          </SvgIcon>
          <SvgIcon sx={{ fontSize: 7, opacity: 0.3 }}>
            <CircleIcon />
          </SvgIcon>
        </Stack>
      </CardActions>
    </Card>
  );
}
