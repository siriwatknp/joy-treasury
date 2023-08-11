import React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardCover from "@mui/joy/CardCover";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";

export default function CardCoverStream() {
  return (
    <Card
      variant="solid"
      color="neutral"
      invertedColors
      sx={{
        minHeight: 425,
        borderRadius: "xl",
        "--gradient": "#575776",
        "--gradient2": "rgba(0 0 0 / 0.72)",
      }}
    >
      <CardCover>
        <img
          alt=""
          src="https://photos.hancinema.net/photos/photo1686675.jpg"
        />
      </CardCover>
      <CardCover
        sx={{
          border: "6px solid",
          borderColor: "var(--gradient)",
          background:
            "linear-gradient(to top, var(--gradient) 20%, var(--gradient2) 44%, transparent 80%)",
        }}
      />
      <CardCover
        sx={{
          height: "40%",
          top: "initial",
          backdropFilter: "blur(6px)",
          left: 6,
          right: 6,
          bottom: 6,
        }}
      />
      <Chip
        sx={{
          borderRadius: "xl",
          position: "absolute",
          top: 0,
          left: 0,
          bgcolor: "var(--gradient)",
          color: "#fff",
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 0,
        }}
      >
        NOW AVAILABLE
      </Chip>
      <CardContent sx={{ mt: "auto", flex: "initial" }}>
        <Typography level="body-xs">NOW STREAMING</Typography>
        <Typography level="h3" sx={{ textWrap: "balance" }}>
          Stream Moving on Disney+ Hotstar
        </Typography>
        <Typography level="body-sm">
          Don't mis this supernatural action series.
        </Typography>
        <Divider sx={{ my: 1.5 }} />
        <CardContent orientation="horizontal" sx={{ alignItems: "center" }}>
          <Avatar
            size="lg"
            src="https://store-images.s-microsoft.com/image/apps.6899.14495311847124170.e89a4dce-fd9a-4a10-b8e4-a6c3aa1c055e.bcea8b9e-9a72-45eb-a2fc-e265b7dc1915"
            sx={{ borderRadius: "md" }}
          />
          <div>
            <Typography level="body-sm" textColor="text.primary">
              Disney+ Hotstar
            </Typography>
            <Typography level="body-xs" lineHeight="xs">
              Global & local movies & series
            </Typography>
          </div>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Button
              size="sm"
              sx={{ borderRadius: "xl", color: "primary.plainColor" }}
            >
              GET
            </Button>
            <Typography fontSize="0.625rem" noWrap>
              In-App Purchases
            </Typography>
          </Box>
        </CardContent>
      </CardContent>
    </Card>
  );
}
