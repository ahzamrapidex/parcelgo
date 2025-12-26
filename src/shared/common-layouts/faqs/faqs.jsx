"use client";
import React, { useState } from "react";
import { Box, Container, Grid, Stack, Typography, Card } from "@mui/material";
import UIButton from "@/shared/pure-components/button/button";
import FaqDrawer from "./faqs-drawer";

const Faqs = ({ faqa }) => {
  const [drawerOpen, setDrawerOpen] = useState({
    selected: null,
    open: false,
  });

  const handleShowAnswer = (item) => {
    setDrawerOpen({
      selected: item,
      open: true,
    });
  };

  const handleCloseDrawer = () => {
    setDrawerOpen({
      selected: null,
      open: false,
    });
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Stack textAlign={"center"} spacing={8} alignItems={"center"}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 3,
              lineHeight: 1.1,
              color: "text.primary",
            }}
          >
            Frequently Asked Questions
          </Typography>

          {/* FAQ Grid */}
          <Box sx={{ width: "100%", maxWidth: "1200px" }}>
            <Grid container spacing={3} sx={{}}>
              {faqa.map((item, index) => {
                return (
                  <Grid item xs={12} md={4} key={index}>
                    <Card
                      key={item.id}
                      sx={{
                        height: "200px",
                        borderRadius: 3,
                        border: "1px solid #e0e0e0",
                        background: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        p: 3,
                        "&:hover": {
                          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          transform: "translateY(-2px)",
                          transition: "all 0.3s ease",
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: "text.primary",
                          mb: 2,
                          textAlign: "left",
                        }}
                      >
                        {item.question}
                      </Typography>
                      <UIButton
                        variant="outlined"
                        size="large"
                        callback={() => handleShowAnswer(item)}
                        sx={{
                          fontWeight: 600,
                          fontSize: "1.2rem",
                          border: "none",
                          p: 0,
                          textTransform: "none",
                          justifyContent: "flex-start",
                          alignSelf: "flex-start",
                        }}
                        endIcon={<Box sx={{ ml: 1 }}>→</Box>}
                      >
                        Show answer
                      </UIButton>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Stack>

        <FaqDrawer
          open={drawerOpen.open}
          onClose={() => handleCloseDrawer()}
          selected={drawerOpen.selected}
        />
      </Container>
    </>
  );
};

export default Faqs;
