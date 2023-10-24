import React from "react";
import {
  Avatar,
  Box,
  ButtonGroup,
  Card,
  CardContent,
  IconButton,
  Link,
  List,
  ListItem,
  SvgIcon,
  Typography,
} from "@mui/joy";

export default function CardSocialComment() {
  const comments = [
    {
      commentor: "Edward Clark",
      commentAt: "14:07",
      comments: [
        <Typography>
          The biggest change of design in 2019 will be the makeup of the people
          doing the actual design work.
        </Typography>,
        <Typography>
          <Link underline="none" variant="soft" color="primary">
            @Steve
          </Link>{" "}
          please read this.
        </Typography>,
      ],
      color: "success",
    },
    {
      commentor: "Albert Ox",
      commentAt: "13:37",
      comments: [
        <Typography>
          We absolutely need to get smarter about privacy. Society is creeped
          out by big tech and big data.
        </Typography>,
      ],
      color: "warning",
    },
  ] as const;

  const convertNameToAvatarText = (name: string) =>
    name.split(" ").reduce((acc, word) => `${acc}${word[0] || ""}`, "");

  return (
    <Card sx={{ borderRadius: "xl" }}>
      <CardContent>
        <List
          sx={{
            py: 0,
            "--ListItem-paddingLeft": 0,
            "--ListItem-paddingRight": 0,
          }}
        >
          {comments.map(({ commentor, commentAt, comments, color }) => (
            <ListItem>
              <Avatar color={color} sx={{ alignSelf: "flex-start" }}>
                {convertNameToAvatarText(commentor)}
              </Avatar>
              <Box width="100%" marginLeft="8px" marginBottom="8px">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  marginBottom="4px"
                >
                  <Typography fontWeight="lg">{commentor}</Typography>
                  <Typography fontSize="xs">{commentAt}</Typography>
                </Box>
                <Box
                  paddingRight="32px"
                  position="relative"
                  sx={{
                    "&:hover .MuiButtonGroup-root": {
                      visibility: "visible",
                      transform: "translateY(-100%)",
                      opacity: 1,
                    },
                  }}
                >
                  {comments}
                  <ButtonGroup
                    variant="soft"
                    color="neutral"
                    size="sm"
                    sx={{
                      visibility: "hidden",
                      opacity: 0,
                      position: "absolute",
                      top: "0px",
                      right: "0px",
                      transition: "0.2s",
                      transform: "translateY(-50%)",
                      "& .MuiIconButton-root": {
                        bgcolor: "background.body",
                        border: "1px solid",
                        borderColor:
                          "var(--variant-outlinedBorder, var(--joy-palette-neutral-outlinedBorder))",
                      },
                      "& .MuiIconButton-root:hover": {
                        "--Icon-color": "var(--joy-palette-primary-600)",
                      },
                    }}
                  >
                    <IconButton>
                      <SvgIcon>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-corner-up-right"
                        >
                          <polyline points="15 14 20 9 15 4" />
                          <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
                        </svg>
                      </SvgIcon>
                    </IconButton>
                    <IconButton>
                      <SvgIcon>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-right"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </SvgIcon>
                    </IconButton>
                    <IconButton>
                      <SvgIcon>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-star"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </SvgIcon>
                    </IconButton>
                    <IconButton>
                      <SvgIcon>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-more-horizontal"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                          <circle cx="5" cy="12" r="1" />
                        </svg>
                      </SvgIcon>
                    </IconButton>
                  </ButtonGroup>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
