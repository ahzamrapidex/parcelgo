// Create a new file: src/shared/components/DemoModal.jsx
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

const DemoModal = ({ open, onClose, formData }) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    parcelsPerWeek,
    contactDay,
    contactTime
  } = formData;

  const handleSendWhatsApp = () => {
    // Guard clause for validation
    if (!firstName || !lastName || !email || !phone || !parcelsPerWeek || !contactDay || !contactTime) {
      return;
    }

    const message = `Hello! I would like to book a Smart Send demo.

Demo Request Details:
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Parcels per week: ${parcelsPerWeek}
Preferred contact day: ${contactDay}
Preferred contact time: ${contactTime}

Please schedule a demo session for me to learn more about Smart Send.

Thank you!`;

    const encoded = encodeURIComponent(message);
    const number = "447466005024"; // WhatsApp number
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
          background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
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
          Smart Send Demo Request
        </Typography>
        <IconButton onClick={onClose} size="small" aria-label="Close">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Stack spacing={3}>
          {/* <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
            Your demo request is ready. Click the button below to send a WhatsApp message to book your Smart Send demo.
          </Typography>*/}
          
          <Divider /> 
          
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom color="primary">
              Demo Request Details
            </Typography>

            <Stack spacing={1}>
              <Row label="Name" value={`${firstName} ${lastName}`} />
              <Row label="Email" value={email} />
              <Row label="Phone" value={phone} />
              <Row label="Parcels per week" value={parcelsPerWeek} />
              <Row label="Contact day" value={contactDay} />
              <Row label="Contact time" value={contactTime} />
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

            {/* <Typography variant="caption" color="text.secondary" textAlign="center">
              This will open WhatsApp with a pre-filled demo request message.
            </Typography> */}
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
      {value || "-"}
    </Typography>
  </Box>
);

export default DemoModal;