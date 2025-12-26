"use client"
import { AboutDPD, DPDBanner, DPDservices, FedexBanner2, FedexTracking, WhyDPD, DPDLogo } from '@/assets'
import Faqs from '@/shared/common-layouts/faqs/faqs'
import DynamicBanner from '@/shared/components/banner/dynamic-banner'
import AboutSection from '@/shared/components/service-couriers/AboutSection'
import FreeTrackingSection from '@/shared/components/service-couriers/FreeTrackingSection'
import NavigationSection from '@/shared/components/service-couriers/NavigationSection'
import ServicesSection from '@/shared/components/service-couriers/ServicesSection'
import WhySendSection from '@/shared/components/service-couriers/WhySendSection'
import UIButton from '@/shared/pure-components/button/button'
import { faqsdpd } from '@/shared/constant/constant'
import { Box, Container, Grid, Paper, Stack, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const DPD = () => {
  const theme = useTheme();

  const navigationItems = [
    "DPD Delivery Services",
    "About DPD Couriers",
    "DPD Tracking",
    "FAQs",
  ];

  const fedexBenefits = [
    "1-hour collection and delivery windows",
    "Exclusive tracking features with DPD Predict",
    "Over 6,000 Drop Off Points",
    "Parcel Protection up to £10,000 on selected services",
    "Send up to 30kg per parcel",
  ];


  const dpdAboutParagraphs = [
    `As one of Europe’s biggest parcel services, DPD is owned by La Poste, a French company and the second largest postal group in Europe. DPD - which stands for Dynamic Parcel Distribution - has been around in several forms since the 1980s, but DPD has become one of the most experienced couriers in the industry by delivering over 300 million parcels every year.`,
    `With over 500 depots in 185 countries and territories, you can rest assured that DPD courier services are tailored to meet high demand both locally and internationally. DPD Express and its other shipping services offer quick and reliable door to door services across the UK and international locations.`,
    `DPD offers a service for all types of senders, whether you are a one-time sender or you need to send in bulk for your online e-commerce shop. Furthermore, if you need to ship worldwide, DPD is well-equipped to handle any demand you have, allowing you to send up to 30kg per parcel.`,
    `With DPD drop-off services and DPD collection points available, DPD’s extensive network across the UK has got you covered. You’ll always get the best possible DPD courier service to ensure your parcels get from A to B safely and on time, without the hassle!`,
    `When you ship with ParcelGo, you’ll always get the most competitive prices from DPD! DPD prices start from as low as £5.29 exc VAT - find out your cost with our quick quote tool now`
  ];

  return (
    <>
      <DynamicBanner
        image1={
          <Image
            src={DPDBanner}
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
          Send a Parcel with DPD
        </Typography>
        <Typography variant="h6" fontWeight={"medium"}>
          Send from only £5.29 exc VAT
        </Typography>
      </DynamicBanner>

      <Container maxWidth="xl">
        <Stack spacing={7} alignItems="center" sx={{ py: 6 }}>
          {/* Navigation Section */}
          <NavigationSection navigationItems={navigationItems} />

          <WhySendSection
            courierName="DPD"
            benefits={fedexBenefits}
            image={WhyDPD}
            imageAlt="DPD Van"
          />

          <AboutSection
            courierName="DPD"
            paragraphs={dpdAboutParagraphs}
            image={AboutDPD}
            imageAlt="FedEx About"
            backgroundColor="lightBlue"
          />

          <ServicesSection
            title="DPD UK Services"
            image={DPDservices}
            imageAlt="DPD Services"
            items={[
              {
                heading: "Drop-off Services",
                body:
                  "Send a parcel with DPD anytime at any of the 6,000 DPD Drop Shop locations around the UK. Easily track your parcel from collection until it reaches its final destination.",
              },
              {
                heading: "Super-fast Delivery",
                body:
                  "Once your parcel is in their possession, DPD couriers deliver within 1-3 working days as standard. You will be provided with a 1-hour collection delivery window so you can plan your day!",
              },
              {
                heading: "International Services",
                body:
                  "DPD offers a wide range of international delivery solutions worldwide. You can send a parcel with DPD to over 185 countries and territories, with a range of services to choose from.",
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
                  Drop Off Services
                </Typography>

                <Grid container spacing={3} justifyContent="center">
                  {/* DPD Economy Drop Off */}
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
                            src={DPDLogo}
                            alt="DPD Logo"
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
                            DPD Drop Off Small
                          </Typography>
                        </Box>

                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontWeight: 500,
                          }}
                        >
                          Est Delivery:Tue 23 Sep - Wed 24 Sep
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
                              From £5.29
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
                              £5.34
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

                  {/* DPD Priority Drop Off */}
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
                            src={DPDLogo}
                            alt="DPD Logo"
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
                            DPD Drop Off
                          </Typography>
                        </Box>

                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontWeight: 500,
                          }}
                        >
                          Est Delivery:Tue 23 Sep - Wed 24 Sep
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
                              From £6.29
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
                              £6.39
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
                  {/* DPD Economy Collection */}
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
                            src={DPDLogo}
                            alt="DPD Logo"
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
                            DPD Collection
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
                              From £9.60
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
                              £9.70
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
            title="Free DPD Tracking"
            description="Looking for professional courier tracking at no extra cost? Get free parcel tracking on all DPD delivery services with ParcelGo."
            ctaText="Track Your DPD Parcel"
            image={FedexTracking}
            imageAlt="FedEx Free Tracking"
            backgroundColor="lightBlue"
          />

          {/* Faqs Section */}
          <Faqs faqa={faqsdpd} />

        </Stack>
      </Container>
    </>
  )
}

export default DPD