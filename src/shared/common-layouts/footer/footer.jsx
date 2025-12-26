"use client";

import {
  Apple,
  FacebookIcon,
  GooglePlay,
  InstagramIcon,
    WhatsAppIcon,
  Ireland,
  LinkedInIcon,
  LogoWhite,
  TwitterIcon,
  UK,
  YouTubeIcon,
} from "@/assets";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";

const Footer = () => {
  const theme = useTheme();
  return (
    <>
      {/* Newsletter Signup Section */}
      <Box sx={{ backgroundColor: theme.palette.background["200"], py: 3 }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h5"
              sx={{
                color: "white",
                fontWeight: 600,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Sign up for new and exclusive offers
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ width: { xs: "100%", md: "auto" } }}
            >
              <TextField
                placeholder="Enter your email address"
                variant="outlined"
                size="small"
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,
                  minWidth: { xs: "100%", sm: "300px" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { border: "none" },
                  },
                }}
              />
              <Button
                variant="contained"
                color="secondary.main"
                sx={{
                  backgroundColor: "secondary.main",
                  color: "white",
                  fontWeight: 600,
                  px: 4,
                }}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Main Footer Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.background["100"],
          py: 6,
          color: "white",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Logo and Social Section */}
            <Grid item xs={12} md={3}>
              <Stack spacing={3}>
                {/* Logo */}
                <Image
                  src={LogoWhite}
                  alt="Parcel2Go logo"
                  width={150}
                  height={"auto"}
                />

                {/* Connect With Us */}
                <Stack spacing={2}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Connect with us
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <FacebookIcon
                      sx={{
                        fontSize: 24,
                        cursor: "pointer",
                        "&:hover": { opacity: 0.8 },
                      }}
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/share/1EjXCgBXb4/?mibextid=wwXIfr",
                          "_blank"
                        )
                      }
                    />
                    <InstagramIcon
                      sx={{
                        fontSize: 24,
                        cursor: "pointer",
                        "&:hover": { opacity: 0.8 },
                      }}
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/parcelgo.co/",
                          "_blank"
                        )
                      }
                    />

                    <WhatsAppIcon
                      sx={{
                        fontSize: 24,
                        cursor: "pointer",
                        "&:hover": { opacity: 0.8 },
                      }}
                      onClick={() =>
                        window.open("https://wa.me/16885014", "_blank")
                      }
                    />
                  </Stack>
                </Stack>

                {/* Country */}
                <Stack spacing={1}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Country
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Image src={UK} alt="UK" width={24} height={24} />
                    <Image src={Ireland} alt="Ireland" width={24} height={24} />
                  </Stack>
                </Stack>

                {/* Download App */}
                <Stack spacing={2}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Download our P2G App
                  </Typography>
                  <Stack spacing={1}>
                    <Image
                      src={Apple}
                      alt="Download on App Store"
                      width={120}
                      height={35}
                      style={{ cursor: "pointer" }}
                    />
                    <Image
                      src={GooglePlay}
                      alt="Get it on Google Play"
                      width={120}
                      height={35}
                      style={{ cursor: "pointer" }}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Grid>

            {/* Middle section - Empty for now */}
            <Grid item xs={12} md={7}>
              {/* This space is left empty as requested */}
            </Grid>

            {/* Contact Us Section */}
            <Grid item xs={12} md={2}>
              <Stack spacing={2}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Contact Us
                </Typography>
                
                <Stack spacing={1}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Address
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    1a, Beattyville Gardens,<br />
                    Ilford, England, IG6 1JN
                  </Typography>
                </Stack>

                <Stack spacing={1}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Phone
                  </Typography>
                  <Typography 
                    variant="body2" 
                    component="a" 
                    href="tel:07466005024"
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    07466005024
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Copyright Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.background["200"],
          py: 2,
          color: "#ccc",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            sx={{ textAlign: "center", fontSize: "0.875rem", color: "white" }}
          >
            @ PARCELGO LIMITED 1995-2025 All Rights Reserved. | Company Number:
            16885014
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
