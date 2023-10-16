import React from "react";
import { Link, SvgIcon } from "@mui/joy";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";

export default function CardSocialProfile() {
  return (
    <Card
      sx={{ background: "white", p: "20px", borderRadius: "20px" }}
      variant="solid"
      size="md"
    >
      <CardContent sx={{ gap: "12px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Avatar
            src="https://i.pinimg.com/originals/c7/e2/5c/c7e25c9979b38201ee2b1729b2f3c151.png"
            sx={{ width: "30%", height: "auto" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              width: "1",
            }}
          >
            <Box
              sx={{ display: "flex", gap: "12px", justifyContent: "center" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  level="body-sm"
                  sx={{ color: "primary.900", fontWeight: "bold" }}
                >
                  142
                </Typography>
                <Typography level="body-sm">Posts</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  level="body-sm"
                  sx={{ color: "primary.900", fontWeight: "bold" }}
                >
                  7.4M
                </Typography>
                <Typography level="body-sm">Followers</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  level="body-sm"
                  sx={{ color: "primary.900", fontWeight: "bold" }}
                >
                  117
                </Typography>
                <Typography level="body-sm">Following</Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "8px" }}>
              <Button
                variant="solid"
                sx={{
                  borderRadius: "20px",
                  width: "70%",
                  bgcolor: "primary.500",
                  fontSize: 16,
                }}
              >
                Message
              </Button>
              <IconButton
                variant="soft"
                size="sm"
                sx={{
                  borderRadius: 40,
                  backgroundColor: "white",
                  width: "30%",
                  border: "1px solid",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                <SvgIcon
                  sx={{
                    color: "primary.500",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <polyline points="16 11 18 13 22 9" />
                  </svg>
                </SvgIcon>
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={{ marginBottom: "8px" }}>
            <Typography level="h3" sx={{ color: "primary.900" }}>
              Saba
            </Typography>
            <Typography level="body-md" sx={{ fontWeight: 'semibold' }}>Band / Musician</Typography>
          </Box>
          <Typography level="body-md" sx={{ color: "primary.900" }}>
            PIVOTGANG 🏀
          </Typography>
          <Typography level="body-md" sx={{ color: "primary.900" }}>
            CARE FOR ME TOUR OUT NOW 🎙
          </Typography>
          <Link level="body-sm">#CHI-TOWN</Link>
          <Typography level="body-sm" sx={{ color: "primary.900" }}>
            This remind me of before we had insomnia
          </Typography>
          <Typography level="body-sm" sx={{ color: "primary.900" }}>
            Sleepin' peacefully, never needed a pile of drugs
          </Typography>
          <Link level="body-sm" sx={{ color: "primary.500", fontWeight: 'bold' }}>
            pivotgang.com
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}
