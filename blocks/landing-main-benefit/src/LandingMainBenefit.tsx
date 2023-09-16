import React from "react";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import Divider from "@mui/joy/Divider";
import SvgIcon from "@mui/joy/SvgIcon";
import Typography from "@mui/joy/Typography";

function randomString(length: number) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  return result;
}

function useCharReplace(text: string) {
  const [index, setIndex] = React.useState(1);
  const [randomText, setRandomText] = React.useState(
    randomString(text.length - 1)
  );
  const indexRef = React.useRef(index);

  React.useEffect(() => {
    setIndex(1);
    setRandomText(randomString(text.length - 1));
    indexRef.current = 1;
    const interval = window.setInterval(() => {
      indexRef.current += 1;
      if (indexRef.current === text.length + 1) {
        clearInterval(interval);
      } else {
        setIndex(indexRef.current);
        setRandomText(randomString(text.length - indexRef.current));
      }
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return [text.slice(0, index), randomText];
}

function useTextDecryption(texts: Array<string>, interval: number = 3000) {
  const [dataIndex, setDataIndex] = React.useState(0);
  const [text, randomText] = useCharReplace(texts[dataIndex]);
  React.useEffect(() => {
    setTimeout(() => {
      setDataIndex((dataIndex) => (dataIndex + 1) % texts.length);
    }, interval);
  }, [dataIndex, interval]);
  return [text, randomText];
}

export default function LandingMainBenefit() {
  // TODO: Replace with your data
  const data = [
    "encrypt access tokens",
    "share encrypted data",
    "encrypt credit cards",
  ];
  const [text, randomText] = useTextDecryption(data);
  return (
    <Container
      sx={{
        py: {
          xs: "3.2rem",
          md: "8rem",
        },
      }}
    >
      <Box sx={{ px: "1rem" }}>
        <Typography
          level="h2"
          fontSize="clamp(1.60rem, calc(0.87rem + 2.92vw), 3.50rem)"
          fontWeight="md"
          lineHeight="1.2"
          sx={{
            mb: "2rem",
            background:
              "radial-gradient(45% 100% at 50% 50%, var(--joy-palette-text-primary) 64%, rgba(var(--joy-palette-neutral-mainChannel) / .45) 100%)",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          Use Evervault to <br />
          {text}
          <Typography
            sx={{
              background:
                "radial-gradient(45% 100% at 50% 50%, var(--joy-palette-text-primary) 64%, rgba(var(--joy-palette-neutral-mainChannel) / .45) 100%)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
              opacity: 0.25,
            }}
          >
            {randomText}
          </Typography>
        </Typography>
        <Divider sx={{ mt: "1.2rem", mb: "2.4rem" }} />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "3.2rem",
            mb: {
              xs: "2rem",
              md: 0,
            },
            "& > *": {
              minWidth: "clamp(0px, (700px - 100%) * 999, 100%)",
              flex: 1,
            },
          }}
        >
          <Box>
            <Typography
              level="title-md"
              sx={{ mb: 0.5, alignItems: "flex-start" }}
              startDecorator={
                <SvgIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </SvgIcon>
              }
            >
              Eliminate Data Breach Risk
            </Typography>
            <Typography level="body-sm">
              Encrypting sensitive data before it touches your infrastructure
              means you never handle sensitive data in plaintext, so when you
              get breached you don’t need to worry about the consequences.
            </Typography>
          </Box>
          <Box>
            <Typography
              level="title-md"
              sx={{ mb: 0.5, alignItems: "flex-start" }}
              startDecorator={
                <SvgIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="10" x2="14" y1="2" y2="2" />
                    <line x1="12" x2="15" y1="14" y2="11" />
                    <circle cx="12" cy="14" r="8" />
                  </svg>
                </SvgIcon>
              }
            >
              Streamline Compliance
            </Typography>
            <Typography level="body-sm">
              By encrypting in-scope data, Evervault reduces the financial cost
              and overhead of becoming compliant. Evervault is fully compliant
              with frameworks like PCI DSS Level 1, HIPAA and SOC 2.
            </Typography>
          </Box>
          <Box>
            <Typography
              level="title-md"
              sx={{ mb: 0.5, alignItems: "flex-start" }}
              startDecorator={
                <SvgIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M22 20V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h6" />
                    <circle cx="16" cy="19" r="2" />
                    <path d="M16 11v-1" />
                    <path d="M16 17v-2" />
                  </svg>
                </SvgIcon>
              }
            >
              Sign Customers Faster
            </Typography>
            <Typography level="body-sm">
              Using Evervault proves to your customers that you take data
              security seriously. You’ll pass vendor security reviews quickly
              and close deals with the most security-conscious customers.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
