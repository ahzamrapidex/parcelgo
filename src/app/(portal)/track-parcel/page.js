"use client";
import React from "react";
import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import DynamicBanner from "@/shared/components/banner/dynamic-banner";
import UIButton from "@/shared/pure-components/button/button";
import InputField from "@/shared/form-control/InputField";
import { World, Delivery } from "@/assets";
import Image from "next/image";

const TrackParcel = () => {
  const theme = useTheme();

  return (
    <Stack bgcolor={"background.white"} py={8}>
      {/* Banner Section with Tracking Form */}
      <DynamicBanner
        image1={<Image src={World} alt="World tracking" width={350} height={"auto"} />}
        image2={<Image src={Delivery} alt="Fast delivery" width={350} height={"auto"} />}
        isCalculator={false}
      >
        <Typography variant="h3" fontWeight={"bold"} textAlign={"center"}>
          Track Your Parcel
        </Typography>
        <Typography variant="h4" fontWeight={"medium"} textAlign={"center"}>
          Real-time tracking for all your shipments
        </Typography>
        
        {/* Tracking Form directly under banner */}
        <Container maxWidth="sm" sx={{ mt: 4 }}>
          <Stack spacing={3} alignItems="center">
            <Typography
              variant="body1"
              textAlign="center"
              sx={{
                color: "text.secondary",
                lineHeight: 1.6,
                maxWidth: 500,
              }}
            >
              Track your parcel delivery and find your item&#39;s current whereabouts with this tracking tool.
            </Typography>

            <Stack spacing={3} sx={{ width: "100%" }}>
              <Box>
                <InputField
                  name="trackingNumber"
                  label="ParcelGo reference number *"
                  placeholder="Enter your tracking number"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "white",
                      fontSize: "1.1rem",
                    },
                  }}
                />
              </Box>

              <UIButton
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                  fontWeight: "bold",
                  py: 1.5,
                  fontSize: "1.1rem",
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                Track Parcel
              </UIButton>
            </Stack>
          </Stack>
        </Container>
      </DynamicBanner>
    </Stack>
  );
};

export default TrackParcel;
