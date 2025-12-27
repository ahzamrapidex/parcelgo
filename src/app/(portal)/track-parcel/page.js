"use client";
import React from "react";
import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  useTheme,
  Grid,
  Chip,
  Card,
  CardContent,
} from "@mui/material";
import DynamicBanner from "@/shared/components/banner/dynamic-banner";
import UIButton from "@/shared/pure-components/button/button";
import { World, Delivery, Robot1 } from "@/assets";
import Image from "next/image";
import ConstructionIcon from '@mui/icons-material/Construction';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';

const TrackParcel = () => {
  const theme = useTheme();

  const upcomingFeatures = [
    {
      icon: <TrackChangesIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Real-Time Tracking",
      description: "Live updates on your parcel's journey from pickup to delivery"
    },
    {
      icon: <SmartphoneIcon sx={{ fontSize: 40, color: "success.main" }} />,
      title: "SMS Notifications",
      description: "Get instant updates via text message at every tracking milestone"
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: "warning.main" }} />,
      title: "Email Alerts",
      description: "Detailed tracking updates delivered straight to your inbox"
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40, color: "info.main" }} />,
      title: "Delivery Window",
      description: "Know exactly when your parcel will arrive with precise time windows"
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: "error.main" }} />,
      title: "Secure Tracking",
      description: "Your tracking information is protected with enterprise-grade security"
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: "secondary.main" }} />,
      title: "Instant Updates",
      description: "Get tracking information updated every 30 seconds across all carriers"
    }
  ];

  return (
    <>
      {/* Banner Section */}
      <DynamicBanner
        image1={<Image src={World} alt="Global tracking network" width={350} height={"auto"} />}
        image2={<Image src={Delivery} alt="Fast delivery tracking" width={350} height={"auto"} />}
        isCalculator={false}
      >
        <Typography variant="h3" fontWeight={"bold"} textAlign={"center"}>
          Advanced Parcel Tracking
        </Typography>
        <Typography variant="h4" fontWeight={"medium"} textAlign={"center"}>
          Coming Soon - Real-time tracking for all shipments
        </Typography>
      </DynamicBanner>

      {/* Coming Soon Main Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack spacing={8} alignItems="center">
          
          {/* Hero Section */}
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Box
              sx={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                backgroundColor: theme.palette.primary.light,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2
              }}
            >
              <ConstructionIcon sx={{ fontSize: 60, color: "primary.main" }} />
            </Box>
            
            <Stack spacing={2} alignItems="center">
              <Chip
                label="Coming Soon"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                  fontWeight: "bold",
                  px: 3,
                  py: 1,
                  fontSize: "1rem"
                }}
              />
              
              <Typography variant="h3" fontWeight="bold" sx={{ maxWidth: "800px" }}>
                Revolutionary Tracking Experience Under Development
              </Typography>
              
              <Typography 
                variant="h6" 
                color="text.secondary" 
                sx={{ 
                  maxWidth: "700px",
                  lineHeight: 1.6,
                  fontWeight: 400
                }}
              >
                We're building the most advanced parcel tracking system in the UK. Get ready for real-time updates, 
                smart notifications, and complete visibility of your shipments across all major carriers.
              </Typography>
            </Stack>
          </Stack>

          {/* Features Grid */}
          <Box sx={{ width: "100%" }}>
            <Typography 
              variant="h4" 
              fontWeight="bold" 
              textAlign="center" 
              sx={{ mb: 6 }}
            >
              What's Coming
            </Typography>
            
            <Grid container spacing={4}>
              {upcomingFeatures.map((feature, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      border: "1px solid #e0e0e0",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: "center" }}>
                      <Stack spacing={3} alignItems="center">
                        {feature.icon}
                        <Typography variant="h6" fontWeight="bold">
                          {feature.title}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ lineHeight: 1.6 }}
                        >
                          {feature.description}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Current Alternative Section */}
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              backgroundColor: "#f8f9fa",
              borderRadius: 3,
              border: "1px solid #e0e0e0",
              p: 6,
              textAlign: "center"
            }}
          >
            <Stack spacing={4} alignItems="center">
              <Typography variant="h5" fontWeight="bold">
                Need to Track a Parcel Right Now?
              </Typography>
              
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{ maxWidth: "600px", lineHeight: 1.6 }}
              >
                While we're building our advanced tracking system, you can still track your ParcelGo 
                shipments by contacting our customer service team or using the courier's tracking system directly.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                <UIButton
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: "white",
                    fontWeight: "bold",
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Contact Customer Service
                </UIButton>
                
                <UIButton
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    fontWeight: "bold",
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Help & Support
                </UIButton>
              </Stack>
            </Stack>
          </Paper>

          {/* Stay Updated Section */}
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              borderRadius: 3,
              color: "white",
              p: 6,
              textAlign: "center"
            }}
          >
            <Stack spacing={4} alignItems="center">
              <NotificationsActiveIcon sx={{ fontSize: 50 }} />
              
              <Typography variant="h5" fontWeight="bold">
                Be the First to Know
              </Typography>
              
              <Typography 
                variant="body1"
                sx={{ 
                  maxWidth: "600px", 
                  lineHeight: 1.6,
                  opacity: 0.9 
                }}
              >
                Want to be notified when our advanced tracking system launches? 
                Sign up for updates and be among the first to experience the future of parcel tracking.
              </Typography>

              <UIButton
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "white",
                  color: theme.palette.primary.main,
                  fontWeight: "bold",
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                  },
                }}
              >
                Get Launch Updates
              </UIButton>

              <Typography 
                variant="caption"
                sx={{ opacity: 0.8, fontStyle: "italic" }}
              >
                Expected launch: Q2 2024
              </Typography>
            </Stack>
          </Paper>

          {/* Why We're Building This */}
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Typography 
              variant="h4" 
              fontWeight="bold" 
              sx={{ mb: 4 }}
            >
              Why We're Building This
            </Typography>
            
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Stack spacing={3} textAlign="left">
                  <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}>
                    Current tracking systems are fragmented, slow, and often unreliable. 
                    We're changing that by building a unified platform that gives you 
                    complete visibility across all carriers.
                  </Typography>
                  
                  <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}>
                    Our new tracking system will provide real-time updates, predictive 
                    delivery windows, and smart notifications that actually help you 
                    plan your day around deliveries.
                  </Typography>
                  
                  <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}>
                    <strong>Coming soon:</strong> The most advanced parcel tracking 
                    experience in the UK, designed around what customers actually need.
                  </Typography>
                </Stack>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={Robot1}
                    alt="Advanced tracking technology"
                    width={300}
                    height={300}
                    style={{
                      objectFit: "contain",
                      borderRadius: "12px",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>

        </Stack>
      </Container>
    </>
  );
};

export default TrackParcel;