"use client";

import {
  BussinessAccount,
  Coins,
  GetAQuote,
  SmartSend,
  SmartSend2,
  Star,
  TikTok,
} from "@/assets";
import Faqs from "@/shared/common-layouts/faqs/faqs";
import Calculator from "@/shared/components/calculator/calculator";
import DynamicBanner from "@/shared/components/banner/dynamic-banner";
import { faqsQuickQuote, FLOW_SPACER } from "@/shared/constant/constant";
import theme from "@/shared/hoc/theme/theme";
import TableContainer from "@/shared/pure-components/table/TableContainer";
import { StyledTableRow } from "@/shared/pure-components/table/ui";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  TableCell,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Fragment } from "react";

const tableHeaders = [
  "Courier",
  "Service",
  "Est. Delivery",
  "Price (from)",
  "Tracking",
  "Max Weight",
];

const courierRows = [
  {
    courier: "Royal Mail",
    service: "Tracked 24",
    eta: "1-2 business days",
    price: "£3.49",
    tracking: "End-to-end",
    maxWeight: "20 kg",
  },
  {
    courier: "DPD",
    service: "Next Day",
    eta: "Next business day",
    price: "£5.99",
    tracking: "Real-time",
    maxWeight: "30 kg",
  },
  {
    courier: "Evri",
    service: "Standard",
    eta: "2-4 business days",
    price: "£2.99",
    tracking: "Basic",
    maxWeight: "15 kg",
  },
  {
    courier: "FedEx",
    service: "International Priority",
    eta: "1-3 business days",
    price: "£14.99",
    tracking: "Advanced",
    maxWeight: "68 kg",
  },
  {
    courier: "CitySprint",
    service: "Next Day",
    eta: "Next business day",
    price: "£4.99",
    tracking: "Real-time",
    maxWeight: "25 kg",
  },
  {
    courier: "Parcelforce",
    service: "Standard",
    eta: "2-4 business days",
    price: "£2.99",
    tracking: "Basic",
    maxWeight: "15 kg",
  },
];

const renderRow = (item, index) => (
  <StyledTableRow key={index}>
    <TableCell>{item.courier}</TableCell>
    <TableCell>{item.service}</TableCell>
    <TableCell>{item.eta}</TableCell>
    <TableCell>{item.price}</TableCell>
    <TableCell>{item.tracking}</TableCell>
    <TableCell>{item.maxWeight}</TableCell>
  </StyledTableRow>
);

const page = () => {
  return (
    <>
      {/* Banner Section */}
      <DynamicBanner
        image1={
          <Image
            src={GetAQuote}
            alt="Get a Quote"
            width={250}
            height={"auto"}
          />
        }
        image2={
          <Image
            src={GetAQuote}
            alt="Get a Quote"
            width={250}
            height={"auto"}
          />
        }
        isCalculator={true}
      >
        <Typography variant="h3" fontWeight={"bold"}>
          Get a Quote
        </Typography>
        <Typography variant="h4" fontWeight={"medium"}>
          Postage Costs from just £1.99 exc VAT
        </Typography>
      </DynamicBanner>

      {/* Cards Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        {/* Card Container */}
        <Grid container spacing={3}>
          {/* Trustpilot Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                background: theme.palette.background["200"],
                color: "white",
                borderRadius: 3,
                overflow: "hidden",
                height: "fit-content",
              }}
            >
              <CardContent
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  We're Rated Great on Trustpilot
                </Typography>
                <Typography variant="body1" sx={{ height: "6rem" }}>
                  Based on over 150,000 independent and verified reviews.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Image
                    src={Star}
                    alt="star"
                    width={250}
                    height={250}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* TikTok Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: "white",
                borderRadius: 3,
                border: "1px solid #e0e0e0",
                height: "fit-content",
              }}
            >
              <CardContent
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  TikTok's New 50p Shipping Fee Explained
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Learn about TikTok's new shipping fee and how Smart Send keeps
                  your postage costs low.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Image
                    src={TikTok}
                    alt="star"
                    width={250}
                    height={250}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                {/* <Button
                    variant="text"
                    sx={{
                      color: '#4A90E2',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      justifyContent: 'flex-start',
                      pl: 0
                    }}
                  >
                    Read More →
                  </Button> */}
              </CardContent>
            </Card>
          </Grid>

          {/* USA Shipping Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: "white",
                borderRadius: 3,
                border: "1px solid #e0e0e0",
                height: "fit-content",
              }}
            >
              <CardContent
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Integrate With Smart Send
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Link your sales channels with our free shipping management
                  tool to ship all your orders from one place.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Image
                    src={SmartSend2}
                    alt="star"
                    width={250}
                    height={250}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                {/* <Button
                    variant="text"
                    sx={{
                      color: '#4A90E2',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      justifyContent: 'flex-start',
                      pl: 0
                    }}
                  >
                    Get a Quote →
                  </Button> */}
              </CardContent>
            </Card>
          </Grid>

          {/* Sign In Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: "white",
                borderRadius: 3,
                border: "1px solid #e0e0e0",
                height: "fit-content",
              }}
            >
              <CardContent
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  Open a Business Account
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Save up to 42% on collection services When you sign up for a
                  ParcelGo Business Account
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Image
                    src={BussinessAccount}
                    alt="star"
                    width={250}
                    height={250}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                {/* <Button
                    variant="text"
                    sx={{
                      color: '#4A90E2',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      justifyContent: 'flex-start',
                      pl: 0
                    }}
                  >
                    Go to Sign In →
                  </Button> */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Comapare Couriers */}
      <Container maxWidth={"lg"}>
        <Stack spacing={6} py={8}>
          <Typography variant="h4" fontWeight={"bold"} textAlign={"center"}>
            Compare Couriers
          </Typography>

          <TableContainer
            spanTd={tableHeaders.length}
            isLoading={false}
            isContent={courierRows.length}
            thContent={tableHeaders.map((label, i) => (
              <TableCell key={i}>
                <Typography
                  variant="h6"
                  color="text.primary"
                  fontWeight={"bold"}
                >
                  {label}
                </Typography>
              </TableCell>
            ))}
          >
            {courierRows?.map((item, i) => {
              return <Fragment key={i + 1}>{renderRow(item, i)}</Fragment>;
            })}
          </TableContainer>
        </Stack>
        {/* <CompareCouriers /> */}
      </Container>

      {/* Business Account Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid
          container
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            backgroundColor: "#2E5B8A",
            color: "white",
            minHeight: 400,
          }}
        >
          {/* Text Content */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                p: { xs: 4, md: 6 },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* Main Heading */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  lineHeight: 1.2,
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                }}
              >
                Save up to 42% with a Business Account
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  lineHeight: 1.6,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  opacity: 0.9,
                }}
              >
                If you regularly send over 25 parcels a week, you could save up
                to 42% on collection services when you open a ParcelGo Business
                Account. We currently offer business accounts with Parcelforce,
                DPD and Evri to bring you the cheapest postage costs.
              </Typography>

              {/* Features List */}
              <Stack spacing={2} sx={{ mb: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "0.95rem", md: "1rem" } }}
                  >
                    Discounted rates that are automatically applied to your
                    account
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "0.95rem", md: "1rem" } }}
                  >
                    1-2 hour collection windows at a time that works for you
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "0.95rem", md: "1rem" } }}
                  >
                    A dedicated ParcelGo account manager and phone number
                  </Typography>
                </Box>
              </Stack>

              {/* CTA Button */}
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "white",
                  color: "#2E5B8A",
                  fontWeight: "bold",
                  textTransform: "none",
                  borderRadius: 2,
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  alignSelf: "flex-start",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                  },
                }}
                endIcon={
                  <Box
                    component="span"
                    sx={{
                      display: "inline-block",
                      ml: 1,
                      fontSize: "1.2rem",
                    }}
                  >
                    →
                  </Box>
                }
              >
                Open an Account
              </Button>
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                height: { xs: 300, md: "100%" },
                position: "relative",
                minHeight: 400,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: { xs: 2, md: 4 },
              }}
            >
              <Image
                src={Coins}
                alt="Business savings with coins"
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                  maxWidth: 400,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Smart Send Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid
          container
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            backgroundColor: "#2E5B8A",
            color: "white",
            minHeight: 400,
          }}
        >
          {/* Text Content */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                p: { xs: 4, md: 6 },
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* Main Heading */}
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  lineHeight: 1.2,
                  fontSize: { xs: "1.8rem", md: "2.2rem" },
                }}
              >
                Free Shipping Software for a Growing Business
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  lineHeight: 1.6,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  opacity: 0.9,
                }}
              >
                If you send parcels from different marketplaces,{" "}
                <Box component="span" sx={{ fontWeight: "bold" }}>
                  Smart Send
                </Box>{" "}
                can save you bags of time. Using our free shipping management
                tool will secure you the cheapest shipping prices with eBay,
                Amazon and more! Use Smart Send to:
              </Typography>

              {/* Features List */}
              <Stack spacing={2} sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "0.95rem", md: "1rem" } }}
                  >
                    Manage shipping from multiple sales channels all from one
                    place
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "0.95rem", md: "1rem" } }}
                  >
                    Set up rules to automate your shipping with Rule Manager
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: "0.95rem", md: "1rem" } }}
                  >
                    Update customers in seconds with Auto Send
                  </Typography>
                </Box>
              </Stack>

              {/* Additional Info */}
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  lineHeight: 1.6,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  opacity: 0.9,
                }}
              >
                You can even link your own website by applying for a
                ParcelGo.com API key in your 'Linked Accounts'.
              </Typography>

              {/* CTA Button */}
              <Button
                variant="text"
                size="large"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "none",
                  fontSize: "1.1rem",
                  alignSelf: "flex-start",
                  px: 0,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
                endIcon={
                  <Box
                    component="span"
                    sx={{
                      display: "inline-block",
                      ml: 1,
                      fontSize: "1.2rem",
                    }}
                  >
                    →
                  </Box>
                }
              >
                Unlock Quicker Shipping
              </Button>
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                height: { xs: 300, md: "100%" },
                position: "relative",
                minHeight: 400,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: { xs: 2, md: 4 },
              }}
            >
              <Image
                src={SmartSend}
                alt="Smart Send shipping management software"
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "100%",
                  maxWidth: 400,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
      {/* Faqs Section */}
      <Stack mb={8}>
        <Faqs faqa={faqsQuickQuote} />
      </Stack>
    </>
  );
};

export default page;
