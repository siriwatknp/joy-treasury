import * as React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

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
        <CardOverflow>
          <AspectRatio ratio="1" sx={{ width: 150 }}>
            <img src={imgUrl} alt="" loading="lazy" />
          </AspectRatio>
        </CardOverflow>
        <Stack justifyContent="space-between" sx={{ width: "100%" }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography
              level="body-sm"
              textColor="#000"
              startDecorator={
                <LocationOnIcon color="inherit" sx={{ fontSize: 16 }} />
              }
            >
              1.2km
            </Typography>
            <Typography
              level="body-sm"
              textColor="#000"
              startDecorator={
                <StarIcon color="warning" sx={{ fontSize: 16 }} />
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
              startDecorator={<AccessTimeIcon sx={{ fontSize: 16 }} />}
            >
              Buka
            </Typography>
            <CircleIcon sx={{ fontSize: 7 }} />
            <Typography level="body-sm">Closed at 22:00</Typography>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions sx={{ flexDirection: "column", pt: 1 }}>
        <Button
          sx={{ bgcolor: "#000", color: "#fff", width: "100%" }}
          endDecorator={<KeyboardArrowRightIcon />}
        >
          Lihat Detail
        </Button>
        <Stack
          direction="row"
          spacing={0.5}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              width: 20,
              height: 8,
              borderRadius: "9999px",
              border: 1,
              backgroundColor: "#cccedc",
            }}
          />
          <CircleIcon sx={{ fontSize: 10, opacity: 0.3 }} />
          <CircleIcon sx={{ fontSize: 10, opacity: 0.3 }} />
        </Stack>
      </CardActions>
    </Card>
  );
}
