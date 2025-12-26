"use client";
import React from "react";
import DynamicBanner from "@/shared/components/banner/dynamic-banner";
import Image from "next/image";
import {
  AboutParcelForce,
  BannerParcelForce,
  FedexBanner2,
  ParcelForceTracking,
  WhyParcelForce,
  World,
  ParcelForceLogo,
} from "@/assets";
import { Container, Stack, Typography, useTheme, Grid, Paper, Box } from "@mui/material";
import UIButton from "@/shared/pure-components/button/button";
import NavigationSection from "@/shared/components/service-couriers/NavigationSection";
import WhySendSection from "@/shared/components/service-couriers/WhySendSection";
import AboutSection from "@/shared/components/service-couriers/AboutSection";
import ServicesSection from "@/shared/components/service-couriers/ServicesSection";
import FreeTrackingSection from "@/shared/components/service-couriers/FreeTrackingSection";
import Faqs from "@/shared/common-layouts/faqs/faqs";
import { faqsParcelforce } from "@/shared/constant/constant";

const navigationItems = [
  "Parcel Force Services",
  "About Parcel Force Couriers",
  "Parcel Force Tracking",
  "FAQs",
];

const parcelForceBenefits = [
  "Over 11,500 drop-off locations available across the UK",
  "Parcel protection worth up to £10,000 on selected services",
  "Send parcels up to 120cm in length",
  "Free parcel tracking on all services",
];

const ParcelForce = () => {
  const theme = useTheme();

  const parcelForceAboutParagraphs = [
    `With over 25 years of experience, Parcelforce is one of the leading couriers in the parcel delivery industry. Initially launched as part of the Royal Mail Group, in 1990 it changed to Parcelforce from Royal Mail Parcels. As of 1998, it’s been known as Parcelforce Worldwide. It now delivers over 60,000 parcels every hour, meeting the demands of millions of customers. `,
    `There are over 11,500 Parcelforce drop off points and 54 Parcelforce depots across the UK, so you’ll be able to use their services wherever you are. The Parcelforce door to door collection service allows you to avoid the queues in the drop shops and have your parcel collected at a time that suits you. `,
    `Parcelforce offers a service for all types of senders. Whether you are looking to ship a parcel within the UK or worldwide, they’ve got you covered. Parcelforce 24 hour and Parcelforce 48 hour sending services also allow you to get your items to your recipient quickly.`,
    `Find the best Parcelforce service quote with ParcelGo today! Use our quick quote tool to find out how much it will cost you now.`
  ];

  return (
    <>
      <DynamicBanner
        image1={
          <Image
            src={BannerParcelForce}
            alt="Parcel Force Banner"
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
          Send a Parcel with Parcelforce
        </Typography>
        <Typography variant="h6" fontWeight={"medium"}>
          Send from only £7.99 exc VAT
        </Typography>
      </DynamicBanner>

      <Container maxWidth="xl">
        <Stack spacing={7} alignItems="center" sx={{ py: 6 }}>
          {/* Navigation Section */}
          <NavigationSection navigationItems={navigationItems} />

          {/* Why send a parcel with Parcel Force? */}
          <WhySendSection
            courierName="Parcel Force"
            benefits={parcelForceBenefits}
            image={WhyParcelForce}
            imageAlt="FedEx Van"
          />

          {/* About Fedex */}
          <AboutSection
            courierName="Parcel Force"
            paragraphs={parcelForceAboutParagraphs}
            image={AboutParcelForce}
            imageAlt="FedEx About"
            backgroundColor="lightBlue"
          />

          {/* Parcel Force Services */}
          <ServicesSection
            title="Parcelforce Express Services"
            image={World}
            imageAlt="FedEx Services"
            items={[
              {
                heading: "Parcelforce UK Services",
                body:
                  "Parcelforce is one of the most trusted couriers in the UK and around the world. Offering a variety of services including next day and timed delivery, you can click here to view Parcelforce UK’s full range of services.",
              },
              {
                heading: "Parcelforce Drop Off Services",
                body:
                  "Drop your parcel off at any of the 11,500 Parcelforce drop off points around the UK, for hassle free delivery within the UK and internationally. Easily track your parcel from collection until it reaches its final destination.",
              },
              {
                heading: "Parcelforce Super-fast Delivery",
                body:
                  "With such a large network of couriers and drop-off locations, Parcelforce can send a parcel and deliver your items within either 24 or 48hrs via collection or a drop-off service. Timed deliveries of 9am, 10am or 12pm the next day are also available should you require a more expedited service.",
              },
              {
                heading: "Parcelforce International Services",
                body:
                  "Delivering more than 7 million parcels every year across 185 countries and territories, Parcelforce is on hand to take care of your international deliveries. They offer a variety of services including collection and drop off. View their full range of international services above.",
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
                  <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: `2px solid #E0E0E0`, backgroundColor: "white" }}>
                      <Stack spacing={3}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                          <Image src={ParcelForceLogo} alt="Parcelforce Logo" width={88} height={28} style={{ height: 28, width: "auto" }} />
                          <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                            Parcelforce Worldwide Express 48 Drop Off
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                          Est Delivery:Tue 23 Sep - Wed 24 Sep
                        </Typography>
                        <Stack spacing={2}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, backgroundColor: "#F8F9FA", borderRadius: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>From £7.99</Typography>
                            <UIButton variant="outlined" sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}>
                              Book without Protection
                            </UIButton>
                          </Box>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, backgroundColor: theme.palette.primary.light, borderRadius: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>£8.09</Typography>
                            <UIButton variant="contained" sx={{ backgroundColor: theme.palette.primary.main }}>
                              Book with £20 Protection
                            </UIButton>
                          </Box>
                        </Stack>
                      </Stack>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: `2px solid #E0E0E0`, backgroundColor: "white" }}>
                      <Stack spacing={3}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                          <Image src={ParcelForceLogo} alt="Parcelforce Logo" width={88} height={28} style={{ height: 28, width: "auto" }} />
                          <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                            Parcelforce Worldwide Express 24 Drop Off
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                          Est Delivery:Mon 22 Sep - Tue 23 Sep
                        </Typography>
                        <Stack spacing={2}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, backgroundColor: "#F8F9FA", borderRadius: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>From £8.80</Typography>
                            <UIButton variant="outlined" sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}>
                              Book without Protection
                            </UIButton>
                          </Box>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, backgroundColor: theme.palette.primary.light, borderRadius: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>£8.90</Typography>
                            <UIButton variant="contained" sx={{ backgroundColor: theme.palette.primary.main }}>
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
                <Typography variant="h4" sx={{ fontWeight: theme.typography.Bold, color: theme.palette.text.primary, textAlign: "center" }}>
                  Collection Services
                </Typography>

                <Grid container spacing={3} justifyContent="center">
                  <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: `2px solid #E0E0E0`, backgroundColor: "white" }}>
                      <Stack spacing={3}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                          <Image src={ParcelForceLogo} alt="Parcelforce Logo" width={88} height={28} style={{ height: 28, width: "auto" }} />
                          <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                            Parcelforce Worldwide Express 48
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                          Est Delivery:Wed 24 Sep - Thu 02 Oct
                        </Typography>
                        <Stack spacing={2}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, backgroundColor: "#F8F9FA", borderRadius: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>From £9.59</Typography>
                            <UIButton variant="outlined" sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}>
                              Book without Protection
                            </UIButton>
                          </Box>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, backgroundColor: theme.palette.primary.light, borderRadius: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>£9.69</Typography>
                            <UIButton variant="contained" sx={{ backgroundColor: theme.palette.primary.main }}>
                              Book with £20 Protection
                            </UIButton>
                          </Box>
                        </Stack>
                      </Stack>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: `2px solid #E0E0E0`, backgroundColor: "white" }}>
                      <Stack spacing={3}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                          <Image src={ParcelForceLogo} alt="Parcelforce Logo" width={88} height={28} style={{ height: 28, width: "auto" }} />
                          <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                            Parcelforce Worldwide Express 24
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                          Est Delivery:Tue 23 Sep - Wed 01 Oct
                        </Typography>
                        <Stack spacing={2}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, backgroundColor: "#F8F9FA", borderRadius: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>From £9.99</Typography>
                            <UIButton variant="outlined" sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}>
                              Book without Protection
                            </UIButton>
                          </Box>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, backgroundColor: theme.palette.primary.light, borderRadius: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>£10.09</Typography>
                            <UIButton variant="contained" sx={{ backgroundColor: theme.palette.primary.main }}>
                              Book with £20 Protection
                            </UIButton>
                          </Box>
                        </Stack>
                      </Stack>
                    </Paper>
                  </Grid>


                  <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: `2px solid #E0E0E0`, backgroundColor: "white" }}>
                      <Stack spacing={3}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                          <Image src={ParcelForceLogo} alt="Parcelforce Logo" width={88} height={28} style={{ height: 28, width: "auto" }} />
                          <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                            Parcelforce Worldwide Express AM
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                          Est Delivery:Tue 23 Sep - Wed 01 Oct
                        </Typography>
                        <Stack spacing={2}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, backgroundColor: "#F8F9FA", borderRadius: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>From £14.60</Typography>
                            <UIButton variant="outlined" sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}>
                              Book without Protection
                            </UIButton>
                          </Box>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, backgroundColor: theme.palette.primary.light, borderRadius: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>£14.70</Typography>
                            <UIButton variant="contained" sx={{ backgroundColor: theme.palette.primary.main }}>
                              Book with £20 Protection
                            </UIButton>
                          </Box>
                        </Stack>
                      </Stack>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: `2px solid #E0E0E0`, backgroundColor: "white" }}>
                      <Stack spacing={3}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                          <Image src={ParcelForceLogo} alt="Parcelforce Logo" width={88} height={28} style={{ height: 28, width: "auto" }} />
                          <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                            Parcelforce Worldwide Multi 12 Noon
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                          Est Delivery:Tue 23 Sep - Wed 01 Oct
                        </Typography>
                        <Stack spacing={2}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, backgroundColor: "#F8F9FA", borderRadius: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>From £16.88</Typography>
                            <UIButton variant="outlined" sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}>
                              Book without Protection
                            </UIButton>
                          </Box>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, backgroundColor: theme.palette.primary.light, borderRadius: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>£17.18</Typography>
                            <UIButton variant="contained" sx={{ backgroundColor: theme.palette.primary.main }}>
                              Book with £20 Protection
                            </UIButton>
                          </Box>
                        </Stack>
                      </Stack>
                    </Paper>
                  </Grid>


                  <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: `2px solid #E0E0E0`, backgroundColor: "white" }}>
                      <Stack spacing={3}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                          <Image src={ParcelForceLogo} alt="Parcelforce Logo" width={88} height={28} style={{ height: 28, width: "auto" }} />
                          <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                            Parcelforce Worldwide by 9am
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                          Est Delivery:Tue 23 Sep - Wed 01 Oct
                        </Typography>
                        <Stack spacing={2}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, backgroundColor: "#F8F9FA", borderRadius: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>From £19.85</Typography>
                            <UIButton variant="outlined" sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}>
                              Book without Protection
                            </UIButton>
                          </Box>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, backgroundColor: theme.palette.primary.light, borderRadius: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>£45.89</Typography>
                            <UIButton variant="contained" sx={{ backgroundColor: theme.palette.primary.main }}>
                              Book with £20 Protection
                            </UIButton>
                          </Box>
                        </Stack>
                      </Stack>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: `2px solid #E0E0E0`, backgroundColor: "white" }}>
                      <Stack spacing={3}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                          <Image src={ParcelForceLogo} alt="Parcelforce Logo" width={88} height={28} style={{ height: 28, width: "auto" }} />
                          <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                            Parcelforce Worldwide by 10am
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                          Est Delivery:Tue 23 Sep - Wed 01 Oct
                        </Typography>
                        <Stack spacing={2}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, backgroundColor: "#F8F9FA", borderRadius: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>From £14.60</Typography>
                            <UIButton variant="outlined" sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}>
                              Book without Protection
                            </UIButton>
                          </Box>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, backgroundColor: theme.palette.primary.light, borderRadius: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>£14.70</Typography>
                            <UIButton variant="contained" sx={{ backgroundColor: theme.palette.primary.main }}>
                              Book with £20 Protection
                            </UIButton>
                          </Box>
                        </Stack>
                      </Stack>
                    </Paper>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: `2px solid #E0E0E0`, backgroundColor: "white" }}>
                      <Stack spacing={3}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                          <Image src={ParcelForceLogo} alt="Parcelforce Logo" width={88} height={28} style={{ height: 28, width: "auto" }} />
                          <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary, }}>
                            Parcelforce Worldwide Large 48
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                          Est Delivery:Wed 24 Sep - Thu 02 Oct
                        </Typography>
                        <Stack spacing={2}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, backgroundColor: "#F8F9FA", borderRadius: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>From £45.59</Typography>
                            <UIButton variant="outlined" sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}>
                              Book without Protection
                            </UIButton>
                          </Box>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2, backgroundColor: theme.palette.primary.light, borderRadius: 2 }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>£45.89</Typography>
                            <UIButton variant="contained" sx={{ backgroundColor: theme.palette.primary.main }}>
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

          {/* Parcel Force Tracking */}
          <FreeTrackingSection
            title="Free Parcelforce Tracking"
            description="Looking for professional courier tracking at no extra cost? Get free parcel tracking on all Parcelforce delivery services with ParcelGo."
            ctaText="Track Your FedEx Parcel"
            image={ParcelForceTracking}
            imageAlt="FedEx Free Tracking"
            backgroundColor="lightBlue"
          />

          {/* Faqs Section */}
          <Faqs faqa={faqsParcelforce} />

        </Stack>
      </Container>
    </>
  );
};

export default ParcelForce;
