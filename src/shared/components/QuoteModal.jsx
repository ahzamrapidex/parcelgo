'use client';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Stack,
  Divider,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UIButton from '@/shared/pure-components/button/button';

const QuoteModal = ({ open, onClose, quoteData }) => {
  const handleSendWhatsApp = () => {
    const { sendFrom, sendTo, length, width, height, weight } = quoteData;
    
    const message = `Hello! I would like to get a quote for shipping a parcel.

*Shipping Details:*
From: ${sendFrom}
To: ${sendTo}
Length: ${length}cm
Width: ${width}cm
Height: ${height}cm
Weight: ${weight}kg

Please provide me with the shipping rates and delivery options.

Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/447466005024?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    onClose(); // Close modal after opening WhatsApp
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
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 2 }}>
        <Typography variant="h5" fontWeight="bold" color="primary">
          Shipping Quote Request
        </Typography>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent>
        <Stack spacing={3}>
          <Typography variant="body1" color="text.secondary">
            Your shipping details are ready. Click the button below to send a WhatsApp message to get your personalized quote.
          </Typography>
          
          <Divider />
          
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom color="primary">
              Shipping Details:
            </Typography>
            <Stack spacing={1}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" fontWeight="500">From:</Typography>
                <Typography variant="body1">{quoteData.sendFrom || 'Pakistan'}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" fontWeight="500">To:</Typography>
                <Typography variant="body1">{quoteData.sendTo}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" fontWeight="500">Dimensions:</Typography>
                <Typography variant="body1">
                  {quoteData.length} × {quoteData.width} × {quoteData.height} cm
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" fontWeight="500">Weight:</Typography>
                <Typography variant="body1">{quoteData.weight} kg</Typography>
              </Box>
            </Stack>
          </Box>
          
          <Divider />
          
          <Stack spacing={2}>
            <UIButton
              variant="contained"
              size="large"
              fullWidth
              onClick={handleSendWhatsApp}
              sx={{
                backgroundColor: '#25D366',
                color: 'white',
                fontWeight: 'bold',
                py: 1.5,
                '&:hover': {
                  backgroundColor: '#20B954',
                },
              }}
            >
              📱 Send WhatsApp Message
            </UIButton>
            
            <Typography variant="caption" color="text.secondary" textAlign="center">
              This will open WhatsApp with a pre-filled message containing your shipping details.
            </Typography>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;