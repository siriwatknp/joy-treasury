import React from "react";
import {
  Avatar,
  AvatarGroup,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/joy";

export default function CardSocialPost() {

  const post = {
    users:['https://images.unsplash.com/photo-1698296449732-d0a3195f147a?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1686040054953-9cb42085ca9c?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1697917225161-f43b4e60d2f4?auto=format&fit=crop&q=80&w=1811&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    likes: 47,
    info:{
      comments: 10,
      shared:2
    }
  }
  return (
    <Card
      variant="plain"
      sx={(theme) => ({
        boxShadow: theme.shadow.md,
        borderRadius: "1.5rem",
        background: "background.body"
      })}
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Avatar
          alt="avatar"
          src="https://images.unsplash.com/photo-1694564717876-7436bdf6a236?auto=format&fit=crop&q=80&w=2905&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Stack>
          <Typography sx={{ fontWeight: 600 }}>Imam Farrhoak</Typography>
          <Typography level="body-sm" sx={{ color: "gray" }}>
            4 mins ago
          </Typography>
        </Stack>
      </Stack>
      <CardContent>
        We are facing a serious business dilemma, with Facebook taking away a
        good chunk of traffic to news and content sites, and ad blocker eating
        into what's left of it while slashing ad revenues.
      </CardContent>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <AvatarGroup>
          {post.users.map( (user, id) => <Avatar
            key={id}
            size="sm"
            alt="avatar"
            src={user}
          />)}
          </AvatarGroup>
          <Typography level="body-sm">{post.likes} likes</Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          {Object.entries(post.info).map(([key, value], id) => <Typography level="body-sm" key={`${key}-${id}`}>{value} {key}</Typography>)}
        </Stack>
      </Stack>
    </Card>
  );
}
