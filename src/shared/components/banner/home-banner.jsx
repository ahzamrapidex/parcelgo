"use client";
import Calculator from "@/shared/components/calculator/calculator";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const HomeBanner = ({ title, description, image }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.background["200"]} 0%, ${theme.palette.background["200"]} 100%)`,
          color: "white",
          position: "relative",
          overflow: "hidden",
          pt: 2,
          pb: 6
        }}
      >
        <Container maxWidth={"lg"}>
          <Stack
            direction={"row"}
            alignItems={{ xs: "center", md: "center" }}
            justifyContent={{ xs: "center", md: "space-between" }}
            spacing={4}
            sx={{ position: "relative", zIndex: 2 }}
          >
            {/* Duck Image */}
            <Box
              sx={{
                flex: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-start",
              }}
            >
              <Image
                src={image}
                alt="Delivery Duck"
                width={300}
                height={"auto"}
                style={{ objectFit: "contain" }}
              />
            </Box>

            {/* Title Section */}
            <Stack
              spacing={{ xs: 1, md: 2 }}
              sx={{
                color: "white",
                zIndex: 2,
                margin: { xs: "0 auto", md: "0" },
                textAlign: { xs: "center", md: "left" },
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                variant="h3"
                fontWeight={"bold"}
                sx={{
                  color: "white",
                  textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="h5"
                fontWeight={"medium"}
                sx={{
                  color: "white",
                  opacity: 0.9,
                }}
              >
                {description}
              </Typography>
            </Stack>

            {/* Right side spacing */}
            <Box sx={{ flex: 1, display: { xs: "none", md: "block" } }} />
          </Stack>

          {/* Calculator - Positioned to overlap the banner */}
          <Calculator />
        </Container>

        {/* Background decorative elements */}
        <Box
          sx={{
            position: "absolute",
            top: 20,
            right: 50,
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 30,
            left: 100,
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            zIndex: 1,
          }}
        />
      </Box>
    </>
  );
};

export default HomeBanner;
