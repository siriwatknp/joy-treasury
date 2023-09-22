import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
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

const Curves = ({
  imgUrl,
  orientation,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <AspectRatio
      ratio="437/188"
      sx={{
        transform: `scalex(${orientation === "left" ? 1 : -1})`,
        background: `linear-gradient(270deg, rgba(255,245,222,1) 0%, rgba(251,231,232,1) 30%, rgba(205,195,255,1) 76%, rgba(206,196,254,1) 100%)`,
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 23.25 10">
        <defs>
          <mask id="mask" x="0" y="0" width="100%" height="100%">
            <path d="M 15 -16.34 C 13.21 8.06, 20 18, -16.73 -5" fill="white" />
            <path d="M 50 25 C 13.1 -20.35, -5.17 10.46, 50 45" fill="white" />
          </mask>
        </defs>
        <image
          href={imgUrl}
          x="0"
          y="0"
          width="100%"
          height="100%"
          mask="url(#mask)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
      {children}
    </AspectRatio>
  );
};

const CardPricingPlan2 = ({
  imgUrl = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
  orientation = "left",
}: Props) => {
  return (
    <Card
      variant="plain"
      sx={{ borderRadius: "xl", p: 0.5, bgcolor: "white", minWidth: 300 }}
    >
      <Curves imgUrl={imgUrl} orientation={orientation} />
      <Typography
        level="body-md"
        sx={{
          position: "absolute",
          top: 20,
          ...(orientation === "left" && {
            left: 24,
          }),
          ...(orientation === "right" && {
            right: 20,
          }),
          color: "white",
        }}
      >
        #1
      </Typography>
      <Typography
        level="h2"
        sx={{
          position: "absolute",
          top: 35,
          ...(orientation === "left" && {
            left: 24,
          }),
          ...(orientation === "right" && {
            right: 24,
          }),
          color: "white",
        }}
      >
        Entry
      </Typography>
      <CardContent sx={{ width: "100%", alignItems: "center", gap: 3 }}>
        <Typography
          component="div"
          fontSize="xl2"
          fontWeight="xl"
          textColor="common.black"
        >
          $12 USD
        </Typography>
        <Typography
          component="div"
          fontSize="xs"
          fontWeight="md"
          textColor="common.black"
        >
          10 GB Storage space
        </Typography>
        <Typography
          level="body-xs"
          component="div"
          textColor="common.black"
          sx={{
            border: 0.5,
            borderRadius: "xl",
            p: 1,
            pl: 2,
            pr: 2,
            fontSize: "10px",
          }}
        >
          We accept both, fiat and crypto
        </Typography>
        <Typography
          component="div"
          fontSize="xl2"
          fontWeight="xl"
          textColor="common.black"
          sx={{ mt: 5 }}
        >
          Timeline
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="soft"
          color="neutral"
          sx={{
            fontSize: "10px",
            fontWeight: "lg",
            color: "text.primary",
          }}
        >
          1 month subscription
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardPricingPlan2;
