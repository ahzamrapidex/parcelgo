"use client";
// import from local
import Logo from "./images/parcelgo.png";
import LogoWhite from "./images/logo-white.png";
import Robot from "./images/original.png";
import Robot1 from "./images/1.png";
import Robot2 from "./images/2.png";
import Robot3 from "./images/3.png";
import Robot4 from "./images/4.png";
import TikTok from "./images/SmartSend_graphicmobile_.webp";
import Star from "./images/star.webp";
import USA from "./images/America.webp";
import SignIn from "./images/Trust.webp";
import Tracking1 from "./images/tracking-1.png";
import Tracking2 from "./images/tracking-2.png";
import Parcel from "./images/woman_on_telephone.webp";
import World from "./images/tracking_graphic.webp";
import Delivery from "./images/fast_delivery_graphic.webp";
import UK from "./images/uk.svg";
import Ireland from "./images/Ireland.svg";
import Apple from "./images/apple.png";
import GooglePlay from "./images/google_play.png";
import NearestLocation from "./images/nearest_location.webp";
import FedEx from "./images/fedex.webp";
import FedExAbout from "./images/fedex-about.webp";
import FedexTracking from "./images/fedex-free-tracking.webp";
import FedexSustainableShipping from "./images/fedex-sustainable-shipping.webp";
import FedexCourierFaqs from "./images/fedex_courier_faqs.webp";
import FedExStock from "./images/fedex-stock.webp";
import FedExWeightMeasure from "./images/fedex-weight-measure.webp";
import FedExCheckList from "./images/fedex-checklist.webp";
import GetAQuote from "./images/get_a_quote.webp";
import Coins from "./images/coins.webp";
import SmartSend from "./images/smart_send.webp";
import BussinessAccount from "./images/bussiness_account.webp";
import SmartSend2 from "./images/smart_send2.webp";
import Duck from "./images/duck.webp";
import ParcelImage from "./images/parcelsImage.webp";
import WhatSmartSend from "./images/whatSmartSend.webp";
import WhySmartSend from "./images/whySmartSend.webp";
import Amazon from "./images/amazon.webp";
import BigCommerce from "./images/big-commerce.webp";
import BluePark from "./images/blue-park.webp";
import Ebay from "./images/ebay.webp";
import Etsay from "./images/etsay.webp";
import Km from "./images/km.webp";
import Magento from "./images/magento.webp";
import OnBuy from "./images/on-buy.webp";
import PrestaShop from "./images/presta-shop.webp";
import ShopWiered from "./images/shop-wiered.webp";
import Shopify from "./images/shopify.webp";
import SquareSpace from "./images/square-space.webp";
import Tiktok from "./images/tiktok.webp";
import Wix from "./images/wix.webp";
import WooCommerce from "./images/woo-commerce.webp";
import SaveOn from "./images/save.webp";
import DYDynamo from "./images/diy_dynamo.webp";
import MarketplaceMultitask from "./images/marketplace_multitasker.webp";
import SavvySide from "./images/savvy_side.webp";
import FedexBanner from "./images/fedexbanner.webp";
import FedexBanner2 from "./images/fedexbanner-2.webp";
import UPSBanner from "./images/upsBanner.webp";
import UPSVan from "./images/upsVan.webp";
import UPSAbout from "./images/UPSAbout.webp";
import UPSFreeTracking from "./images/UPSFreeTracking.webp";
import DHLBanner from "./images/DHLBannner.webp";
import DHLVan from "./images/DHLVan.webp";
import DHLAbout from "./images/AboutDHL.webp";
import DHLFreeTracking from "./images/DHLTracking.webp";
import BannerParcelForce from "./images/bannerParcelForce.webp";
import WhyParcelForce from "./images/whyParcelForce.webp";
import AboutParcelForce from "./images/aboutparcelforce.webp";
import ParcelForceTracking from "./images/parcelforce-tracking.webp";
import AramexWhy from "./images/AramexVan.jpg";
import AboutAramex from "./images/AboutAramex.jpg";
import TrackingAramex from "./images/trackingAramex.jpeg";
import whySkynet from "./images/whySkynet.jpeg";
import Skynet2 from "./images/Skynet2.jpg";
import DPDBanner from "./images/dpdBanner.webp";
import WhyDPD from "./images/dpdWhy.webp";
import AboutDPD from "./images/dpdAbout.webp";
import DPDservices from "./images/dpdServices.webp";
import FedexLogo from "./images/Fedexlogo.svg";
import ParcelForceLogo from "./images/parcelforce.svg";
import UPSLogo from "./images/UPSLogo.svg";
import DPDLogo from "./images/dpdLogo.svg";
import AllCourierOne from "./images/allCourierOne.webp";
// import AllCourierTwo from "./images/allCourierTwo.webp";

// FedEx inner slider cards
const FedexInnerCards = [
  {
    title: "What are the size restrictions of the Parcel2go.com services?",
    image:
      typeof FedExCheckList === "object"
        ? FedExCheckList
        : { src: FedExCheckList },
    href: "#",
  },
  {
    title: "How to Make Your Shipping More Sustainable",
    image:
      typeof FedexSustainableShipping === "object"
        ? FedexSustainableShipping
        : { src: FedexSustainableShipping },
    href: "#",
  },
  {
    title: "FedEx Express Courier FAQs",
    image:
      typeof FedexCourierFaqs === "object"
        ? FedexCourierFaqs
        : { src: FedexCourierFaqs },
    href: "#",
  },
  {
    title: "What’s the Best Way to Send a Large or Heavy Parcel?",
    image: typeof FedExStock === "object" ? FedExStock : { src: FedExStock },
    href: "#",
  },
  {
    title: "How to Weigh and Measure a Parcel",
    image:
      typeof FedExWeightMeasure === "object"
        ? FedExWeightMeasure
        : { src: FedExWeightMeasure },
    href: "#",
  },
];

export {
  BannerParcelForce,
  AllCourierOne,
  whySkynet,
  UPSLogo,
  DPDLogo,
  WhatSmartSend,
  ParcelForceTracking,
  ParcelForceLogo,
  WhySmartSend,
  AboutParcelForce,
  SaveOn,
  DHLVan,
  Tracking1,
  Tracking2,
  DYDynamo,
  Skynet2,
  WhyParcelForce,
  MarketplaceMultitask,
  SavvySide,
  FedexBanner,
  UPSBanner,
  FedexBanner2,
  UPSAbout,
  UPSFreeTracking,
  DHLBanner,
  DHLFreeTracking,
  AramexWhy,
  AboutAramex,
  TrackingAramex,
  DPDBanner,
  WhyDPD,
  AboutDPD,
  DPDservices,
  Logo,
  LogoWhite,
  Robot,
  Robot1,
  Robot2,
  Robot3,
  Robot4,
  TikTok,
  Star,
  USA,
  SignIn,
  Parcel,
  World,
  Delivery,
  FedexLogo,
  UK,
  Ireland,
  Apple,
  GooglePlay,
  UPSVan,
  NearestLocation,
  FedEx,
  FedExAbout,
  FedexTracking,
  DHLAbout,
  FedexSustainableShipping,
  FedexCourierFaqs,
  FedExStock,
  FedExWeightMeasure,
  FedExCheckList,
  FedexInnerCards,
  GetAQuote,
  Coins,
  SmartSend,
  BussinessAccount,
  SmartSend2,
  Duck,
  ParcelImage,
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
};

// import from material ui icons
import AddIcon from "@mui/icons-material/Add";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DollarIcon from "@mui/icons-material/AttachMoneyOutlined";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DeleteIcon from "@mui/icons-material/Delete";
import DescriptionIcon from "@mui/icons-material/Description";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import EditIcon from "@mui/icons-material/Edit";
import GavelIcon from "@mui/icons-material/Gavel";
import InventoryIcon from "@mui/icons-material/Inventory";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import TransportIcon from "@mui/icons-material/LocalShipping";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PaidIcon from "@mui/icons-material/Paid";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import HistoryIcon from "@mui/icons-material/RestorePage";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WorkIcon from "@mui/icons-material/Work";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SchoolIcon from "@mui/icons-material/School";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Person2Icon from "@mui/icons-material/Person2";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FaqDrawer from '../shared/common-layouts/faqs/faqs-drawer';

export {
  AddIcon,
  AttachFileIcon,
  ChatIcon,
  CloseIcon,
  DashboardIcon,
  DeleteIcon,
  DescriptionIcon,
  DollarIcon,
  DoneAllIcon,
  EditIcon,
  GavelIcon,
  HistoryIcon,
  Inventory2OutlinedIcon,
  InventoryIcon,
  LibraryBooksIcon,
  LogoutIcon,
  MenuIcon,
  MoreHorizIcon,
  NotificationsIcon,
  PaidIcon,
  Person2Icon,
  RemoveRedEyeIcon,
  SchoolIcon,
  SearchIcon,
  SettingsIcon,
  ShoppingBasketIcon,
  StarBorderIcon,
  TransportIcon,
  VisibilityIcon,
  WorkIcon,
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
  YouTubeIcon,
  LinkedInIcon,
  TwitterIcon,
};
