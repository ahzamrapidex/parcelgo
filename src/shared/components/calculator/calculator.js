"use client";

import * as React from "react";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";

import { SendToCountries } from "@/shared/constant/constant";
import UiAutoComplete from "@/shared/components/UiAutoComplete";
import InputField from "@/shared/form-control/InputField";
import UIButton from "@/shared/pure-components/button/button";
import QuoteModal from "@/shared/components/QuoteModal";
import theme from "@/shared/hoc/theme/theme";

export default function Calculator() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Store numbers as numbers, sendTo as an option object (not string)
  const [formData, setFormData] = React.useState({
    sendFrom: "Pakistan",
    sendTo: null, // { label, value, ... } from your options
    length: "",
    width: "",
    height: "",
    weight: "",
  });

  const [errors, setErrors] = React.useState({});
  const [modalOpen, setModalOpen] = React.useState(false);

  const setField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const setNumberField = (name, raw) => {
    // raw from input is string
    if (raw === "" || raw === null || raw === undefined) {
      setField(name, "");
      return;
    }
    const n = Number(raw);
    setField(name, Number.isFinite(n) ? n : "");
  };

  const validate = () => {
    const e = {};

    if (!formData.sendTo) e.sendTo = "Please select destination country";

    const numericRules = [
      ["length", "Please enter valid length"],
      ["width", "Please enter valid width"],
      ["height", "Please enter valid height"],
      ["weight", "Please enter valid weight"],
    ];

    for (const [key, msg] of numericRules) {
      const v = formData[key];
      if (v === "" || v === null || v === undefined || Number(v) <= 0) {
        e[key] = msg;
      }
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleGetQuote = () => {
    console.log("HERER===>>>");
    if (validate()){ 
      setModalOpen(true);
    }
  };

  return (
    <Box sx={{ borderRadius: 2, overflow: "hidden", mx: "auto", mt: 2 }}>
      {/* Header */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, rgb(28,129,31) 0%, rgb(28,129,31) 100%)",
          color: "white",
          py: 2,
          px: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Get International Shipping Quote
        </Typography>
      </Box>

      {/* Form */}
      <Box sx={{ p: 3, backgroundColor: "background.lightBlue" }}>
        <Stack spacing={3}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            {/* Send From */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body2"
                fontWeight="600"
                sx={{ mb: 1, color: "text.primary" }}
              >
                Send From
              </Typography>
              <Box
                sx={{
                  p: 2,
                  backgroundColor: "#f5f5f5",
                  borderRadius: 1,
                  border: "1px solid #ddd",
                  color: "text.secondary",
                  minHeight: "56px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1" fontWeight="500">
                  🇵🇰 Pakistan
                </Typography>
              </Box>
            </Box>

            {/* Send To */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body2"
                fontWeight="600"
                sx={{ mb: 1, color: "text.primary" }}
              >
                Send To *
              </Typography>

              <UiAutoComplete
                name="sendTo"
                placeholder="Select destination country"
                opt={SendToCountries}
                optionRenderKeys={{ label: "label", value: "value" }}
                variant="outlined"
                size={isMobile ? "small" : "medium"}
                value={formData.sendTo} // IMPORTANT: controlled value
                onChange={(event, option) => setField("sendTo", option || null)}
                error={Boolean(errors.sendTo)}
                helperText={errors.sendTo}
                sx={{
                  backgroundColor: "white",
                  "& .MuiInputBase-root": { minHeight: "56px" },
                }}
              />
            </Box>
          </Stack>

          {/* Dimensions + Weight */}
          <Box>
            <Typography
              variant="body2"
              fontWeight="600"
              sx={{ mb: 1, color: "text.primary" }}
            >
              Dimensions (cm) & Weight *
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
              <InputField
                label="Length *"
                type="number"
                placeholder="L"
                value={formData.length}
                onChange={(e) => setNumberField("length", e.target.value)}
                error={Boolean(errors.length)}
                helperText={errors.length}
                sx={{ backgroundColor: "white", flex: 1 }}
                size={isMobile ? "small" : "medium"}
                inputProps={{ min: 0 }}
              />

              <InputField
                label="Width *"
                type="number"
                placeholder="W"
                value={formData.width}
                onChange={(e) => setNumberField("width", e.target.value)}
                error={Boolean(errors.width)}
                helperText={errors.width}
                sx={{ backgroundColor: "white", flex: 1 }}
                size={isMobile ? "small" : "medium"}
                inputProps={{ min: 0 }}
              />

              <InputField
                label="Height *"
                type="number"
                placeholder="H"
                value={formData.height}
                onChange={(e) => setNumberField("height", e.target.value)}
                error={Boolean(errors.height)}
                helperText={errors.height}
                sx={{ backgroundColor: "white", flex: 1 }}
                size={isMobile ? "small" : "medium"}
                inputProps={{ min: 0 }}
              />

              <InputField
                label="Weight (kg) *"
                type="number"
                placeholder="Weight"
                value={formData.weight}
                onChange={(e) => setNumberField("weight", e.target.value)}
                error={Boolean(errors.weight)}
                helperText={errors.weight}
                sx={{ backgroundColor: "white", flex: 1 }}
                size={isMobile ? "small" : "medium"}
                inputProps={{ min: 0 }}
              />
            </Stack>
          </Box>

          {/* Button */}
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <UIButton
              variant="contained"
              callback={handleGetQuote}
              sx={{
                minWidth: { xs: "100%", md: 260 },
                minHeight: 56,
                backgroundColor: "rgb(28, 129, 31)",
                fontSize: "1.1rem",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "success.dark" },
              }}
            >
              Get Quote via WhatsApp
            </UIButton>
          </Box>
        </Stack>
      </Box>

      {/* Modal */}
      <QuoteModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        quoteData={formData}
        whatsappNumber="16885014"
      />
    </Box>
  );
}
