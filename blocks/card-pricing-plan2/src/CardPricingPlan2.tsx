import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

type Orientation = "left" | "right";

interface Props {
  imgUrl?: string;
  orientation?: Orientation;
}

const Curves = ({ imgUrl, orientation }: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "125px",
        transform: `scalex(${orientation === "left" ? 1 : -1})`,
        background: `linear-gradient(270deg, rgba(255,245,222,1) 0%, rgba(251,231,232,1) 30%, rgba(205,195,255,1) 76%, rgba(206,196,254,1) 100%)`,
        borderRadius: "10px",
      }}
    >
      <svg viewBox="0 0 23.25 10" style={{ borderRadius: "10px" }}>
        <path d="M 15 -16.34 C 13.21 8.06, 20 18, -16.73 -5" />
        <path d="M 50 25 C 13.1 -20.35, -5.17 10.46, 50 45" />
      </svg>
    </Box>
  );
};

export default function Props({
  imgUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
  orientation = "left",
}: Props) {
  return (
    <Card variant="soft" color="neutral" sx={{ borderRadius: "xl", p: 0.5 }}>
      <Curves imgUrl={imgUrl} orientation={orientation} />
      <Typography
        level="body-md"
        sx={{
          position: "absolute",
          left: 24,
          top: orientation === "left" ? 20 : 50,
        }}
      >
        #1
      </Typography>
      <Typography
        level="h2"
        sx={{
          position: "absolute",
          left: 24,
          top: orientation === "left" ? 35 : 65,
        }}
      >
        Entry
      </Typography>
      <CardContent sx={{ width: "100%", alignItems: "center", gap: 3 }}>
        <Typography
          component="div"
          fontSize="xl2"
          fontWeight="xl"
          textColor="text.primary"
        >
          $12 USD
        </Typography>
        <Typography
          component="div"
          fontSize="xs"
          fontWeight="md"
          textColor="text.primary"
        >
          10 GB Storage space
        </Typography>
        <Typography
          component="div"
          fontSize="8px"
          fontWeight="sm"
          textColor="text.primary"
          sx={{ border: 0.5, borderRadius: "xl", p: 1, pl: 2, pr: 2 }}
        >
          We accept both, fiat and crypto
        </Typography>
        <Typography
          component="div"
          fontSize="xl2"
          fontWeight="xl"
          textColor="text.primary"
          sx={{ mt: 5 }}
        >
          Timeline
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="neutral"
          sx={{
            borderRadius: "xl",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            fontSize: "10px",
            fontWeight: "lg",
          }}
        >
          1 month subscription
        </Button>
      </CardActions>
    </Card>
  );
}
