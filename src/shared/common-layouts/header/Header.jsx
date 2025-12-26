"use client";
import { Logo, ShoppingBasketIcon } from "@/assets";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";
import { AppBarStyled, ToolbarStyled } from "./ui";

const navItems = [
  { label: "Smart Send", link: "/smart-send" },
  { label: "Get a Quote", link: "/quick-quote" },
  { label: "Services", link: "/services" },
  { label: "Track a Parcel", link: "/track-parcel" },
  { label: "Bussiness", link: "/home/business" },
  { label: "Help", link: "/home/help" },
  { label: "cart", link: "/cart" },
];

const Header = () => {
  const { openMenu } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.appReducer);
  const { notificationCount } = useSelector((state) => state.appReducer);
  const router = useRouter();

  // Services menu state
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const servicesOpen = Boolean(servicesAnchorEl);

  // Mobile drawer state
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobileDrawer = (open) => () => {
    setMobileOpen(open);
  };

  const handleServicesClick = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchorEl(null);
  };

  return (
    <>
      <AppBarStyled
        position="sticky"
        sx={{ backgroundColor: "background.white", py: 1 }}
        elevation={1}
      >
        <ToolbarStyled>
          <Container maxWidth="xl">
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                component="img"
                src={Logo.src}
                alt="logo"
                sx={{
                  cursor: "pointer",
                  width: {
                    xs: "120px", // mobile width
                    sm: "140px", // tablet width  
                    md: "160px", // desktop width
                  },
                  height: "auto",
                  objectFit: "contain"
                }}
                onClick={() => router.push("/home")}
              />

              {/* Mobile menu icon (right on mobile) */}
              <IconButton
                aria-label="open navigation menu"
                onClick={toggleMobileDrawer(true)}
                sx={{ display: { xs: "inline-flex", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              {/* Navigation Items */}
              <List sx={{ display: { xs: "none", md: "flex" }, gap: 0 }}>
                {navItems.map((item) =>
                  item.label === "cart" ? (
                    <ListItem key={item.label} disablePadding>
                      <ListItemButton
                        sx={{ textAlign: "center" }}
                        onClick={() => router.push(item.link)}
                      >
                        <ShoppingBasketIcon sx={{ color: "text.primary" }} />
                      </ListItemButton>
                    </ListItem>
                  ) : item.label === "Services" ? (
                    <ListItem key={item.label} disablePadding>
                      <ListItemButton
                        sx={{ textAlign: "center" }}
                        onClick={handleServicesClick}
                      >
                        {/* <Button
                          id="services-button"
                          aria-controls={
                            servicesOpen ? "services-menu" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={servicesOpen ? "true" : undefined}
                          onClick={handleServicesClick}
                        >
                          {item.label}
                        </Button> */}
                        <Typography
                          id="services-button"
                          aria-controls={
                            servicesOpen ? "services-menu" : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={servicesOpen ? "true" : undefined}
                          onClick={handleServicesClick}
                          variant="body1"
                          sx={{
                            fontWeight: "bold",
                            color: "text.primary",
                            textWrap: "nowrap",
                          }}
                        >
                          {item.label}
                        </Typography>
                      </ListItemButton>
                      <ServicesMenu
                        anchorEl={servicesAnchorEl}
                        open={servicesOpen}
                        onClose={handleServicesClose}
                      />
                    </ListItem>
                  ) : (
                    <ListItem key={item.label} disablePadding>
                      <ListItemButton
                        sx={{ textAlign: "center" }}
                        onClick={() => router.push(item.link)}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: "bold",
                            color: "text.primary",
                            textWrap: "nowrap",
                          }}
                        >
                          {item.label}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>

              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Profile dropdown={true} />
              </Box>
            </Stack>
          </Container>
        </ToolbarStyled>
      </AppBarStyled>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleMobileDrawer(false)}
        ModalProps={{ keepMounted: true }}
      >
        <Box sx={{ width: 300, display: "flex", flexDirection: "column", height: "100%" }} role="presentation">
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ p: 2 }}>
            <Image
              src={Logo}
              style={{ cursor: "pointer" }}
              alt="logo"
              width={120}
              objectFit="contain"
              onClick={() => {
                router.push("/home");
                setMobileOpen(false);
              }}
            />
            <IconButton aria-label="close navigation menu" onClick={toggleMobileDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider />
          <List sx={{ p: 0 }}>
            {navItems.map((item) => (
              <ListItem key={`mobile-${item.label}`} disablePadding>
                <ListItemButton
                  sx={{ textAlign: "left" }}
                  onClick={() => {
                    // For mobile, navigate directly for all items, including Services
                    router.push(item.link);
                    setMobileOpen(false);
                  }}
                >
                  {item.label === "cart" ? (
                    <ShoppingBasketIcon sx={{ color: "text.primary", mr: 1 }} />
                  ) : null}
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "text.primary" }}
                  >
                    {item.label === "cart" ? "Cart" : item.label}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ mt: "auto", p: 2 }}>
            <Profile dropdown={true} />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;

const ServicesMenu = ({ anchorEl, open, onClose }) => {
  const router = useRouter();

  const handleMenuItemClick = (link) => {
    router.push(link);
    onClose();
  };

  return (
    <Menu
      id="services-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      sx={{
        minWidth: "1800px",
        width: "100%",
      }}
      slotProps={{
        paper: {
          sx: {
            // width: "fit-content",
            // minWidth: "800px",
            // maxWidth: "1200px",
            backgroundColor: "background.white",
            mt: 1,
            borderRadius: 2,
            boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
            border: "1px solid #e0e3ea",
            // left: "50% !important",
            // transform: "translateX(-50%) !important",
          },
        },
      }}
      transformOrigin={{ horizontal: "center", vertical: "top" }}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
    >
      {/* <Paper sx={{ width: "100%", p: 0, backgroundColor: "background.white" }}> */}
      <Container maxWidth="auto" sx={{ py: 4, px: 3, }}>
        <Grid container spacing={6}>
          {/* Range of Couriers */}
          <Grid item xs={12} sm={6} md={4}>
            <Stack spacing={3}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#2E5B8A",
                  fontSize: "1.1rem",
                  mb: 1,
                  whiteSpace: "nowrap",
                }}
              >
                Range of Couriers
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {[
                  // "All Couriers",
                  "FedEx Express",
                  "Parcelforce",
                  "UPS",
                  "DPD",
                  "DHL",
                  "Aramex",
                  "Canpar",
                  "Skynet",
                ].map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      const courierRoutes = {
                        // "All Couriers": "/couriers/all",
                        "FedEx Express": "/couriers/Fedex",
                        "Parcelforce": "/couriers/parcel-force",
                        "UPS": "/couriers/ups",
                        "DPD": "/couriers/DPD",
                        "DHL": "/couriers/dhl",
                        "Aramex": "/couriers/aramex",
                        "Canpar": "/couriers/canpar",
                        "Skynet": "/couriers/skynet",
                      };
                      const route = courierRoutes[item] || "/services/couriers";
                      handleMenuItemClick(route);
                    }}
                    sx={{
                      p: 0,
                      py: 0,
                      minHeight: "auto",
                      "&:hover": {
                        backgroundColor: "rgba(46, 91, 138, 0.04)",
                        color: "#2E5B8A",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "text.secondary",
                          fontSize: "0.9rem",
                          "&:hover": {
                            color: "#2E5B8A",
                          },
                        }}
                      >
                        {typeof item === "string" ? item : item.name}
                      </Typography>
                      {typeof item === "object" && item.isNew && (
                        <Typography
                          component="span"
                          sx={{
                            ml: 1,
                            fontSize: "0.7rem",
                            color: "white",
                            backgroundColor: "#4A90E2",
                            px: 0.8,
                            py: 0.2,
                            borderRadius: 0.5,
                            fontWeight: 600,
                          }}
                        >
                          NEW
                        </Typography>
                      )}
                    </Box>
                  </MenuItem>
                ))}
              </Box>
            </Stack>
          </Grid>


          {/* International Parcel Delivery */}
          <Grid item xs={12} sm={6} md={4}>
            <Stack spacing={3}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#2E5B8A",
                  fontSize: "1.1rem",
                  mb: 1,
                }}
              >
                International Parcel Delivery
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {[
                  { name: "EU Shipping info", isNew: true },
                  "All International Delivery",
                  "Economy Delivery",
                  "Express Delivery",
                  "Germany Delivery",
                  "Australia Delivery",
                  "Spain Delivery",
                  "USA Delivery",
                  "European Delivery",
                  "Asia Delivery",
                  "Worldwide Delivery",
                  "Delivery Services",
                ].map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={() =>
                      handleMenuItemClick("/services/international")
                    }
                    sx={{
                      p: 0,
                      py: 0,
                      minHeight: "auto",
                      "&:hover": {
                        backgroundColor: "rgba(46, 91, 138, 0.04)",
                        color: "#2E5B8A",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "text.secondary",
                          fontSize: "0.9rem",
                          "&:hover": {
                            color: "#2E5B8A",
                          },
                        }}
                      >
                        {typeof item === "string" ? item : item.name}
                      </Typography>
                      {typeof item === "object" && item.isNew && (
                        <Typography
                          component="span"
                          sx={{
                            ml: 1,
                            fontSize: "0.7rem",
                            color: "white",
                            backgroundColor: "#4A90E2",
                            px: 0.8,
                            py: 0.2,
                            borderRadius: 0.5,
                            fontWeight: 600,
                          }}
                        >
                          NEW
                        </Typography>
                      )}
                    </Box>
                  </MenuItem>
                ))}
              </Box>
            </Stack>
          </Grid>

          {/* Delivery Tools */}
          <Grid item xs={12} sm={6} md={4}>
            <Stack spacing={3}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#2E5B8A",
                  fontSize: "1.1rem",
                  mb: 1,
                  whiteSpace: "nowrap",
                }}
              >
                Delivery Tools
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {[
                  "ParcelGo Prepay",
                  "Postcode Finder",
                  "Parcel Volume Calculator",
                  "Print Your Labels",
                  "Print a Commercial Invoice",
                  "Rearrange Your Collection",
                  "Prohibited Items",
                  "Track a Parcel",
                  "Content Hub",
                  "Parcel Delivery Advice",
                  "Mobile App",
                  "Ecommerce Shipping",
                  "Despatch Bay Alternative",
                ].map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => handleMenuItemClick("/services/tools")}
                    sx={{
                      p: 0,
                      py: 0,
                      minHeight: "auto",
                      "&:hover": {
                        backgroundColor: "rgba(46, 91, 138, 0.04)",
                        color: "#2E5B8A",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.9rem",
                        "&:hover": {
                          color: "#2E5B8A",
                        },
                      }}
                    >
                      {item}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      {/* </Paper> */}
    </Menu>
  );
};
