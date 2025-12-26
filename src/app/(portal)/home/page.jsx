"use client";
import {
  Delivery,
  Duck,
  Parcel,
  SignIn,
  Star,
  UK, // Changed from TikTok to UK
  USA,
  World,
} from "@/assets";
import Faqs from "@/shared/common-layouts/faqs/faqs";
import HomeBanner from "@/shared/components/banner/home-banner";
import { faqsHome, FLOW_SPACER } from "@/shared/constant/constant";
import theme from "@/shared/hoc/theme/theme";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";

const Home = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <HomeBanner
        title="Compare the Cheapest Parcel Delivery Prices*"
        description="Send from only £2.39 (£1.99 exc VAT)"
        image={Duck}
      />

      {/* Comparing Prices */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Stack textAlign={"center"} spacing={FLOW_SPACER} alignItems={"center"}>
          <Typography variant="h4" fontWeight={"bold"}>
            Compare Prices from Leading UK Parcel Couriers
          </Typography>

          <Typography
            fontWeight={"medium"}
            sx={{ maxWidth: "600px", lineHeight: "1.3", fontSize: "1.2rem" }}
          >
            We've helped people find the cheapest prices for over 83 million
            parcels since 2001. Join them and save on your next parcel delivery!
          </Typography>

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

            {/* UK Shipping Card - Changed from TikTok */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: theme.palette.background["200"],
                  color: "white",
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
                    Cheapest Shipping within the UK
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Fast and reliable domestic delivery across the UK with Royal
                    Mail, DPD, Evri and more top couriers!
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Image
                      src={UK}
                      alt="UK flag"
                      width={250}
                      height={250}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* USA Shipping Card */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: theme.palette.background["200"],
                  color: "white",
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
                    Cheapest Shipping to the USA
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Book fast and reliable delivery to the States with top
                    couriers like UPS, FedEx and more!
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Image
                      src={USA}
                      alt="USA flag"
                      width={250}
                      height={250}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Sign In Card */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: theme.palette.background["200"],
                  color: "white",
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
                    Already Have an Account? Sign In
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    Sign in to view your recent orders, send again & more!
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Image
                      src={SignIn}
                      alt="Sign in illustration"
                      width={250}
                      height={250}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Stack>
      </Container>

      {/* Parcel Delivery Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Card
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            backgroundColor: "background.white",
          }}
        >
          <Grid container>
            {/* Text Content */}
            <Grid item xs={12} md={7}>
              <Box sx={{ p: { xs: 4, md: 6 } }}>
                {/* Main Heading */}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    mb: 4,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    lineHeight: 1.2,
                  }}
                >
                  Cheap Parcel Delivery with the Best Prices — ParcelGo
                </Typography>

                {/* First Paragraph */}
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.6 }}
                >
                  At ParcelGo, we’re focused on offering{" "}
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    the cheapest parcel delivery
                  </Box>{" "}
                  for both domestic and international shipping. Our goal is
                  simple: get your parcel delivered safely at the{" "}
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    best possible price
                  </Box>{" "}
                  without compromising on service quality.
                </Typography>

                {/* Second Paragraph */}
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.6 }}
                >
                  We work with trusted courier partners to provide reliable
                  options for documents, parcels, and commercial shipments. You
                  can compare services based on speed and cost, and choose what
                  fits your needs — ParcelGo makes it straightforward.
                </Typography>

                {/* Call to Action */}
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  Get a{" "}
                  <Box
                    component="span"
                    sx={{ color: "text.primary", fontWeight: "bold" }}
                  >
                    quick quote
                  </Box>{" "}
                  in seconds and book your shipment with confidence.
                </Typography>

                <Divider sx={{ my: 4 }} />

                {/* Second Section Heading */}
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: "text.primary",
                    mb: 3,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                  }}
                >
                  Worldwide Delivery — Send a Parcel Anywhere
                </Typography>

                {/* Third Paragraph */}
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.6 }}
                >
                  Booking with ParcelGo is easy. Just enter your destination and
                  parcel measurements into our{" "}
                  <Box
                    component="span"
                    sx={{ color: "text.primary", fontWeight: "bold" }}
                  >
                    quote tool
                  </Box>{" "}
                  to view available services and pricing. You can compare
                  options and select the best balance of cost and delivery time.
                </Typography>

                {/* Fourth Paragraph */}
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.6 }}
                >
                  Whether you're shipping to{" "}
                  <Box
                    component="span"
                    sx={{ color: "text.primary", fontWeight: "bold" }}
                  >
                    USA
                  </Box>
                  ,{" "}
                  <Box
                    component="span"
                    sx={{ color: "text.primary", fontWeight: "bold" }}
                  >
                    Australia
                  </Box>{" "}
                  or anywhere else, ParcelGo supports{" "}
                  <Box
                    component="span"
                    sx={{ color: "text.primary", fontWeight: "bold" }}
                  >
                    worldwide delivery
                  </Box>{" "}
                  and provides the required support and documentation for
                  international shipping.
                </Typography>

                {/* Final Paragraph (Tracking) */}
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  Every shipment includes{" "}
                  <Box
                    component="span"
                    sx={{ color: "text.primary", fontWeight: "bold" }}
                  >
                    tracking
                  </Box>{" "}
                  so you can monitor progress and{" "}
                  <Box
                    component="span"
                    sx={{ color: "text.primary", fontWeight: "bold" }}
                  >
                    track your parcel on our website
                  </Box>{" "}
                  from dispatch to delivery.
                </Typography>
              </Box>
            </Grid>

            {/* Image */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  height: { xs: 300, md: "100%" },
                  position: "relative",
                  minHeight: 400,
                }}
              >
                <Image
                  src={Parcel}
                  alt="ParcelGo shipping and tracking"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>

      {/* Free Tracking Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid
          container
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          {/* Illustration - No Background */}
          <Grid item xs={12} md={5} sx={{ backgroundColor: "white" }}>
            <Image
              src={World}
              alt="Tracking illustration with globe and devices"
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
                flex: 1,
              }}
            />
          </Grid>

          {/* Text Content - Blue Background */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                p: { xs: 4, md: 6 },
                color: "white",
                background: theme.palette.background["200"],
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
                  lineHeight: 1.1,
                }}
              >
                Free Tracking on all Parcel Services
              </Typography>

              {/* First Paragraph */}
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}
              >
                Whether you need to send a parcel within the UK or overseas, at
                Parcel2Go you can always{" "}
                <Box
                  component="span"
                  sx={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  track a parcel
                </Box>{" "}
                for free.
              </Typography>

              {/* Second Paragraph */}
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}
              >
                We offer parcel tracking on all parcel delivery, including{" "}
                <Box
                  component="span"
                  sx={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  collection services
                </Box>{" "}
                as well as{" "}
                <Box
                  component="span"
                  sx={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  drop off services
                </Box>
                . So you can be certain that your parcel will arrive safely at
                no extra cost.
              </Typography>

              {/* Third Paragraph */}
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}
              >
                And for extra peace of mind, add{" "}
                <Box
                  component="span"
                  sx={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  Parcel Protection
                </Box>{" "}
                up to the value of £10,000. If you ever have an issue with a
                parcel, our customer service team is available 24/7 to help you.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Delivery Made Easy */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid
          container
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            backgroundColor: theme.palette.background["200"],
            color: "white",
            border: "1px solid #E0E3EA",
          }}
        >
          {/* Illustration - No Background */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: { xs: 2, md: 4 },
            }}
          >
            <Image
              src={Delivery}
              alt="Express delivery illustration"
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
                flex: 1,
              }}
            />
          </Grid>

          {/* Text Content */}
          <Grid
            item
            xs={12}
            md={7}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box sx={{ p: { xs: 3, md: 4 } }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  lineHeight: 1.1,
                }}
              >
                Express Delivery Made Easy
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  fontSize: "1.05rem",
                }}
              >
                Do you need your parcel to arrive{" "}
                <Box
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    display: "inline",
                  }}
                >
                  the next day
                </Box>
                ? Want it there before 9am? Or even the very{" "}
                <Box
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    display: "inline",
                  }}
                >
                  same day
                </Box>
                ?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  fontSize: "1.05rem",
                }}
              >
                We specialise in express delivery. Choose same day delivery with
                CitySprint or next day delivery is available with many of our{" "}
                <Box
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    display: "inline",
                  }}
                >
                  UK couriers
                </Box>{" "}
                and starts from just £1.99 exc VAT.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.05rem",
                }}
              >
                And if your parcel is of the highest importance, our{" "}
                <Box
                  component="span"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "underline",
                    display: "inline",
                  }}
                >
                  signed for delivery
                </Box>{" "}
                options offer that added layer of protection.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Faqs Section */}
      <Faqs faqa={faqsHome} />
    </>
  );
};

export default Home;
