"use client";
import { AllCountries, SendToCountries } from "@/shared/constant/constant";
import InputField from "@/shared/form-control/InputField";
import UiAutoComplete from "@/shared/components/UiAutoComplete";
import theme from "@/shared/hoc/theme/theme";
import UIButton from "@/shared/pure-components/button/button";
import QuoteModal from "@/shared/components/QuoteModal";
import {
  Stack,
  Typography,
  useMediaQuery,
  Alert,
} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";

export default function Calculator() {
  const [formData, setFormData] = React.useState({
    sendFrom: 'Pakistan',
    sendTo: '',
    length: '',
    width: '',
    height: '',
    weight: ''
  });
  const [modalOpen, setModalOpen] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.sendTo) {
      newErrors.sendTo = 'Please select destination country';
    }
    if (!formData.length || formData.length <= 0) {
      newErrors.length = 'Please enter valid length';
    }
    if (!formData.width || formData.width <= 0) {
      newErrors.width = 'Please enter valid width';
    }
    if (!formData.height || formData.height <= 0) {
      newErrors.height = 'Please enter valid height';
    }
    if (!formData.weight || formData.weight <= 0) {
      newErrors.weight = 'Please enter valid weight';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGetQuote = () => {
    if (validateForm()) {
      setModalOpen(true);
    }
  };

  return (
    <Box sx={{ borderRadius: 2, overflow: "hidden", mx: "auto", mt: 2 }}>
      {/* Header */}
      <Box 
        sx={{ 
          background: "linear-gradient(135deg,rgb(28, 129, 31) 0%,rgb(28, 129, 31) 100%)",
          color: "white",
          py: 2,
          px: 3,
          textAlign: "center"
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Get International Shipping Quote
        </Typography>
      </Box>

      {/* Form Content */}
      <Box sx={{ p: 3, backgroundColor: "background.lightBlue" }}>
        <Stack spacing={2}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            {/* Send From - Fixed to Pakistan */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" fontWeight="500" sx={{ mb: 1 }}>
                Send From
              </Typography>
              <Box
                sx={{
                  p: 2,
                  backgroundColor: '#f5f5f5',
                  borderRadius: 1,
                  border: '1px solid #ddd',
                  color: 'text.secondary'
                }}
              >
                <Typography variant="body1" fontWeight="500">
                  🇵🇰 Pakistan
                </Typography>
              </Box>
            </Box>

            {/* Send To - Searchable dropdown */}
            <Box sx={{ flex: 1 }}>
              <UiAutoComplete
                name="sendTo"
                label="Send To *"
                opt={SendToCountries}
                optionRenderKeys={{ label: 'label', value: 'value' }}
                variant="outlined"
                size={isMobile ? "small" : "medium"}
                onChange={(event, value) => handleInputChange('sendTo', value?.label || '')}
                error={Boolean(errors.sendTo)}
                helperText={errors.sendTo}
                sx={{ backgroundColor: 'white' }}
              />
            </Box>
          </Stack>

          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            {/* Dimensions */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" fontWeight="500" sx={{ mb: 1 }}>
                Dimensions (cm)
              </Typography>
              <Stack direction="row" spacing={1}>
                <InputField
                  label="Length *"
                  type="number"
                  placeholder="L"
                  value={formData.length}
                  onChange={(e) => handleInputChange('length', e.target.value)}
                  error={Boolean(errors.length)}
                  helperText={errors.length}
                  sx={{ backgroundColor: "white" }}
                  size={isMobile ? "small" : "medium"}
                />
                <InputField
                  label="Width *"
                  type="number"
                  placeholder="W"
                  value={formData.width}
                  onChange={(e) => handleInputChange('width', e.target.value)}
                  error={Boolean(errors.width)}
                  helperText={errors.width}
                  sx={{ backgroundColor: "white" }}
                  size={isMobile ? "small" : "medium"}
                />
                <InputField
                  label="Height *"
                  type="number"
                  placeholder="H"
                  value={formData.height}
                  onChange={(e) => handleInputChange('height', e.target.value)}
                  error={Boolean(errors.height)}
                  helperText={errors.height}
                  sx={{ backgroundColor: "white" }}
                  size={isMobile ? "small" : "medium"}
                />
              </Stack>
            </Box>

            {/* Weight */}
            <Box sx={{ flex: 0.5 }}>
              <InputField
                label="Weight (kg) *"
                type="number"
                placeholder="Weight"
                value={formData.weight}
                onChange={(e) => handleInputChange('weight', e.target.value)}
                error={Boolean(errors.weight)}
                helperText={errors.weight}
                sx={{ backgroundColor: "white" }}
                size={isMobile ? "small" : "medium"}
              />
            </Box>
          </Stack>

          {/* Info Message */}
          <Alert severity="info" sx={{ mt: 2 }}>
            Fill in your parcel details to get a personalized WhatsApp quote from our team.
          </Alert>

          {/* Get Quote Button */}
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <UIButton
              variant="contained"
              onClick={handleGetQuote}
              sx={{
                minWidth: { xs: "100%", md: 200 },
                minHeight: 56,
                backgroundColor: "rgb(28, 129, 31)",
                fontSize: "1.1rem",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "success.dark",
                },
              }}
            >
              Get Quote via WhatsApp
            </UIButton>
          </Box>
        </Stack>
      </Box>

      {/* Quote Modal */}
      <QuoteModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        quoteData={formData}
      />
    </Box>
  );
}