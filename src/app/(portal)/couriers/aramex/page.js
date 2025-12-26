"use client";
import DynamicBanner from "@/shared/components/banner/dynamic-banner";
import { AboutAramex, AramexWhy, FedexBanner, TrackingAramex, World } from "@/assets";
import { FedexBanner2 } from "@/assets";
import { Container, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import NavigationSection from "@/shared/components/service-couriers/NavigationSection";
import ServicesSection from "@/shared/components/service-couriers/ServicesSection";
import WhySendSection from "@/shared/components/service-couriers/WhySendSection";
import AboutSection from "@/shared/components/service-couriers/AboutSection";
import Faqs from "@/shared/common-layouts/faqs/faqs";
import { faqsAramex } from "@/shared/constant/constant";
import FreeTrackingSection from "@/shared/components/service-couriers/FreeTrackingSection";

const Aramex = () => {
  const theme = useTheme();

  const navigationItems = [
    "Aramex Services",
    "About Aramex Couriers",
    "Aramex Tracking",
    "FAQs",
  ];

  const aramexBenefits = [
    "Economical international shipping with delivery in 4–6 working days",
    "Priority Express service for urgent shipments delivered in 2–3 working days",
    "Reliable Domestic Express for same-day or next-day delivery within Pakistan",
    "Cash on Delivery (COD) option for e-commerce businesses",
    "Full parcel tracking available on all shipments",
  ];

  const aramexAboutParagraphs = [
    `Aramex was founded in 1982 in Amman, Jordan, and has since grown into one of the leading global logistics and transportation companies. Today, Aramex operates in more than 65 countries with hundreds of offices worldwide.`,
    `Aramex <span style="color: ${theme.palette.primary.main}; font-weight: 600;">international courier</span> network provides express delivery, freight forwarding, supply chain solutions, and e-commerce logistics. They have built a strong presence in the Middle East, Asia, Europe, and Africa, offering both international and domestic services with full parcel tracking.`,
    `Send a parcel with Aramex from Pakistan or anywhere worldwide at competitive rates. Get your Aramex delivery quote now with our <span style="color: ${theme.palette.primary.main}; text-decoration: underline;">quick quote</span> tool.`,
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
          Send a Parcel with Aramex Express
        </Typography>
        <Typography variant="h6" fontWeight={"medium"}>
          Send from only £3.65 exc VAT
        </Typography>
      </DynamicBanner>

      <Container maxWidth="xl">
        <Stack spacing={7} alignItems="center" sx={{ py: 6 }}>
          {/* Navigation Section */}
          <NavigationSection navigationItems={navigationItems} />

          {/* Aramex Express Services */}
          <ServicesSection
            title="Aramex Express Services"
            image={World}
            imageAlt="Aramex Services"
            items={[
              {
                heading: "Economy Express",
                body: "Aramex Economy Express provides reliable and cost-effective delivery solutions for less urgent shipments. With delivery typically within 4–6 working days to major international destinations, you can track your parcel every step of the way. This option is ideal for customers looking for a balance between affordability and timely delivery.",
              },
              {
                heading: "Priority Express",
                body: "Aramex Priority Express ensures fast and secure delivery of time-sensitive shipments worldwide. Parcels are delivered within 2–3 working days, offering full end-to-end tracking and customs clearance support. You can drop off at an Aramex location or arrange pickup from your address for maximum convenience.",
              },
              {
                heading: "Domestic Express",
                body: "Aramex Domestic Express covers shipments within Pakistan, ensuring same-day or next-day delivery depending on the city. This service is widely used for documents, parcels, and e-commerce deliveries, supported by reliable tracking and customer notifications.",
              },
              {
                heading: "Shop & Ship",
                body: "With Aramex Shop & Ship, you get multiple international addresses in major countries. This allows you to shop from global online stores and have items shipped directly to your doorstep in Pakistan, making cross-border shopping convenient and affordable.",
              },
              {
                heading: "Cash on Delivery (COD)",
                body: "For e-commerce sellers and businesses, Aramex offers Cash on Delivery services. Sellers can expand their reach while customers enjoy secure payment upon parcel delivery. This service includes easy returns and reconciliation options.",
              },
            ]}
          />

          <WhySendSection
            courierName="Aramex"
            benefits={aramexBenefits}
            image={AramexWhy}
            imageAlt="Aramex Van"
          />

          <AboutSection
            courierName="Aramex"
            paragraphs={aramexAboutParagraphs}
            image={AboutAramex}
            imageAlt="Aramex About"
            backgroundColor="lightBlue"
          />


              {/* Free Tracking */}
          <FreeTrackingSection
            title="Free Aramex Tracking"
            description="Looking for professional courier tracking at no extra cost? Get free parcel tracking on all Aramex delivery services with ParcelGo."
            ctaText="Track Your Aramex Parcel"
            image={TrackingAramex}
            imageAlt="Aramex Free Tracking"
            backgroundColor="lightBlue"
          />

          {/* Aramex Services */}
          {/* Faqs Section */}
          <Faqs faqa={faqsAramex} />
        </Stack>
      </Container>
    </>
  );
};

export default Aramex;
