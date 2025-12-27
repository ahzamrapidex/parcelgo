// Update src/app/(portal)/quick-quote/page.jsx
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
  Chip,
  Paper,
  Divider,
} from "@mui/material";
import Image from "next/image";
import { Fragment } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';

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

      {/* Instant Pricing Section */}
      <Box sx={{ backgroundColor: theme.palette.background["200"], py: 6 }}>
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center">
            <Typography 
              variant="h4" 
              fontWeight="bold" 
              textAlign="center"
              sx={{ color: "white", mb: 2 }}
            >
              Get Your Price in 30 Seconds
            </Typography>
            <Typography 
              variant="h6" 
              textAlign="center"
              sx={{ color: "white", opacity: 0.9, maxWidth: "600px" }}
            >
              Smart comparison technology finds the best delivery deals instantly
            </Typography>

            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 4, 
                    borderRadius: 3, 
                    backgroundColor: "white",
                    height: "100%",
                    border: "1px solid rgba(255,255,255,0.1)"
                  }}
                >
                  <Stack spacing={2} alignItems="center">
                    <CheckCircleIcon sx={{ fontSize: 40, color: "success.main" }} />
                    <Typography variant="h6" fontWeight="bold" textAlign="center">
                      Instant Price Matching
                    </Typography>
                    <Typography variant="body1" textAlign="center" color="text.secondary">
                      Real-time rates from 15+ carriers. Compare options side-by-side without the runaround.
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 4, 
                    borderRadius: 3, 
                    backgroundColor: "white",
                    height: "100%",
                    border: "1px solid rgba(255,255,255,0.1)"
                  }}
                >
                  <Stack spacing={2} alignItems="center">
                    <SecurityIcon sx={{ fontSize: 40, color: "primary.main" }} />
                    <Typography variant="h6" fontWeight="bold" textAlign="center">
                      Zero Hidden Costs
                    </Typography>
                    <Typography variant="body1" textAlign="center" color="text.secondary">
                      What you see is exactly what you pay. No surprise fees or inflated "handling charges".
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 4, 
                    borderRadius: 3, 
                    backgroundColor: "white",
                    height: "100%",
                    border: "1px solid rgba(255,255,255,0.1)"
                  }}
                >
                  <Stack spacing={2} alignItems="center">
                    <SpeedIcon sx={{ fontSize: 40, color: "warning.main" }} />
                    <Typography variant="h6" fontWeight="bold" textAlign="center">
                      Live Delivery Windows
                    </Typography>
                    <Typography variant="body1" textAlign="center" color="text.secondary">
                      Actual pickup and delivery times. Not vague estimates that leave you guessing.
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 4, 
                    borderRadius: 3, 
                    backgroundColor: "white",
                    height: "100%",
                    border: "1px solid rgba(255,255,255,0.1)"
                  }}
                >
                  <Stack spacing={2} alignItems="center">
                    <TrendingUpIcon sx={{ fontSize: 40, color: "success.main" }} />
                    <Typography variant="h6" fontWeight="bold" textAlign="center">
                      Smart Route Optimization
                    </Typography>
                    <Typography variant="body1" textAlign="center" color="text.secondary">
                      Our system finds the fastest path to your destination. Better routes mean better prices.
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>

            <Typography 
              variant="body2" 
              textAlign="center"
              sx={{ color: "white", opacity: 0.8, mt: 4, fontStyle: "italic" }}
            >
              Enter your details above and see why thousands choose our instant quotes over slow traditional brokers
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Trust & Features Section */}
     <Container maxWidth="xl" sx={{ py: 8 }}>
  <Grid container spacing={4}>
    {/* Trusted by Users */}
    <Grid item xs={12} sm={6} lg={3}>
      <Card
        sx={{
          height: "100%",
          background: theme.palette.background["200"],
          color: "white",
          borderRadius: 3,
          overflow: "hidden",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          },
        }}
      >
        <CardContent sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Trusted by 150,000+ Shippers
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
            Real customers use Parcel Go to compare prices and book shipments with confidence—no hidden fees, no surprises at checkout.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Image src={Star} alt="5 star rating" width={200} height={40} style={{ objectFit: "contain" }} />
          </Box>
          <Chip
            label="Rated 4.8/5 by Verified Users"
            sx={{ mt: 2, backgroundColor: "rgba(255,255,255,0.2)", color: "white", fontWeight: "bold" }}
          />
        </CardContent>
      </Card>
    </Grid>

    {/* Instant Quote */}
    <Grid item xs={12} sm={6} lg={3}>
      <Card
        sx={{
          height: "100%",
          backgroundColor: "white",
          borderRadius: 3,
          border: "1px solid #e0e0e0",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          },
        }}
      >
        <CardContent sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "primary.main" }}>
            Instant, Accurate Quotes
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
            Our pricing engine compares carriers and routes in real time to show you the best available shipping rates—instantly.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Image src={TikTok} alt="Smart pricing technology" width={200} height={120} style={{ objectFit: "contain" }} />
          </Box>
          <Chip label="Save up to 40% per Shipment" color="primary" sx={{ mt: 2, fontWeight: "bold" }} />
        </CardContent>
      </Card>
    </Grid>

    {/* Quote → Book Flow */}
    <Grid item xs={12} sm={6} lg={3}>
      <Card
        sx={{
          height: "100%",
          backgroundColor: "white",
          borderRadius: 3,
          border: "1px solid #e0e0e0",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          },
        }}
      >
        <CardContent sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "success.main" }}>
            Quote → Book in Minutes
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
            Get your quote, choose a carrier, and book your shipment in just a few clicks. No manual follow-ups required.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Image src={SmartSend2} alt="Quick booking" width={200} height={120} style={{ objectFit: "contain" }} />
          </Box>
          <Chip label="No Account Needed" color="success" sx={{ mt: 2, fontWeight: "bold" }} />
        </CardContent>
      </Card>
    </Grid>

    {/* Business Account */}
    <Grid item xs={12} sm={6} lg={3}>
      <Card
        sx={{
          height: "100%",
          backgroundColor: "white",
          borderRadius: 3,
          border: "1px solid #e0e0e0",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          },
        }}
      >
        <CardContent sx={{ p: 4, textAlign: "center" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "warning.main" }}>
            Shipping More? Pay Less
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
            High-volume shippers get access to discounted rates, consolidated billing, and priority support.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Image src={BussinessAccount} alt="Business account benefits" width={200} height={120} style={{ objectFit: "contain" }} />
          </Box>
          <Chip
            label="Up to 42% Lower Rates"
            sx={{ mt: 2, backgroundColor: "warning.main", color: "white", fontWeight: "bold" }}
          />
        </CardContent>
      </Card>
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