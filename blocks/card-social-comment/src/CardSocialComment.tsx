import React from "react";
import { ArrowForward, TurnRight, StarBorder, MoreHoriz } from "@mui/icons-material"
import {
  Card,
  CardContent,
  Box,
  Avatar,
  List,
  ListItem,
  Link,
  ButtonGroup,
  IconButton,
  Typography,
  ColorPaletteProp
} from "@mui/joy";

export default function CardSocialComment() {
  const comments = [
    {
      commentor: 'Edward Clark',
      commentAt: '14:07',
      comments: [
        <Typography>The biggest change of design in 2019 will be the makeup of the people doing the actual design work.</Typography>,
        <Typography><Link underline="none" variant="soft" color="primary">@Steve</Link> please read this.</Typography>
      ],
      color: 'success',
    },
    {
      commentor: 'Albert Ox',
      commentAt: '13:37',
      comments: [
        <Typography>We absolutely need to get smarter about privacy. Society is creeped out by big tech and big data.</Typography>
      ],
      color: 'warning',
    }
  ]

  const convertNameToAvatarText = (name: string) => name.split(" ").reduce((acc, word) => `${acc}${word[0] || ''}`, '')

  return (
    <Card sx={{ borderRadius: "xl" }}>
      <CardContent>
        <List sx={{ "--ListItem-paddingLeft": 0, "--ListItem-paddingRight": 0 }}>
          {
            comments.map(({ commentor, commentAt, comments, color }) => (
              <ListItem>
                <Box display="flex">
                  <Avatar color={color as ColorPaletteProp}>{convertNameToAvatarText(commentor)}</Avatar>
                  <Box marginLeft="8px" marginBottom="8px">
                    <Box display="flex" justifyContent="space-between" alignItems="flex-end" marginBottom="4px">
                      <Typography fontWeight="lg">{commentor}</Typography>
                      <Typography fontSize="xs">{commentAt}</Typography>
                    </Box>
                    <Box
                      paddingRight="32px"
                      position="relative"
                      sx={{
                        '&:hover .MuiButtonGroup-root': {
                          display: 'block'
                        }
                      }}
                    >
                      {comments}
                      <ButtonGroup
                        variant="soft"
                        color="neutral"
                        size="sm"
                        sx={{
                          display: "none",
                          '.MuiIconButton-root': {
                            padding: '8px',
                            border: '1px solid',
                            borderColor: 'var(--variant-outlinedBorder, var(--joy-palette-neutral-outlinedBorder))',
                          },
                          '.MuiIconButton-root:hover': {
                            "--Icon-color": "var(--joy-palette-primary-600)",
                          },
                          position: "absolute",
                          top: "0px",
                          right: "0px",
                        }}
                      >
                        <IconButton>
                          <TurnRight />
                        </IconButton>
                        <IconButton>
                          <ArrowForward />
                        </IconButton>
                        <IconButton>
                          <StarBorder />
                        </IconButton>
                        <IconButton>
                          <MoreHoriz />
                        </IconButton>
                      </ButtonGroup>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
            ))
          }
        </List>
      </CardContent>
    </Card>
  );
}
