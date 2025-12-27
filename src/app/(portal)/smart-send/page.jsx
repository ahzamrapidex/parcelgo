"use client";
import React from "react";
import DynamicBanner from "@/shared/components/banner/dynamic-banner";
import {
  Typography,
  Box,
  Container,
  Paper,
  Divider,
  Stack,
  Grid,
  FormLabel,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Robot1,
  ParcelImage,
  WhatSmartSend,
  WhySmartSend,
  SaveOn,
  Star,
  Amazon,
  BigCommerce,
  BluePark,
  Ebay,
  Etsay,
  Km,
  Magento,
  OnBuy,
  PrestaShop,
  ShopWiered,
  Shopify,
  SquareSpace,
  Tiktok,
  Wix,
  WooCommerce,
  Robot3,
  Robot4,
  Robot2,
} from "@/assets";
import Image from "next/image";
import UIButton from "@/shared/pure-components/button/button";
import InputField from "@/shared/form-control/InputField";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";

const SmartSend = () => {
  const theme = useTheme();

  const navigationItems = [
    "Book a Demo",
    "Smart Send Explained",
    "Link an Account",
    "Smart Send Features",
    "Customer Reviews",
  ];

  const customerStories = [
    {
      title: "Savvy Side Hustler",
      description:
        "Sarah told us how she sells her camera equipment both nationally and internationally with the help of ParcelGo.",
      image: Robot2,
      href: "#",
    },
    {
      title: "DIY Dynamo",
      description:
        "Mike explains how Smart Send helps him ship his handmade bee hotels and gives tips on how to use the platform efficiently.",
      image: Robot3,
      href: "#",
    },
    {
      title: "Marketplace Multitasker",
      description:
        "Dimitar manages a self-care business on Amazon, Etsy, NOTHS, and Shopify. We look at how Smart Send makes multichannel management even easier.",
      image: Robot4,
      href: "#",
    },
  ];

  return (
    <>
      <DynamicBanner
        image1={<Image src={Robot1} alt="Robot1" width={300} height={"auto"} />}
        image2={
          <Image
            src={ParcelImage}
            alt="Parcel Image"
            width={350}
            height={"auto"}
          />
        }
        isCalculator={false}
      >
        <Typography variant="h3" fontWeight={"bold"} textAlign={"center"}>
          Cheapest Marketplace Shipping in the UK
        </Typography>
        <Typography variant="body1" fontWeight={"bold"} textAlign={"center"}>
          Join for free, ship in seconds
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <UIButton
            sx={{ mx: "auto", fontWeight: "bold" }}
            size="large"
            variant="contained"
            color="secondary"
          >
            Try Smart Send
          </UIButton>
        </Box>
      </DynamicBanner>

      <Container maxWidth="xl">
        <Stack spacing={7} sx={{ py: 6 }}>
          {/* Navigation Section */}
          {/* <Paper
            elevation={0}
            sx={{
              backgroundColor: theme.palette.background["100"],
              borderRadius: 3,
              border: `2px solid #E0E0E0`,
              overflow: "hidden",
              mx: "auto",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {navigationItems.map((item, index) => (
                <React.Fragment key={index}>
                  <Box
                    sx={{
                      flex: 1,
                      textAlign: "center",
                      py: 3,
                      px: 2,
                      cursor: "pointer",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                  {index < navigationItems.length - 1 && (
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        display: { xs: "none", sm: "block" },
                        borderColor: "white",
                      }}
                    />
                  )}
                  {index < navigationItems.length - 1 && (
                    <Divider
                      orientation="horizontal"
                      sx={{
                        display: { xs: "block", sm: "none" },
                        width: "80%",
                        mx: "auto",
                        borderColor: "white",
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Paper> */}

          {/* Book a Demo Section */}
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "white",
              borderRadius: 3,
              border: `2px solid #E0E0E0`,
              overflow: "hidden",
              mx: "auto",
              p: 4,
              width: "100%",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography variant="h4" fontWeight={"bold"}>
                  Book a Demo
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputField name="FirstName" label="First Name" />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputField name="LastName" label="Last Name" />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputField name="EmailAddress" label="Email Address" />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputField name="PhoneNumber" label="Phone Number" />
              </Grid>
              <Grid item xs={12} md={12}>
                <InputField
                  name="PhoneNumber"
                  label="How many Parcels do you send in an average week?"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputField
                  name="PhoneNumber"
                  label="Choose a day for us to contact you"
                />
                <FormLabel sx={{ color: "text.primary", fontSize: "14px" }}>
                  Please enter a day between Monday and Friday
                </FormLabel>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputField
                  name="PhoneNumber"
                  label="Choose a time for us to contact you"
                />
                <FormLabel sx={{ color: "text.primary", fontSize: "14px" }}>
                  Please enter a time between 10am and 6pm
                </FormLabel>
              </Grid>
              <Grid item xs={12} md={12}>
                <UIButton
                  sx={{ mx: "auto", fontWeight: "bold" }}
                  size="large"
                  variant="outlined"
                  color="primary"
                >
                  Try Smart Send
                </UIButton>
              </Grid>
            </Grid>
          </Paper>

          {/* What is Smart Send? Section */}
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "white",
              borderRadius: 3,
              border: `2px solid #E0E0E0`,
              overflow: "hidden",
              mx: "auto",
              width: "100%",
            }}
          >
            <Grid container spacing={0}>
              {/* Left Column - Text Content */}
              <Grid item xs={12} md={6} sx={{ p: 6 }}>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{
                    mb: 3,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                  }}
                >
                  What is Smart Send?
                </Typography>

                <Stack spacing={2}>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}
                  >
                    ParcelGo's free online shipping software, Smart Send, lets
                    you link your sales channels with your ParcelGo account to
                    import orders and ship from one place.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}
                  >
                    Built for businesses, side hustlers, and frequent senders,
                    Smart Send's dashboard is easy to use and linking accounts
                    takes just a few minutes.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}
                  >
                    Link any number of our 16 sales channels, such as{" "}
                    <Box
                      component="span"
                      sx={{ color: "primary.main", fontWeight: 600 }}
                    >
                      eBay
                    </Box>
                    ,{" "}
                    <Box
                      component="span"
                      sx={{ color: "primary.main", fontWeight: 600 }}
                    >
                      Shopify
                    </Box>
                    ,{" "}
                    <Box
                      component="span"
                      sx={{ color: "primary.main", fontWeight: 600 }}
                    >
                      TikTok
                    </Box>{" "}
                    and more, and send with the UK's full range of couriers.
                    Whether you link a marketplace or upload a spreadsheet, once
                    your orders are imported, booking a parcel online is fast
                    and hassle-free.
                  </Typography>
                </Stack>
              </Grid>

              {/* Right Column - Image */}
              <Grid item xs={12} md={6}>
                <Image
                  src={WhatSmartSend}
                  alt="Smart Send - Women working in e-commerce fulfillment"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Grid>
            </Grid>
          </Paper>

          {/* Why use Smart Send? Section */}
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "white",
              borderRadius: 3,
              border: `2px solid #E0E0E0`,
              overflow: "hidden",
              mx: "auto",
              width: "100%",
            }}
          >
            <Grid container spacing={0}>
              {/* Left Column - Smart Send Diagram */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    p: 4,
                  }}
                >
                  <Image
                    src={WhySmartSend}
                    alt="Smart Send - Product categories and integration diagram"
                    style={{
                      width: "80%",
                      height: "auto",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </Box>
              </Grid>

              {/* Right Column - Blue Section */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    backgroundColor: theme.palette.background["100"],
                    height: "100%",
                    p: 4,
                    
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{
                      mb: 3,
                      color: "white",
                      fontSize: { xs: "1.8rem", md: "2.2rem" },
                    }}
                  >
                    Why use Smart Send?
                  </Typography>

                  <Stack spacing={2}>
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "1.1rem",
                          lineHeight: 1.6,
                          "&::before": {
                            content: '"•"',
                            marginRight: 1,
                          },
                        }}
                      >
                        If you need help, we have a 24/7 customer service team
                        who can support you when you need it.
                      </Typography>
                    </Box>

                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "1.1rem",
                          lineHeight: 1.6,
                          "&::before": {
                            content: '"•"',
                            marginRight: 1,
                          },
                        }}
                      >
                        As the largest courier comparison site, enjoy access to
                        the widest range of couriers and the cheapest shipping
                        prices{" "}
                        <Box
                          component="span"
                          sx={{
                            textDecoration: "underline",
                            color: "#60A5FA",
                            cursor: "pointer",
                          }}
                        >
                          (that's a guarantee!)
                        </Box>
                        .
                      </Typography>
                    </Box>

                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "1.1rem",
                          lineHeight: 1.6,
                          "&::before": {
                            content: '"•"',
                            marginRight: 1,
                          },
                        }}
                      >
                        Unlike many other online shipping software, Smart Send
                        is completely free to use.
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                      <Typography
                        sx={{
                          color: "#FDE047",
                          fontSize: "1.2rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        Link an account &gt;
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* Link your sales channels section */}
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "white",
              borderRadius: 3,
              border: `2px solid #E0E0E0`,
              overflow: "hidden",
              mx: "auto",
              p: 4,
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                mb: 4,
                color: "#1E3A8A",
              }}
            >
              Link your sales channels and upload your orders
            </Typography>

            {/* Logos Grid */}
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {/* Row 1 */}
              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={Amazon}
                    alt="Amazon"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={Ebay}
                    alt="eBay"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={Etsay}
                    alt="Etsy"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={Tiktok}
                    alt="TikTok"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    color="text.primary"
                  >
                    Not On The High Street
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={Shopify}
                    alt="Shopify"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              {/* Row 2 */}
              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={Km}
                    alt="EKM"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={Wix}
                    alt="Wix"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={Magento}
                    alt="Magento"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={BigCommerce}
                    alt="BigCommerce"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={SquareSpace}
                    alt="Squarespace"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={PrestaShop}
                    alt="PrestaShop"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              {/* Row 3 */}
              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={WooCommerce}
                    alt="WooCommerce"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={OnBuy}
                    alt="OnBuy.com"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={BluePark}
                    alt="Bluepark"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={ShopWiered}
                    alt="Shopwired"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      color: "#10B981",
                      textAlign: "center",
                    }}
                  >
                    CSV
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* All the features, none of the costs section */}
          <Stack>
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                mb: 4,
              }}
            >
              All the features, none of the costs
            </Typography>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "white",
                borderRadius: 3,
                border: `2px solid #E0E0E0`,
                overflow: "hidden",
                mx: "auto",
                p: 4,
                width: "100%",
              }}
            >
              {/* Features List */}
              <Stack spacing={2}>
                {/* Feature 1 - Multi-channel integration */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 3,
                    border: "1px solid #E0E0E0",
                    borderRadius: 2,
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: "#10B981",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} gap={1}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Multi-channel integration
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ lineHeight: 1.6, color: "text.primary" }}
                    >
                      Manually add orders via a CSV or link an unlimited number
                      of sales channels, choosing from the 16 we currently have,
                      as well as Royal Mail OBA.
                    </Typography>
                  </Box>
                </Box>

                {/* Feature 2 - Rule manager */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 3,
                    border: "1px solid #E0E0E0",
                    borderRadius: 2,
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: "#10B981",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} gap={1}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Rule manager
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ lineHeight: 1.6, color: "text.primary" }}
                    >
                      Automate your imported orders by creating rules like items
                      sold on eBay should be shipped with Evri Postable, or
                      products over 1kg should be sent with DPD.
                    </Typography>
                  </Box>
                </Box>

                {/* Feature 3 - Mark as dispatched */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 3,
                    border: "1px solid #E0E0E0",
                    borderRadius: 2,
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: "#10B981",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} gap={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      color="text.primary"
                    >
                      Mark as dispatched
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ lineHeight: 1.6, color: "text.primary" }}
                    >
                      Send a tracking link to your marketplace in a single
                      click.
                    </Typography>
                  </Box>
                </Box>

                {/* Feature 4 - Bulk label creation */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 3,
                    border: "1px solid #E0E0E0",
                    borderRadius: 2,
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: "#10B981",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} gap={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      color="text.primary"
                    >
                      Bulk label creation
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ lineHeight: 1.6, color: "text.primary" }}
                    >
                      Generate and print multiple labels at a time saving you
                      hours of time and add SKU codes to labels.
                    </Typography>
                  </Box>
                </Box>

                {/* Feature 5 - Picking and packing assistance */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 3,
                    border: "1px solid #E0E0E0",
                    borderRadius: 2,
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: "#10B981",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} gap={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      color="text.primary"
                    >
                      Picking and packing assistance
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ lineHeight: 1.6, color: "text.primary" }}
                    >
                      Use picking and packing slips and SKU codes to sort and
                      prioritise orders.
                    </Typography>
                  </Box>
                </Box>

                {/* Feature 6 - Returns management */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 3,
                    border: "1px solid #E0E0E0",
                    borderRadius: 2,
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: "#10B981",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} gap={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{ mb: 1 }}
                    >
                      Returns management
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ lineHeight: 1.6, color: "text.primary" }}
                    >
                      Easily generate returns labels where needed.
                    </Typography>
                  </Box>
                </Box>

                {/* Feature 7 - Automated payments */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 3,
                    border: "1px solid #E0E0E0",
                    borderRadius: 2,
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: "#10B981",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} gap={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{ mb: 1 }}
                    >
                      Automated payments -
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ lineHeight: 1.6, color: "text.primary" }}
                    >
                      Top up your account and enable auto top-up so funds never
                      run low.
                    </Typography>
                  </Box>
                </Box>

                {/* Feature 8 - Invoice management */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 3,
                    border: "1px solid #E0E0E0",
                    borderRadius: 2,
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: "#10B981",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{ mb: 1 }}
                    >
                      Invoice management
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: 1.6, color: "text.primary" }}
                    >
                      Create custom invoices for your business records.
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Paper>
          </Stack>

          {/* Customer Stories Slider Section */}
          <Stack spacing={4} alignItems="center" sx={{ width: "100%" }}>
            <Container
              maxWidth="lg"
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Swiper
                style={{ width: "100%", maxWidth: "1200px" }}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                {customerStories.map((story, index) => (
                  <SwiperSlide key={index}>
                    <Paper
                      elevation={0}
                      sx={{
                        borderRadius: 3,
                        overflow: "hidden",
                        border: `2px solid #E0E0E0`,
                        backgroundColor: "white",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {/* Image Container */}
                      <Box
                        sx={{
                          width: "100%",
                          height: 200,
                          overflow: "hidden",
                          // border: "1px solid #d30000ff",
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center", 
                        }}
                      >
                        <Image
                          src={story.image}
                          alt={story.title}
                          style={{
                            width: 150,
                          // border: "1px solid #00a030ff",
                            height: "auto", 
                            maxHeight: "100%", 
                            objectFit: "contain", 
                            display: "block", 
                          }}
                        />
                      </Box>
                      {/* Content */}
                      <Box
                        sx={{
                          p: 3,
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "center",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: "#1E3A8A",
                            mb: 2,
                            lineHeight: 1.3,
                          }}
                        >
                          {story.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.primary",
                            lineHeight: 1.6,
                            height: "80px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 2,
                          }}
                        >
                          {story.description}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#1E3A8A",
                            fontWeight: 600,
                            cursor: "pointer",
                            "&:hover": {
                              textDecoration: "underline",
                            },
                          }}
                        >
                          Read more &gt;
                        </Typography>
                      </Box>
                    </Paper>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Container>
          </Stack>

          {/* Save up to 13% on shipping rates section */}
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "white",
              borderRadius: 3,
              border: `2px solid #E0E0E0`,
              overflow: "hidden",
              mx: "auto",
              width: "100%",
            }}
          >
            <Grid container spacing={0}>
              {/* Left Column - Blue Background with Save Image */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    
                    
                    
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={SaveOn}
                    alt="Save with Smart Send - Parcels and savings graphic"
                    style={{
                      width: "100%",
                      height: "auto",
                      
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              {/* Right Column - White Background with Text Content */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    height: "100%",
                    p: { xs: 4, md: 6 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{
                      mb: 2,
                      color: "#1E3A8A",
                      lineHeight: 1.2,
                    }}
                  >
                    Save up to 13% on shipping rates with Smart Send
                  </Typography>

                  <Stack spacing={2}>
                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.6,
                        color: "text.primary",
                      }}
                    >
                      ParcelGo prioritises affordable shipping costs, and Smart
                      Send is even cheaper.
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.6,
                        color: "text.primary",
                      }}
                    >
                      Enjoy exclusive shipping rates on{" "}
                      <Box
                        component="span"
                        sx={{ color: "primary.main", fontWeight: 600 }}
                      >
                        Evri
                      </Box>{" "}
                      and{" "}
                      <Box
                        component="span"
                        sx={{ color: "primary.main", fontWeight: 600 }}
                      >
                        UPS
                      </Box>{" "}
                      and regular reductions on Smart Send services.
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.6,
                        color: "text.primary",
                        fontWeight: 500,
                      }}
                    >
                      You never have to worry about sky-high shipping rates.
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.6,
                        color: "text.primary",
                        fontWeight: 500,
                      }}
                    >
                      Save up to 13% on courier costs as standard, and enjoy
                      regular promotional discounts exclusive to Smart Send.
                    </Typography>

                    <Box sx={{ mt: 3 }}>
                      <UIButton
                        sx={{
                          fontWeight: "bold",
                          px: 4,
                          py: 1.5,
                        }}
                        size="large"
                        variant="contained"
                        color="primary"
                      >
                        Try Smart Send
                      </UIButton>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* Customer Reviews Section */}
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "#374151",
              borderRadius: 3,
              border: `2px solid #4B5563`,
              overflow: "hidden",
              mx: "auto",
              width: "100%",
            }}
          >
            <Grid container spacing={0}>
              {/* Left Column - Review Content */}
              <Grid item xs={12} md={8}>
                <Box
                  sx={{
                    backgroundColor: "#374151",
                    height: "100%",
                    p: { xs: 4, md: 6 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{
                      mb: 3,
                      color: "white",
                      fontSize: { xs: "1.8rem", md: "2.2rem" },
                      lineHeight: 1.2,
                    }}
                  >
                    Over 100,000 5 star reviews
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                      lineHeight: 1.6,
                      color: "white",
                      mb: 2,
                    }}
                  >
                    "The efficiency of ParcelGo has surpassed my expectations. I
                    have sent over 50 parcels in the last month and have been
                    kept up to date every step of the way from posting to
                    delivery. I have to say they are a very impressive company
                    to deal with and all parcels have been delivered promptly."
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "1rem",
                      color: "#D1D5DB",
                      fontWeight: 500,
                    }}
                  >
                    - Helen Rankin
                  </Typography>
                </Box>
              </Grid>

              {/* Right Column - Star Graphic */}
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    backgroundColor: "#374151",
                    height: "100%",
                    minHeight: { xs: "200px", md: "300px" },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 4,
                  }}
                >
                  <Image
                    src={Star}
                    alt="5 Star Rating - Customer satisfaction"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "200px",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Stack>
      </Container>
    </>
  );
};

export default SmartSend;
