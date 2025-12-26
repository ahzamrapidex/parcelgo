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
  Alert,
  Snackbar,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    // Clear previous error when user starts typing
    if (emailError) {
      setEmailError('');
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setEmailError('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (data.success) {
        setNotification({
          open: true,
          message: data.message,
          severity: 'success'
        });
        setEmail(''); // Clear form on success
      } else {
        setNotification({
          open: true,
          message: data.message,
          severity: 'error'
        });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setNotification({
        open: true,
        message: 'An error occurred. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  // Close notification
  const handleCloseNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };

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
              component="form"
              onSubmit={handleSubmit}
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ width: { xs: "100%", md: "auto" } }}
            >
              <Stack spacing={0.5}>
                <TextField
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email address"
                  variant="outlined"
                  size="small"
                  error={Boolean(emailError)}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 1,
                    minWidth: { xs: "100%", sm: "300px" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { border: "none" },
                      "&.Mui-error fieldset": {
                        border: "2px solid #d32f2f",
                      },
                    },
                  }}
                />
                {emailError && (
                  <Typography
                    variant="caption"
                    sx={{ 
                      color: '#ff6b6b', 
                      fontSize: '0.75rem', 
                      px: 1,
                      // backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: 1,
                      alignSelf: 'flex-start'
                    }}
                  >
                    {emailError}
                  </Typography>
                )}
              </Stack>
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  backgroundColor: "secondary.main",
                  color: "white",
                  fontWeight: 600,
                  px: 4,
                  minHeight: '40px',
                  "&:disabled": {
                    opacity: 0.7,
                    backgroundColor: "secondary.main",
                  },
                }}
              >
                {loading ? 'Submitting...' : 'Submit'}
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

      {/* Notification Snackbar */}
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Footer;