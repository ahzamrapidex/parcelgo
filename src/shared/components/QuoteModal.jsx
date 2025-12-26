"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Stack,
  Divider,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import UIButton from "@/shared/pure-components/button/button";

const QuoteModal = ({ open, onClose, quoteData, whatsappNumber }) => {
  const sendFrom = quoteData?.sendFrom || "Pakistan";

  // sendTo is now an option object; fallback safe
  const sendTo =
    quoteData?.sendTo?.label ||
    quoteData?.sendTo?.value ||
    "";

  const length = quoteData?.length ?? "";
  const width = quoteData?.width ?? "";
  const height = quoteData?.height ?? "";
  const weight = quoteData?.weight ?? "";

  const handleSendWhatsApp = () => {
    // basic guard (should already be valid)
    if (!sendTo || !length || !width || !height || !weight) return;

    const message = `Hello! I would like to get a quote for shipping a parcel.

Shipping Details:
From: ${sendFrom}
To: ${sendTo}
Dimensions: ${length} x ${width} x ${height} cm
Weight: ${weight} kg

Please share rates and available delivery options.
Thank you!`;

    const encoded = encodeURIComponent(message);

    // WhatsApp requires international format WITHOUT +, spaces, dashes.
    // If your number is not in correct format, link may fail.
    const number = String(whatsappNumber || "447466005024").replace(/[^\d]/g, "");

    const url = `https://wa.me/${number}?text=${encoded}`;

    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          p: 2,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="primary">
          Shipping Quote Request
        </Typography>
        <IconButton onClick={onClose} size="small" aria-label="Close">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Stack spacing={3}>
          <Divider />
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom color="primary">
              Shipping Details
            </Typography>

            <Stack spacing={1}>
              <Row label="From" value={sendFrom} />
              <Row label="To" value={sendTo || "-"} />
              <Row
                label="Dimensions"
                value={`${length || "-"} × ${width || "-"} × ${height || "-"} cm`}
              />
              <Row label="Weight" value={`${weight || "-"} kg`} />
            </Stack>
          </Box>

          <Divider />

          <Stack spacing={2}>
            <UIButton
              variant="contained"
              size="large"
              fullWidth
              callback={handleSendWhatsApp}
              startIcon={<WhatsAppIcon sx={{ color: 'white', fontSize: '1.2em' }} />}
              sx={{
                backgroundColor: "#25D366",
                color: "white",
                fontWeight: "bold",
                py: 1.5,
                "&:hover": { backgroundColor: "#20B954" },
              }}
            >
              Send WhatsApp Message
            </UIButton>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

const Row = ({ label, value }) => (
  <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
    <Typography variant="body1" fontWeight="600">
      {label}:
    </Typography>
    <Typography variant="body1" sx={{ textAlign: "right" }}>
      {value}
    </Typography>
  </Box>
);

export default QuoteModal;