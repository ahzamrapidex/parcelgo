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
          {/* Illustration */}
          <Grid item xs={12} md={5} sx={{ backgroundColor: "white" }}>
            <Image
              src={World}
              alt="ParcelGo worldwide tracking"
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
            />
          </Grid>

          {/* Text Content */}
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
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
                Free Tracking with Every Parcel
              </Typography>

              <Typography variant="body1">
                All ParcelGo shipments include free online tracking so you
                always know where your parcel is.
              </Typography>

              <Typography variant="body1">
                Track your parcel anytime directly through the ParcelGo website
                with real-time updates.
              </Typography>

              <Typography variant="body1">
                From pickup to final delivery, ParcelGo keeps you informed at
                every step.
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
          {/* Illustration */}
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
              alt="ParcelGo express delivery"
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
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
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
                Fast & Reliable Delivery Made Simple
              </Typography>

              <Typography variant="body1">
                ParcelGo offers flexible delivery options designed to match your
                speed and budget needs.
              </Typography>

              <Typography variant="body1">
                Choose express or standard services based on urgency and
                destination.
              </Typography>

              <Typography variant="body1">
                Every delivery is handled with care to ensure safe and timely
                arrival.
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
