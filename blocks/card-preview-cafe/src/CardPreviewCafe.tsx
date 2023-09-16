import * as React from "react";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

export default function CardReviewCafe() {
  const imgUrl =
    "https://images.unsplash.com/photo-1530329650488-10f6eff05388?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
  return (
    <Card sx={{ width: 320 }}>
      <Typography fontWeight="">Cafe Terbaru</Typography>
      <CardContent orientation="horizontal">
        <img src={imgUrl} alt="" width={100} height={100} />
        <Stack spacing={1} sx={{ width: "100%" }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography level="body-md">1.2km</Typography>
            <Typography level="body-md">4.8</Typography>
          </Stack>
          <Typography fontWeight={700}>Kopi & Kitchen</Typography>
          <Typography fontWeight={700}>Sekaran</Typography>
          <Typography level="body-xs">Coffee, Western, Local</Typography>
          <Stack direction="row" spacing={2}>
            <Typography level="body-xs">Buka</Typography>
            <Typography level="body-xs">Closed at 22:00</Typography>
          </Stack>
        </Stack>
      </CardContent>
      <CardActions>
        <Button>Lihat Detail</Button>
      </CardActions>
    </Card>
  );
}
