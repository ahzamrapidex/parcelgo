"use client";
import {
  FedEx,
  FedExAbout,
  FedexBanner,
  FedexBanner2,
  FedexInnerCards,
  FedexLogo,
  FedexTracking,
  NearestLocation,
  World,
} from "@/assets";
import InputField from "@/shared/form-control/InputField";
import UIButton from "@/shared/pure-components/button/button";
import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  useTheme,
  Grid,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import DynamicBanner from "@/shared/components/banner/dynamic-banner";
import AboutSection from "@/shared/components/service-couriers/AboutSection";
import FreeTrackingSection from "@/shared/components/service-couriers/FreeTrackingSection";
import NavigationSection from "@/shared/components/service-couriers/NavigationSection";
import ServicesSection from "@/shared/components/service-couriers/ServicesSection";
import WhySendSection from "@/shared/components/service-couriers/WhySendSection";
import Image from "next/image";
import "swiper/css";
// navigation removed
import Faqs from "@/shared/common-layouts/faqs/faqs";
import { faqsFedex } from "@/shared/constant/constant";

const Couriers = () => {
  const theme = useTheme();

  const navigationItems = [
    "FedEx Services",
    "About FedEx Couriers",
    "FedEx Tracking",
    "FAQs",
  ];

  const fedexBenefits = [
    "Send overseas in 3 working days",
    "Parcel protection worth up to £10,000 on selected services",
    "Send parcels up to 120cm in length",
    "Free parcel tracking on all services",
  ];

  const fedexAboutParagraphs = [
    `The FedEx Express delivery service was founded as "Federal Express" in 1971 in a small town in Arkansas, United States. From there FedEx Express has grown consistently and now has over 280,000 employees.`,
    `FedEx Express <span style="color: ${theme.palette.primary.main}; font-weight: 600;">international courier</span> services now have a fleet of over 671 aircraft and 43,000 road vehicles across the world. They also have 1,200 service centres across the globe. Approximately 3.1 million packages are delivered by FedEx Express worldwide each day.`,
    `Send a parcel with FedEx from just £3.65 exc VAT today. Get your FedEx Express quote now with our <span style="color: ${theme.palette.primary.main}; text-decoration: underline;">quick quote</span> tool.`,
  ];

  return (
    <>
      <DynamicBanner
        image1={
          <Image
            src={FedexBanner}
            alt="Fedex Banner"
            width={350}
            style={{ height: "auto" }}
          />
        }
        isCalculator={true}
        image2={
          <Image
            src={FedexBanner2}
            alt="Fedex Banner"
            width={350}
            style={{ height: "auto" }}
          />
        }
      >
        <Typography variant="h3" fontWeight={"bold"}>
          Send a Parcel with FedEx Express
        </Typography>
        <Typography variant="h6" fontWeight={"medium"}>
          Send from only £3.65 exc VAT
        </Typography>
      </DynamicBanner>

      <Container maxWidth="xl">
        <Stack spacing={7} alignItems="center" sx={{ py: 6 }}>
          {/* Navigation Section */}
          <NavigationSection navigationItems={navigationItems} />

          {/* FedEx Express Services */}
          <ServicesSection
            title="FedEx Express Services"
            image={World}
            imageAlt="FedEx Services"
            items={[
              {
                heading: "Economy Service",
                body: "FedEx Express courier services are highly reputable, and by choosing to send your parcel through us, you can rest assured it will arrive quickly and safely. FedEx Express Economy delivery offers worldwide delivery within 3–5 working days and can be tracked from collection until it reaches its recipient. You can use a FedEx Express drop off point to send your parcel across the UK or internationally from door to door.",
              },
              {
                heading: "Express Delivery",
                body: "Once your FedEx Express parcel is collected from a FedEx Express collection point or from your home, your item will be delivered within 2–3 working days throughout worldwide destinations. And thanks to the latest technology you can check the progress of your parcel online with FedEx Express international delivery tracking.",
              },
            ]}
          />

          {/* Find Nearest Drop-off Point Section */}
          <Paper
            sx={{
              p: 4,
              borderRadius: 3,
              backgroundColor: "white",
              border: `2px solid #E0E0E0`,
              width: { xs: "100%", md: "80%" },
            }}
            elevation={0}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={6}
              alignItems={"center"}
            >
              {/* Left side - Image */}
              <Box sx={{ width: { xs: "100%", md: "45%" }, maxWidth: "370px" }}>
                <Box
                  component="img"
                  src={NearestLocation.src}
                  alt="Drop-off Location"
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* Right side - Content */}
              <Stack
                spacing={2}
                sx={{
                  // width: { xs: '100%', md: '55%' },
                  justifyContent: "center",
                  alignItems: { xs: "flex-start", md: "center" },
                  textAlign: { xs: "left", md: "center" },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: theme.typography.Bold,
                    color: theme.palette.text.primary,
                  }}
                >
                  Find Your Nearest FedEx Express Drop-Off Point
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  Simply enter the name of your nearest town or postcode in the
                  box below to search for your nearest FedEx drop-off point.
                </Typography>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    mt: 2,
                    width: "100%",
                    maxWidth: 720,
                    mx: { xs: 0, md: "auto" },
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <InputField
                      placeholder="Enter Town or Postcode"
                      fullWidth
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          backgroundColor: "white",
                        },
                      }}
                    />
                  </Box>
                  <UIButton
                    variant="contained"
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                      },
                    }}
                  >
                    Search
                  </UIButton>
                </Stack>
              </Stack>
            </Stack>
          </Paper>

          {/* Why send a parcel with FedEx Express? */}
          <WhySendSection
            courierName="FedEx Express"
            benefits={fedexBenefits}
            image={FedEx}
            imageAlt="FedEx Van"
          />

          {/* International Delivery Services */}
          <Container maxWidth="lg">
            <Stack spacing={6} alignItems="center">
              <Typography
                variant="h3"
                sx={{
                  fontWeight: theme.typography.Bold,
                  color: theme.palette.text.primary,
                  textAlign: "center",
                }}
              >
                International Delivery Services
              </Typography>

              {/* Drop Off Services Section */}
              <Stack spacing={4} sx={{ width: "100%" }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: theme.typography.Bold,
                    color: theme.palette.text.primary,
                    textAlign: "center",
                  }}
                >
                  Drop Off Services
                </Typography>

                <Grid container spacing={3} justifyContent="center">
                  {/* FedEx Economy Drop Off */}
                  <Grid item xs={12} sm={6} md={4}>
                    <Paper
                      elevation={0}
                      sx={{
                        flex: 1,
                        p: 4,
                        borderRadius: 3,
                        border: `2px solid #E0E0E0`,
                        backgroundColor: "white",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: theme.palette.primary.main,
                          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      <Stack spacing={3}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            flexWrap: "wrap",
                          }}
                        >
                          <Image
                            src={FedexLogo}
                            alt="FedEx Logo"
                            width={88}
                            height={28}
                            style={{ height: 28, width: "auto" }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: theme.palette.text.primary,
                              lineHeight: 1.2,
                            }}
                          >
                            FedEx Economy Drop Off
                          </Typography>
                        </Box>

                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontWeight: 500,
                          }}
                        >
                          Est Delivery:Mon 22 Sep - Wed 24 Sep
                        </Typography>

                        <Stack spacing={2}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              p: 2,
                              backgroundColor: "#F8F9FA",
                              borderRadius: 2,
                            }}
                          >
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              £3.65
                            </Typography>
                            <UIButton
                              variant="outlined"
                              sx={{
                                borderColor: theme.palette.primary.main,
                                color: theme.palette.primary.main,
                                "&:hover": {
                                  backgroundColor: theme.palette.primary.main,
                                  color: "white",
                                },
                              }}
                            >
                              Book without Protection
                            </UIButton>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              p: 2,
                              backgroundColor: theme.palette.primary.light,
                              borderRadius: 2,
                            }}
                          >
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              £3.70
                            </Typography>
                            <UIButton
                              variant="contained"
                              sx={{
                                backgroundColor: theme.palette.primary.main,
                                "&:hover": {
                                  backgroundColor: theme.palette.primary.dark,
                                },
                              }}
                            >
                              Book with £20 Protection
                            </UIButton>
                          </Box>
                        </Stack>
                      </Stack>
                    </Paper>

                  </Grid>
                  {/* FedEx Priority Drop Off */}
                  <Grid item xs={12} sm={6} md={4} >
                    <Paper
                      elevation={0}
                      sx={{
                        flex: 1,
                        p: 4,
                        borderRadius: 3,
                        border: `2px solid #E0E0E0`,
                        backgroundColor: "white",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: theme.palette.primary.main,
                          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      <Stack spacing={3}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            flexWrap: "wrap",
                          }}
                        >
                          <Image
                            src={FedexLogo}
                            alt="FedEx Logo"
                            width={88}
                            height={28}
                            style={{ height: 28, width: "auto" }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: theme.palette.text.primary,
                              lineHeight: 1.2,
                            }}
                          >

                            FedEx Priority Drop Off
                          </Typography>
                        </Box>

                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontWeight: 500,
                          }}
                        >
                          Est Delivery:Mon 22 Sep - Tue 23 Sep
                        </Typography>

                        <Stack spacing={2}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              p: 2,
                              backgroundColor: "#F8F9FA",
                              borderRadius: 2,
                            }}
                          >
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              From £4.85
                            </Typography>
                            <UIButton
                              variant="outlined"
                              sx={{
                                borderColor: theme.palette.primary.main,
                                color: theme.palette.primary.main,
                                "&:hover": {
                                  backgroundColor: theme.palette.primary.main,
                                  color: "white",
                                },
                              }}
                            >
                              Book without Protection
                            </UIButton>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              p: 2,
                              backgroundColor: theme.palette.primary.light,
                              borderRadius: 2,
                            }}
                          >
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              £4.90
                            </Typography>
                            <UIButton
                              variant="contained"
                              sx={{
                                backgroundColor: theme.palette.primary.main,
                                "&:hover": {
                                  backgroundColor: theme.palette.primary.dark,
                                },
                              }}
                            >
                              Book with £20 Protection
                            </UIButton>
                          </Box>
                        </Stack>
                      </Stack>
                    </Paper>
                  </Grid>
                </Grid>
              </Stack>

              {/* Collection Services Section */}
              <Stack spacing={4} sx={{ width: "100%" }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: theme.typography.Bold,
                    color: theme.palette.text.primary,
                    textAlign: "center",
                  }}
                >
                  Collection Services
                </Typography>
                <Grid container spacing={3} sx={{ width: "100%" }} justifyContent="center">
                  {/* FedEx Economy Collection */}
                  <Grid item xs={12} sm={6} md={4}>
                    <Paper
                      elevation={0}
                      sx={{
                        flex: 1,
                        p: 4,
                        borderRadius: 3,
                        border: `2px solid #E0E0E0`,
                        backgroundColor: "white",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: theme.palette.primary.main,
                          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      <Stack spacing={3}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            flexWrap: "wrap",
                          }}
                        >
                          <Image
                            src={FedexLogo}
                            alt="FedEx Logo"
                            width={88}
                            height={28}
                            style={{ height: 28, width: "auto" }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: theme.palette.text.primary,
                              lineHeight: 1.2,
                            }}
                          >
                            FedEx Economy Collection
                          </Typography>
                        </Box>

                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontWeight: 500,
                          }}
                        >
                          Est Delivery:Tue 23 Sep - Thu 02 Oct
                        </Typography>

                        <Stack spacing={2}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              p: 2,
                              backgroundColor: "#F8F9FA",
                              borderRadius: 2,
                            }}
                          >
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              From £6.99
                            </Typography>
                            <UIButton
                              variant="outlined"
                              sx={{
                                borderColor: theme.palette.primary.main,
                                color: theme.palette.primary.main,
                                "&:hover": {
                                  backgroundColor: theme.palette.primary.main,
                                  color: "white",
                                },
                              }}
                            >
                              Book without Protection
                            </UIButton>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              p: 2,
                              backgroundColor: theme.palette.primary.light,
                              borderRadius: 2,
                            }}
                          >
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              £7.09
                            </Typography>
                            <UIButton
                              variant="contained"
                              sx={{
                                backgroundColor: theme.palette.primary.main,
                                "&:hover": {
                                  backgroundColor: theme.palette.primary.dark,
                                },
                              }}
                            >
                              Book with £20 Protection
                            </UIButton>
                          </Box>
                        </Stack>
                      </Stack>
                    </Paper>
                  </Grid>

                  {/* FedEx Priority Collection */}
                  <Grid item xs={12} sm={6} md={4}>
                    <Paper
                      elevation={0}
                      sx={{
                        flex: 1,
                        p: 4,
                        borderRadius: 3,
                        border: `2px solid #E0E0E0`,
                        backgroundColor: "white",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: theme.palette.primary.main,
                          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      <Stack spacing={3}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            flexWrap: "wrap",
                          }}
                        >
                          <Image
                            src={FedexLogo}
                            alt="FedEx Logo"
                            width={88}
                            height={28}
                            style={{ height: 28, width: "auto" }}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: theme.palette.text.primary,
                              lineHeight: 1.2,
                            }}
                          >
                            FedEx Priority Collection
                          </Typography>
                        </Box>

                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontWeight: 500,
                          }}
                        >
                          Est Delivery:Mon 22 Sep - Tue 30 Sep
                        </Typography>

                        <Stack spacing={2}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              p: 2,
                              backgroundColor: "#F8F9FA",
                              borderRadius: 2,
                            }}
                          >
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              £8.29
                            </Typography>
                            <UIButton
                              variant="outlined"
                              sx={{
                                borderColor: theme.palette.primary.main,
                                color: theme.palette.primary.main,
                                "&:hover": {
                                  backgroundColor: theme.palette.primary.main,
                                  color: "white",
                                },
                              }}
                            >
                              Book without Protection
                            </UIButton>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              p: 2,
                              backgroundColor: theme.palette.primary.light,
                              borderRadius: 2,
                            }}
                          >
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              £8.39
                            </Typography>
                            <UIButton
                              variant="contained"
                              sx={{
                                backgroundColor: theme.palette.primary.main,
                                "&:hover": {
                                  backgroundColor: theme.palette.primary.dark,
                                },
                              }}
                            >
                              Book with £20 Protection
                            </UIButton>
                          </Box>
                        </Stack>
                      </Stack>
                    </Paper>
                  </Grid>
                </Grid>
              </Stack>
            </Stack>
          </Container>

          {/* About Fedex */}
          <AboutSection
            courierName="FedEx Express"
            paragraphs={fedexAboutParagraphs}
            image={FedExAbout}
            imageAlt="FedEx About"
            backgroundColor="lightBlue"
          />

          {/* Free Tracking */}
          <FreeTrackingSection
            title="Free FedEx Tracking"
            description="Looking for professional courier tracking at no extra cost? Get free parcel tracking on all FedEx delivery services with ParcelGo."
            ctaText="Track Your FedEx Parcel"
            image={FedexTracking}
            imageAlt="FedEx Free Tracking"
            backgroundColor="lightBlue"
          />

          {/* Guides Slider */}
          <Container maxWidth="lg">
            <Swiper
              style={{ width: "100%" }}
              slidesPerView={3}
              spaceBetween={30}
            // navigation removed
            >
              {FedexInnerCards.map((card, index) => (
                <SwiperSlide key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      border: `2px solid #E0E0E0`,
                      backgroundColor: "white",
                    }}
                  >
                    <Box
                      component="img"
                      src={
                        card.image && card.image.src
                          ? card.image.src
                          : card.image
                      }
                      alt={card.title}
                      sx={{
                        width: "100%",
                        height: 180,
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    <Box sx={{ p: 2.5 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          minHeight: "70px",
                          lineHeight: "1.3",
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          mt: 1.5,
                          color: theme.palette.primary.main,
                          cursor: "pointer",
                        }}
                      >
                        Read More
                      </Typography>
                    </Box>
                  </Paper>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>

          {/* Faqs Section */}
          <Faqs faqa={faqsFedex} />
        </Stack>
      </Container>
    </>
  );
};

export default Couriers;
