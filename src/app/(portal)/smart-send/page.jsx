"use client";
import React, { useState } from "react";
import DynamicBanner from "@/shared/components/banner/dynamic-banner";
import DemoModal from "@/shared/components/DemoModal";
import {
  Typography,
  Box,
  Container,
  Paper,
  Divider,
  Stack,
  Grid,
  FormLabel,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Robot1,
  ParcelImage,
  WhatSmartSend,
  WhySmartSend,
  SaveOn,
  Star,
  Amazon,
  BigCommerce,
  BluePark,
  Ebay,
  Etsay,
  Km,
  Magento,
  OnBuy,
  PrestaShop,
  ShopWiered,
  Shopify,
  SquareSpace,
  Tiktok,
  Wix,
  WooCommerce,
  Robot3,
  Robot4,
  Robot2,
} from "@/assets";
import Image from "next/image";
import UIButton from "@/shared/pure-components/button/button";
import InputField from "@/shared/form-control/InputField";
import { Swiper, SwiperSlide } from "swiper/react";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import "swiper/css";

// Demo Modal Component
// const DemoModal = ({ open, onClose, formData }) => {
//   const {
//     firstName,
//     lastName,
//     email,
//     phone,
//     parcelsPerWeek,
//     contactDay,
//     contactTime
//   } = formData;

//   const handleSendWhatsApp = () => {
//     const message = `Hello! I would like to book a Smart Send demo.

// Demo Request Details:
// Name: ${firstName} ${lastName}
// Email: ${email}
// Phone: ${phone}
// Parcels per week: ${parcelsPerWeek}
// Preferred contact day: ${contactDay}
// Preferred contact time: ${contactTime}

// Please schedule a demo session for me to learn more about Smart Send.

// Thank you!`;

//     const encoded = encodeURIComponent(message);
//     const number = "447466005024"; // WhatsApp number
//     const url = `https://wa.me/${number}?text=${encoded}`;

//     window.open(url, "_blank", "noopener,noreferrer");
//     onClose();
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={onClose}
//       maxWidth="sm"
//       fullWidth
//       PaperProps={{
//         sx: {
//           borderRadius: 3,
//           p: 2,
//           background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
//         },
//       }}
//     >
//       <DialogTitle
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           pb: 2,
//         }}
//       >
//         <Typography variant="h5" fontWeight="bold" color="primary">
//           Smart Send Demo Request
//         </Typography>
//         <IconButton onClick={onClose} size="small" aria-label="Close">
//           <CloseIcon />
//         </IconButton>
//       </DialogTitle>

//       <DialogContent>
//         <Stack spacing={3}>
//           <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
//             Your demo request is ready. Click the button below to send a WhatsApp message to book your Smart Send demo.
//           </Typography>
          
//           <Divider />
          
//           <Box>
//             <Typography variant="h6" fontWeight="bold" gutterBottom color="primary">
//               Demo Request Details
//             </Typography>

//             <Stack spacing={1}>
//               <Row label="Name" value={`${firstName} ${lastName}`} />
//               <Row label="Email" value={email} />
//               <Row label="Phone" value={phone} />
//               <Row label="Parcels per week" value={parcelsPerWeek} />
//               <Row label="Contact day" value={contactDay} />
//               <Row label="Contact time" value={contactTime} />
//             </Stack>
//           </Box>

//           <Divider />

//           <Stack spacing={2}>
//             <UIButton
//               variant="contained"
//               size="large"
//               fullWidth
//               callback={handleSendWhatsApp}
//               startIcon={<WhatsAppIcon sx={{ color: 'white', fontSize: '1.2em' }} />}
//               sx={{
//                 backgroundColor: "#25D366",
//                 color: "white",
//                 fontWeight: "bold",
//                 py: 1.5,
//                 "&:hover": { backgroundColor: "#20B954" },
//               }}
//             >
//               Send WhatsApp Message
//             </UIButton>

//             <Typography variant="caption" color="text.secondary" textAlign="center">
//               This will open WhatsApp with a pre-filled demo request message.
//             </Typography>
//           </Stack>
//         </Stack>
//       </DialogContent>
//     </Dialog>
//   );
// };

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

const SmartSend = () => {
  const theme = useTheme();

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    parcelsPerWeek: '',
    contactDay: '',
    contactTime: ''
  });

  // Error state
  const [errors, setErrors] = useState({});
  
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);

  // Handle input changes
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

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation
  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.parcelsPerWeek.trim()) {
      newErrors.parcelsPerWeek = 'Please specify number of parcels per week';
    }
    
    if (!formData.contactDay.trim()) {
      newErrors.contactDay = 'Please choose a contact day';
    }
    
    if (!formData.contactTime.trim()) {
      newErrors.contactTime = 'Please choose a contact time';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validateForm()) {
      setModalOpen(true);
    }
  };

  const navigationItems = [
    "Book a Demo",
    "Smart Send Explained",
    "Link an Account",
    "Smart Send Features",
    "Customer Reviews",
  ];

  const customerStories = [
    {
      title: "Savvy Side Hustler",
      description:
        "Sarah told us how she sells her camera equipment both nationally and internationally with the help of ParcelGo.",
      image: Robot2,
      href: "#",
    },
    {
      title: "DIY Dynamo",
      description:
        "Mike explains how Smart Send helps him ship his handmade bee hotels and gives tips on how to use the platform efficiently.",
      image: Robot3,
      href: "#",
    },
    {
      title: "Marketplace Multitasker",
      description:
        "Dimitar manages a self-care business on Amazon, Etsy, NOTHS, and Shopify. We look at how Smart Send makes multichannel management even easier.",
      image: Robot4,
      href: "#",
    },
  ];

  return (
    <>
      <DynamicBanner
        image1={<Image src={Robot1} alt="Robot1" width={300} height={"auto"} />}
        image2={
          <Image
            src={ParcelImage}
            alt="Parcel Image"
            width={350}
            height={"auto"}
          />
        }
        isCalculator={false}
      >
        <Typography variant="h3" fontWeight={"bold"} textAlign={"center"}>
          Cheapest Marketplace Shipping in the UK
        </Typography>
        <Typography variant="body1" fontWeight={"bold"} textAlign={"center"}>
          Join for free, ship in seconds
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <UIButton
            sx={{ mx: "auto", fontWeight: "bold" }}
            size="large"
            variant="contained"
            color="secondary"
          >
            Try Smart Send
          </UIButton>
        </Box>
      </DynamicBanner>

      <Container maxWidth="xl">
        <Stack spacing={7} sx={{ py: 6 }}>
          {/* Book a Demo Section */}
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "white",
              borderRadius: 3,
              border: `2px solid #E0E0E0`,
              overflow: "hidden",
              mx: "auto",
              p: 4,
              width: "100%",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography variant="h4" fontWeight={"bold"}>
                  Book a Demo
                </Typography>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <InputField 
                  name="firstName" 
                  label="First Name" 
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName}
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <InputField 
                  name="lastName" 
                  label="Last Name" 
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName}
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <InputField 
                  name="email" 
                  label="Email Address" 
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <InputField 
                  name="phone" 
                  label="Phone Number" 
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone}
                />
              </Grid>
              
              <Grid item xs={12} md={12}>
                <InputField
                  name="parcelsPerWeek"
                  label="How many Parcels do you send in an average week?"
                  value={formData.parcelsPerWeek}
                  onChange={(e) => handleInputChange('parcelsPerWeek', e.target.value)}
                  error={Boolean(errors.parcelsPerWeek)}
                  helperText={errors.parcelsPerWeek}
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <InputField
                  name="contactDay"
                  label="Choose a day for us to contact you"
                  placeholder="e.g., Monday"
                  value={formData.contactDay}
                  onChange={(e) => handleInputChange('contactDay', e.target.value)}
                  error={Boolean(errors.contactDay)}
                  helperText={errors.contactDay}
                />
                <FormLabel sx={{ color: "text.primary", fontSize: "14px" }}>
                  Please enter a day between Monday and Friday
                </FormLabel>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <InputField
                  name="contactTime"
                  label="Choose a time for us to contact you"
                  placeholder="e.g., 2:00 PM"
                  value={formData.contactTime}
                  onChange={(e) => handleInputChange('contactTime', e.target.value)}
                  error={Boolean(errors.contactTime)}
                  helperText={errors.contactTime}
                />
                <FormLabel sx={{ color: "text.primary", fontSize: "14px" }}>
                  Please enter a time between 10am and 6pm
                </FormLabel>
              </Grid>
              
              <Grid item xs={12} md={12}>
                <UIButton
                  sx={{ mx: "auto", fontWeight: "bold" }}
                  size="large"
                  variant="outlined"
                  color="primary"
                  callback={handleSubmit}
                >
                  Try Smart Send
                </UIButton>
              </Grid>
            </Grid>
          </Paper>

          {/* What is Smart Send? Section */}
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "white",
              borderRadius: 3,
              border: `2px solid #E0E0E0`,
              overflow: "hidden",
              mx: "auto",
              width: "100%",
            }}
          >
            <Grid container spacing={0}>
              {/* Left Column - Text Content */}
              <Grid item xs={12} md={6} sx={{ p: 6 }}>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{
                    mb: 3,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                  }}
                >
                  What is Smart Send?
                </Typography>

                <Stack spacing={2}>
                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}
                  >
                    ParcelGo's free online shipping software, Smart Send, lets
                    you link your sales channels with your ParcelGo account to
                    import orders and ship from one place.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}
                  >
                    Built for businesses, side hustlers, and frequent senders,
                    Smart Send's dashboard is easy to use and linking accounts
                    takes just a few minutes.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1.1rem", lineHeight: 1.6 }}
                  >
                    Link any number of our 16 sales channels, such as{" "}
                    <Box
                      component="span"
                      sx={{ color: "primary.main", fontWeight: 600 }}
                    >
                      eBay
                    </Box>
                    ,{" "}
                    <Box
                      component="span"
                      sx={{ color: "primary.main", fontWeight: 600 }}
                    >
                      Shopify
                    </Box>
                    ,{" "}
                    <Box
                      component="span"
                      sx={{ color: "primary.main", fontWeight: 600 }}
                    >
                      TikTok
                    </Box>{" "}
                    and more, and send with the UK's full range of couriers.
                    Whether you link a marketplace or upload a spreadsheet, once
                    your orders are imported, booking a parcel online is fast
                    and hassle-free.
                  </Typography>
                </Stack>
              </Grid>

              {/* Right Column - Image */}
              <Grid item xs={12} md={6}>
                <Image
                  src={WhatSmartSend}
                  alt="Smart Send - Women working in e-commerce fulfillment"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Grid>
            </Grid>
          </Paper>

          {/* Why use Smart Send? Section */}
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "white",
              borderRadius: 3,
              border: `2px solid #E0E0E0`,
              overflow: "hidden",
              mx: "auto",
              width: "100%",
            }}
          >
            <Grid container spacing={0}>
              {/* Left Column - Smart Send Diagram */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    p: 4,
                  }}
                >
                  <Image
                    src={WhySmartSend}
                    alt="Smart Send - Product categories and integration diagram"
                    style={{
                      width: "80%",
                      height: "auto",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </Box>
              </Grid>

              {/* Right Column - Blue Section */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    backgroundColor: theme.palette.background["100"],
                    height: "100%",
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{
                      mb: 3,
                      color: "white",
                      fontSize: { xs: "1.8rem", md: "2.2rem" },
                    }}
                  >
                    Why use Smart Send?
                  </Typography>

                  <Stack spacing={2}>
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "1.1rem",
                          lineHeight: 1.6,
                          "&::before": {
                            content: '"•"',
                            marginRight: 1,
                          },
                        }}
                      >
                        If you need help, we have a 24/7 customer service team
                        who can support you when you need it.
                      </Typography>
                    </Box>

                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "1.1rem",
                          lineHeight: 1.6,
                          "&::before": {
                            content: '"•"',
                            marginRight: 1,
                          },
                        }}
                      >
                        As the largest courier comparison site, enjoy access to
                        the widest range of couriers and the cheapest shipping
                        prices{" "}
                        <Box
                          component="span"
                          sx={{
                            textDecoration: "underline",
                            color: "#60A5FA",
                            cursor: "pointer",
                          }}
                        >
                          (that's a guarantee!)
                        </Box>
                        .
                      </Typography>
                    </Box>

                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "1.1rem",
                          lineHeight: 1.6,
                          "&::before": {
                            content: '"•"',
                            marginRight: 1,
                          },
                        }}
                      >
                        Unlike many other online shipping software, Smart Send
                        is completely free to use.
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 3 }}>
                      <Typography
                        sx={{
                          color: "#FDE047",
                          fontSize: "1.2rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        Link an account &gt;
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          <Paper
            elevation={0}
            sx={{
              backgroundColor: "white",
              borderRadius: 3,
              border: `2px solid #E0E0E0`,
              overflow: "hidden",
              mx: "auto",
              p: 4,
              width: "100%",
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                mb: 4,
                color: "#1E3A8A",
              }}
            >
              Link your sales channels and upload your orders
            </Typography>

            {/* Logos Grid */}
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {/* Row 1 */}
              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={Amazon}
                    alt="Amazon"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={Ebay}
                    alt="eBay"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={Etsay}
                    alt="Etsy"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={Tiktok}
                    alt="TikTok"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    color="text.primary"
                  >
                    Not On The High Street
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={Shopify}
                    alt="Shopify"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              {/* Row 2 */}
              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={Km}
                    alt="EKM"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={Wix}
                    alt="Wix"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={Magento}
                    alt="Magento"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={BigCommerce}
                    alt="BigCommerce"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={SquareSpace}
                    alt="Squarespace"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={PrestaShop}
                    alt="PrestaShop"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              {/* Row 3 */}
              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={WooCommerce}
                    alt="WooCommerce"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={OnBuy}
                    alt="OnBuy.com"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={BluePark}
                    alt="Bluepark"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Image
                    src={ShopWiered}
                    alt="Shopwired"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={6} sm={4} md={2}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: 2,
                    border: "1px solid #E0E0E0",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 80,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{
                      color: "#10B981",
                      textAlign: "center",
                    }}
                  >
                    CSV
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* All the features, none of the costs section */}
          <Stack>
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                mb: 4,
              }}
            >
              All the features, none of the costs
            </Typography>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "white",
                borderRadius: 3,
                border: `2px solid #E0E0E0`,
                overflow: "hidden",
                mx: "auto",
                p: 4,
                width: "100%",
              }}
            >
              {/* Features List */}
              <Stack spacing={2}>
                {/* Feature 1 - Multi-channel integration */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 3,
                    border: "1px solid #E0E0E0",
                    borderRadius: 2,
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: "#10B981",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} gap={1}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Multi-channel integration
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ lineHeight: 1.6, color: "text.primary" }}
                    >
                      Manually add orders via a CSV or link an unlimited number
                      of sales channels, choosing from the 16 we currently have,
                      as well as Royal Mail OBA.
                    </Typography>
                  </Box>
                </Box>

                {/* Feature 2 - Rule manager */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 3,
                    border: "1px solid #E0E0E0",
                    borderRadius: 2,
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: "#10B981",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} gap={1}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Rule manager
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ lineHeight: 1.6, color: "text.primary" }}
                    >
                      Automate your imported orders by creating rules like items
                      sold on eBay should be shipped with Evri Postable, or
                      products over 1kg should be sent with DPD.
                    </Typography>
                  </Box>
                </Box>

                {/* Feature 3 - Mark as dispatched */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 3,
                    border: "1px solid #E0E0E0",
                    borderRadius: 2,
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: "#10B981",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} gap={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      color="text.primary"
                    >
                      Mark as dispatched
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ lineHeight: 1.6, color: "text.primary" }}
                    >
                      Send a tracking link to your marketplace in a single
                      click.
                    </Typography>
                  </Box>
                </Box>

                {/* Feature 4 - Bulk label creation */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 3,
                    border: "1px solid #E0E0E0",
                    borderRadius: 2,
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: "#10B981",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} gap={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      color="text.primary"
                    >
                      Bulk label creation
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ lineHeight: 1.6, color: "text.primary" }}
                    >
                      Generate and print multiple labels at a time saving you
                      hours of time and add SKU codes to labels.
                    </Typography>
                  </Box>
                </Box>

                {/* Feature 5 - Picking and packing assistance */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 3,
                    border: "1px solid #E0E0E0",
                    borderRadius: 2,
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: "#10B981",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} gap={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      color="text.primary"
                    >
                      Picking and packing assistance
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ lineHeight: 1.6, color: "text.primary" }}
                    >
                      Use picking and packing slips and SKU codes to sort and
                      prioritise orders.
                    </Typography>
                  </Box>
                </Box>

                {/* Feature 6 - Returns management */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 3,
                    border: "1px solid #E0E0E0",
                    borderRadius: 2,
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: "#10B981",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} gap={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{ mb: 1 }}
                    >
                      Returns management
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ lineHeight: 1.6, color: "text.primary" }}
                    >
                      Easily generate returns labels where needed.
                    </Typography>
                  </Box>
                </Box>

                {/* Feature 7 - Automated payments */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 3,
                    border: "1px solid #E0E0E0",
                    borderRadius: 2,
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: "#10B981",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>
                  <Box display={"flex"} flexDirection={"column"} gap={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{ mb: 1 }}
                    >
                      Automated payments -
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ lineHeight: 1.6, color: "text.primary" }}
                    >
                      Top up your account and enable auto top-up so funds never
                      run low.
                    </Typography>
                  </Box>
                </Box>

                {/* Feature 8 - Invoice management */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 3,
                    border: "1px solid #E0E0E0",
                    borderRadius: 2,
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundColor: "#10B981",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      ✓
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{ mb: 1 }}
                    >
                      Invoice management
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: 1.6, color: "text.primary" }}
                    >
                      Create custom invoices for your business records.
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Paper>
          </Stack>

          {/* Customer Stories Slider Section */}
          <Stack spacing={4} alignItems="center" sx={{ width: "100%" }}>
            <Container
              maxWidth="lg"
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Swiper
                style={{ width: "100%", maxWidth: "1200px" }}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                {customerStories.map((story, index) => (
                  <SwiperSlide key={index}>
                    <Paper
                      elevation={0}
                      sx={{
                        borderRadius: 3,
                        overflow: "hidden",
                        border: `2px solid #E0E0E0`,
                        backgroundColor: "white",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {/* Image Container */}
                      <Box
                        sx={{
                          width: "100%",
                          height: 200,
                          overflow: "hidden",
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center", 
                        }}
                      >
                        <Image
                          src={story.image}
                          alt={story.title}
                          style={{
                            width: 150,
                            height: "auto", 
                            maxHeight: "100%", 
                            objectFit: "contain", 
                            display: "block", 
                          }}
                        />
                      </Box>
                      {/* Content */}
                      <Box
                        sx={{
                          p: 3,
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "center",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            color: "#1E3A8A",
                            mb: 2,
                            lineHeight: 1.3,
                          }}
                        >
                          {story.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.primary",
                            lineHeight: 1.6,
                            height: "80px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 2,
                          }}
                        >
                          {story.description}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#1E3A8A",
                            fontWeight: 600,
                            cursor: "pointer",
                            "&:hover": {
                              textDecoration: "underline",
                            },
                          }}
                        >
                          Read more &gt;
                        </Typography>
                      </Box>
                    </Paper>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Container>
          </Stack>

          {/* Save up to 13% on shipping rates section */}
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "white",
              borderRadius: 3,
              border: `2px solid #E0E0E0`,
              overflow: "hidden",
              mx: "auto",
              width: "100%",
            }}
          >
            <Grid container spacing={0}>
              {/* Left Column - Blue Background with Save Image */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={SaveOn}
                    alt="Save with Smart Send - Parcels and savings graphic"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>

              {/* Right Column - White Background with Text Content */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    height: "100%",
                    p: { xs: 4, md: 6 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{
                      mb: 2,
                      color: "#1E3A8A",
                      lineHeight: 1.2,
                    }}
                  >
                    Save up to 13% on shipping rates with Smart Send
                  </Typography>

                  <Stack spacing={2}>
                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.6,
                        color: "text.primary",
                      }}
                    >
                      ParcelGo prioritises affordable shipping costs, and Smart
                      Send is even cheaper.
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.6,
                        color: "text.primary",
                      }}
                    >
                      Enjoy exclusive shipping rates on{" "}
                      <Box
                        component="span"
                        sx={{ color: "primary.main", fontWeight: 600 }}
                      >
                        Evri
                      </Box>{" "}
                      and{" "}
                      <Box
                        component="span"
                        sx={{ color: "primary.main", fontWeight: 600 }}
                      >
                        UPS
                      </Box>{" "}
                      and regular reductions on Smart Send services.
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.6,
                        color: "text.primary",
                        fontWeight: 500,
                      }}
                    >
                      You never have to worry about sky-high shipping rates.
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.6,
                        color: "text.primary",
                        fontWeight: 500,
                      }}
                    >
                      Save up to 13% on courier costs as standard, and enjoy
                      regular promotional discounts exclusive to Smart Send.
                    </Typography>

                    <Box sx={{ mt: 3 }}>
                      <UIButton
                        sx={{
                          fontWeight: "bold",
                          px: 4,
                          py: 1.5,
                        }}
                        size="large"
                        variant="contained"
                        color="primary"
                      >
                        Try Smart Send
                      </UIButton>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* Customer Reviews Section */}
          
        </Stack>
      </Container>

      {/* Demo Modal */}
      <DemoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        formData={formData}
      />
    </>
  );
};

export default SmartSend;