import React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";

export default function CardFormSignup() {
  return (
    <Card size="lg" variant="outlined" sx={{ boxShadow: "none" }}>
      <Typography level="h2">Sign up</Typography>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input placeholder="Enter your email" />
      </FormControl>
      <FormControl>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <FormLabel>Password</FormLabel>
          <Link level="body-sm">Forgot password?</Link>
        </Box>
        <Input placeholder="Enter your password" />
      </FormControl>
      <CardActions orientation="horizontal-reverse">
        <Button variant="solid" color="primary">
          Sign in
        </Button>
        <Button variant="soft" color="primary">
          Create an account
        </Button>
      </CardActions>
    </Card>
  );
}
