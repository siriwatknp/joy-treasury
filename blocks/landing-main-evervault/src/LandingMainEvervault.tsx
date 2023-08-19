import React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Chip from "@mui/joy/Chip";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

export default function LandingMainEvervault() {
  return (
    <Sheet
      variant="solid"
      color="neutral"
      invertedColors
      sx={(theme) => ({
        "--radiant-inner": "#220060",
        "--radiant-outer": "#76d9ff",
        height: "92svh",
        display: "grid",
        gridTemplateColumns: {
          sm: "repeat(2, 1fr)",
          md: "repeat(2, minmax(0, 500px))",
        },
        gap: { sm: "1rem", md: "2.5rem" },
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: "2.4rem",
        borderBottomRightRadius: "2.4rem",
        background:
          "radial-gradient(140% 107.13% at 50% 10%,var(--radiant-inner) 37.41%,#63e 69.27%,var(--radiant-outer) 100%)",
        padding: "0 2rem",
        margin: { md: "0 1.5rem" },
        perspective: "1000px",
        [theme.getColorSchemeSelector("dark")]: {
          "--radiant-inner": "transparent",
          "--radiant-outer": "#fff",
        },
      })}
    >
      <Stack useFlexGap spacing={2}>
        <Chip
          size="sm"
          slotProps={{
            action: {
              component: "a",
              href: "https://evervault.com/",
              target: "_blank",
              rel: "noreferrer noopener",
            },
          }}
          sx={{
            mb: 1,
            minHeight: "initial",
            padding: "1px",
            overflow: "hidden",
            "&::before": {
              top: "-800%",
              right: "-800%",
              bottom: "-800%",
              left: "-800%",
              content: '""',
              opacity: 0.75,
              position: "absolute",
              backgroundImage:
                "conic-gradient(#f88fe9,#7000ff 20%,#58d2f2 50%,#fff 75%,#f88fe9 100%)",
              animation: "spin 5s linear infinite",
              transition: "opacity .25s",
            },
            "& > span": {
              padding: "0 0.5rem",
              bgcolor: "neutral.900",
              borderRadius: "inherit",
              height: "1.25rem",
              lineHeight: "1.25rem",
            },
            "@keyframes spin": {
              "0%": {
                transform: "rotate(0)",
              },
              "100%": {
                transform: "rotate(360deg)",
              },
            },
          }}
        >
          Introducing AI Privacy — Learn more
        </Chip>
        <Typography
          level="h1"
          lineHeight="1"
          fontWeight="md"
          sx={{
            textWrap: "balance",
            background:
              "radial-gradient(45% 100% at 50% 50%,#fff 40%,hsla(0,0%,100%,.45) 100%)",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            fontSize: {
              md: "3.5rem",
              lg: "4rem",
            },
          }}
        >
          Eliminate the risk of data breaches
        </Typography>
        <Typography level="body-sm" sx={{ textWrap: "pretty" }}>
          Evervault is the first developer platform that lets you keep sensitive
          data encrypted at all times, without compromising your ability to use
          that data.
        </Typography>
        <ButtonGroup
          variant="plain"
          spacing={2}
          sx={{ "& button, a": { borderRadius: "3rem" } }}
        >
          <Button
            variant="solid"
            {...{
              component: "a",
              href: "https://evervault.com/",
              target: "_blank",
              rel: "noreferrer noopener",
            }}
            sx={{ color: "neutral.900" }}
          >
            Request a demo
          </Button>
          <Button
            variant="plain"
            {...{
              component: "a",
              href: "https://evervault.com/",
              target: "_blank",
              rel: "noreferrer noopener",
            }}
          >
            Try for free
          </Button>
        </ButtonGroup>
      </Stack>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          ml: "2.5rem",
          minHeight: "40vh",
          borderRadius: "2.4rem",
          border: "1px solid",
          borderColor: "rgba(255, 255, 255, 0.2)",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(1rem)",
          transform: "rotateY(-45deg)",
        }}
      />
    </Sheet>
  );
}
