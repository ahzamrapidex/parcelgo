"use client";

import { Apple, FacebookIcon, GooglePlay, Ireland, LinkedInIcon, LogoWhite, TwitterIcon, UK, YouTubeIcon } from "@/assets";
import { Box, Button, Container, Grid, Link, Stack, TextField, Typography, useTheme } from "@mui/material";
import Image from "next/image";


const Footer = () => {
    const theme = useTheme();
    return (
        <>
            {/* Newsletter Signup Section */}
            <Box sx={{ backgroundColor: theme.palette.background["200"], py: 3 }}>
                <Container maxWidth="lg">
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems="center" justifyContent="space-between">
                        <Typography variant="h5" sx={{ color: 'white', fontWeight: 600, textAlign: { xs: 'center', md: 'left' } }}>
                            Sign up for new and exclusive offers
                        </Typography>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ width: { xs: '100%', md: 'auto' } }}>
                            <TextField
                                placeholder="Enter your email address"
                                variant="outlined"
                                size="small"
                                sx={{
                                    backgroundColor: 'white',
                                    borderRadius: 1,
                                    minWidth: { xs: '100%', sm: '300px' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { border: 'none' },
                                    }
                                }}
                            />
                            <Button
                                variant="contained"
                                color="secondary.main"
                                sx={{
                                    backgroundColor: 'secondary.main',
                                    color: 'white',
                                    fontWeight: 600,
                                    px: 4,
                                }}
                            >
                                Submit
                            </Button>
                        </Stack>
                    </Stack>
                </Container>
            </Box>

            {/* Main Footer Section */}
            <Box sx={{ backgroundColor: theme.palette.background["100"], py: 6, color: 'white' }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {/* Logo and Social Section */}
                        <Grid item xs={12} md={2.4}>
                            <Stack spacing={3}>
                                {/* Logo */}
                                <Image
                                    src={LogoWhite}
                                    alt="Parcel2Go logo"
                                    width={150}
                                    height={"auto"}
                                />

                                {/* Connect With Us */}
                                <Stack spacing={2}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                        Connect with us
                                    </Typography>
                                    <Stack direction="row" spacing={1}>
                                        <FacebookIcon sx={{ fontSize: 24, cursor: 'pointer', '&:hover': { opacity: 0.8 } }} />
                                        <YouTubeIcon sx={{ fontSize: 24, cursor: 'pointer', '&:hover': { opacity: 0.8 } }} />
                                        <LinkedInIcon sx={{ fontSize: 24, cursor: 'pointer', '&:hover': { opacity: 0.8 } }} />
                                        <TwitterIcon sx={{ fontSize: 24, cursor: 'pointer', '&:hover': { opacity: 0.8 } }} />
                                    </Stack>
                                </Stack>

                                {/* Country */}
                                <Stack spacing={1}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                        Country
                                    </Typography>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Image src={UK} alt="UK" width={24} height={24} />
                                        <Image src={Ireland} alt="Ireland" width={24} height={24} />
                                    </Stack>
                                </Stack>

                                {/* Download App */}
                                <Stack spacing={2}>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                        Download our P2G App
                                    </Typography>
                                    <Stack spacing={1}>
                                        <Image src={Apple} alt="Download on App Store" width={120} height={35} style={{ cursor: 'pointer' }} />
                                        <Image src={GooglePlay} alt="Get it on Google Play" width={120} height={35} style={{ cursor: 'pointer' }} />
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Grid>

                        {/* Useful Tools */}
                        <Grid item xs={12} sm={6} md={2.4}>
                            <Stack spacing={2}>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                    Useful Tools
                                </Typography>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Get a Quote
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Parcel Tracking
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    My Account
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Postcode Finder
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Volume Calculator
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    PrePay
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Item Advice
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Mobile App
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Smart Send
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Refer a Friend
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Student Discount
                                </Link>
                            </Stack>
                        </Grid>

                        {/* About P2G */}
                        <Grid item xs={12} sm={6} md={2.4}>
                            <Stack spacing={2}>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                    About P2G
                                </Typography>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Our Company
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Our Couriers
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Terms & Conditions
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Careers
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Content Hub
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Returns
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Modern Slavery Statement
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Site Map
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Charity of the Year
                                </Link>
                            </Stack>
                        </Grid>

                        {/* Top Destinations */}
                        <Grid item xs={12} sm={6} md={2.4}>
                            <Stack spacing={2}>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                    Top Destinations
                                </Typography>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Parcel Delivery to Australia
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Parcel Delivery to China
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Parcel Delivery to France
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Parcel Delivery to Germany
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Parcel Delivery to Ireland
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Parcel Delivery to Spain
                                </Link>
                                <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                    Parcel Delivery to USA
                                </Link>
                            </Stack>
                        </Grid>

                        {/* Coverage and Help & Support combined for mobile */}
                        <Grid item xs={12} md={2.4}>
                            <Stack spacing={4}>
                                {/* Coverage */}
                                <Stack spacing={2}>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                        Coverage
                                    </Typography>
                                    <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                        All Parcel Services
                                    </Link>
                                    <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                        UK Delivery
                                    </Link>
                                    <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                        Europe Delivery
                                    </Link>
                                    <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                        USA and Canada Delivery
                                    </Link>
                                    <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                        Asia Delivery
                                    </Link>
                                    <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                        Worldwide Delivery
                                    </Link>
                                    <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                        All International Services
                                    </Link>
                                </Stack>

                                {/* Help & Support */}
                                <Stack spacing={2}>
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                        Help & Support
                                    </Typography>
                                    <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                        Help Centre
                                    </Link>
                                    <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                        Make a Parcel Enquiry
                                    </Link>
                                    <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                        International Shipping Hub
                                    </Link>
                                    <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                        Contact Us
                                    </Link>
                                    <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                        Privacy Policy
                                    </Link>
                                    <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                        Cookie Policy
                                    </Link>
                                    <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                        Discount Policy
                                    </Link>
                                    <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                        Refund Policy
                                    </Link>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Copyright Section */}
            <Box sx={{ backgroundColor: theme.palette.background["200"], py: 2, color: '#ccc' }}>
                <Container maxWidth="lg">
                    <Typography variant="body2" sx={{ textAlign: 'center', fontSize: '0.875rem', color: 'white' }}>
                        @ PARCELGO LIMITED 1995-2025 All Rights Reserved. | Company Number: 16885014
                    </Typography>
                </Container>
            </Box>
        </>
    );
};

export default Footer;
