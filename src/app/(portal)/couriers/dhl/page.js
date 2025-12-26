"use client"
import { DHLAbout, DHLBanner, DHLFreeTracking, DHLVan, FedexBanner2, UPSFreeTracking, World } from '@/assets'
import Faqs from '@/shared/common-layouts/faqs/faqs'
import DynamicBanner from '@/shared/components/banner/dynamic-banner'
import AboutSection from '@/shared/components/service-couriers/AboutSection'
import FreeTrackingSection from '@/shared/components/service-couriers/FreeTrackingSection'
import NavigationSection from '@/shared/components/service-couriers/NavigationSection'
import ServicesSection from '@/shared/components/service-couriers/ServicesSection'
import WhySendSection from '@/shared/components/service-couriers/WhySendSection'
import UIButton from '@/shared/pure-components/button/button'
import { faqsDHL } from '@/shared/constant/constant'
import { Box, Container, Grid, Paper, Stack, Typography, useTheme } from '@mui/material'
import Image from 'next/image'

const navigationItems = [
  "DHL Services",
  "About DHL Couriers",
  "DHL Tracking",
  "FAQs",
];

const dhlBenefits = [
  "Free parcel tracking on all services",
  "Next day UK delivery available",
  "Delivery notifications via text",
  "Send up to 25kg per parcel",
];

const dhlAboutParagraphs = [
  "DHL UK is one of the most well-known and trusted brands around the globe. It was created in San Francisco in the USA in 1969, but it is now owned by German logistics company Deutsche Post. Currently present in over 220 countries and territories, DHL UK strives to be the leading logistics company for UK and international needs.",
  "Offering a range of express logistical solutions that are focused around their customers, DHL home delivery makes sending parcels simpler. That’s why ParcelGo is proud to include them in our extensive delivery network.",
  "Get a DHL quote now with our quick quote tool - prices start from £8.14 exc VAT. Book your DHL shipping through ParcelGo and get reliable and safe door to door delivery."
];


const DHL = () => {
  const theme = useTheme();
  return (
    <>
      {/* Banner Section */}
      <DynamicBanner
        image1={
          <Image
            src={DHLBanner}
            alt="DHL Banner"
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
          Send a Parcel with DHL
        </Typography>
        <Typography variant="h6" fontWeight={"medium"}>
          Send from only £8.14 exc VAT
        </Typography>
      </DynamicBanner>

      <Container maxWidth="xl">
        <Stack spacing={7} alignItems="center" sx={{ py: 6 }}>
          {/* Navigation Section */}
          <NavigationSection navigationItems={navigationItems} />

          {/* Why send a parcel with DHL? */}
          <WhySendSection
            courierName="DHL"
            benefits={dhlBenefits}
            image={DHLVan}
            imageAlt="DHL Van"
          />

          {/* About DHL */}
          <AboutSection
            courierName="DHL Couriers"
            paragraphs={dhlAboutParagraphs}
            image={DHLAbout}
            imageAlt="DHL About"
            backgroundColor="lightBlue"
          />

          {/* DHL Services */}
          <ServicesSection
            title="DHL Services"
            image={World}
            imageAlt="DHL Services"
            items={[
              {
                heading: "",
                body: "With over 42 depots and 1,200 service points across the UK, you can rest assured that DHL UK has a service that’s right for you!",
              },
              {
                heading: "",
                body: "You can either book a DHL collection at a place of your choosing, or you can book DHL Drop Off Services if that is more convenient for your needs",
              },
            ]}
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
                  Collection Services
                </Typography>

                <Grid container spacing={3} justifyContent="center">
                  {/* DHL Drop Off */}
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
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            lineHeight: 1.2,
                          }}
                        >
                          DHL eCommerce UK Collection
                        </Typography>

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
                              From £8.14
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
                              £8.24
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

          {/* Free Tracking */}
          <FreeTrackingSection
            title="Free DHL Tracking"
            description="Looking for professional courier tracking at no extra cost? Get free parcel tracking on all DHL delivery services with ParcelGo."
            image={DHLFreeTracking}
            imageAlt="Free UPS Tracking"
          />

          {/* Faqs Section */}
          <Faqs faqa={faqsDHL} />
        </Stack>
      </Container>
    </>
  )
}

export default DHL