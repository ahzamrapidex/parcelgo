import {
  Cancel,
  CheckCircle,
  EditNote,
  PendingActions,
} from "@mui/icons-material";

export const APP_TOKEN = process.env.NEXT_PUBLIC_APP_TOKEN;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const DRAWER_BREAK_POINT = "(min-width:1000px)";
export const DRAWER_WIDTH = { xs: 260, md: 220, lg: 260 };
export const FLOW_SPACER = { md: 4, xs: 2 };

export let status = {
  Pending: { label: "Pending", color: "#B0BEC5", icon: EditNote },
  "In Progress": {
    label: "In Progress",
    color: "#FFD580",
    icon: PendingActions,
  },
  Completed: { label: "Completed", color: "#90EE90", icon: CheckCircle },
  Cancelled: { label: "Cancelled", color: "#FFB6C1", icon: Cancel },
};

export const orderStatus = [
  {
    label: "Pending",
    value: "Pending",
  },
  {
    label: "In Progress",
    value: "In Progress",
  },
  {
    label: "Cancelled",
    value: "Cancelled",
  },
  {
    label: "Completed",
    value: "Completed",
  },
];

export const Quantity = [
  {
    label: "1",
    value: "1",
  },
  {
    label: "2",
    value: "2",
  },
  {
    label: "3",
    value: "3",
  },

  {
    label: "4",
    value: "4",
  },

  {
    label: "5",
    value: "5",
  },

  {
    label: "6",
    value: "6",
  },

  {
    label: "7",
    value: "7",
  },

  {
    label: "8",
    value: "8",
  },

  {
    label: "9",
    value: "9",
  },

  {
    label: "10",
    value: "10",
  },
  {
    label: "11",
    value: "11",
  },
  {
    label: "12",
    value: "12",
  },
  {
    label: "13",
    value: "13",
  },
  {
    label: "14",
    value: "14",
  },
  {
    label: "15",
    value: "15",
  },
  {
    label: "16",
    value: "16",
  },
  {
    label: "17",
    value: "17",
  },
  {
    label: "18",
    value: "18",
  },
  {
    label: "19",
    value: "19",
  },
  {
    label: "20",
    value: "20",
  },
  {
    label: "21",
    value: "21",
  },
  {
    label: "22",
    value: "22",
  },
  {
    label: "23",
    value: "23",
  },
  {
    label: "24",
    value: "24",
  },
  {
    label: "25",
    value: "25",
  },
  {
    label: "26",
    value: "26",
  },
  {
    label: "27",
    value: "27",
  },
  {
    label: "28",
    value: "28",
  },
  {
    label: "29",
    value: "29",
  },
  {
    label: "30",
    value: "30",
  },
  {
    label: "31",
    value: "31",
  },
  {
    label: "32",
    value: "32",
  },
  {
    label: "33",
    value: "33",
  },
  {
    label: "34",
    value: "34",
  },
  {
    label: "35",
    value: "35",
  },
  {
    label: "36",
    value: "36",
  },
  {
    label: "37",
    value: "37",
  },

  {
    label: "38",
    value: "38",
  },
  {
    label: "39",
    value: "39",
  },
  {
    label: "40",
    value: "40",
  },
  {
    label: "41",
    value: "41",
  },
  {
    label: "42",
    value: "42",
  },
  {
    label: "43",
    value: "43",
  },
  {
    label: "44",
    value: "44",
  },
  {
    label: "45",
    value: "45",
  },
  {
    label: "46",
    value: "46",
  },
  {
    label: "47",
    value: "47",
  },
  {
    label: "48",
    value: "48",
  },

  {
    label: "49",
    value: "49",
  },
  {
    label: "50",
    value: "50",
  },
];

// ...existing code...

// Add comprehensive countries list
export const AllCountries = [
  { label: "Afghanistan", value: "AF" },
  { label: "Albania", value: "AL" },
  { label: "Algeria", value: "DZ" },
  { label: "American Samoa", value: "AS" },
  { label: "Andorra", value: "AD" },
  { label: "Angola", value: "AO" },
  { label: "Anguilla", value: "AI" },
  { label: "Antarctica", value: "AQ" },
  { label: "Antigua and Barbuda", value: "AG" },
  { label: "Argentina", value: "AR" },
  { label: "Armenia", value: "AM" },
  { label: "Aruba", value: "AW" },
  { label: "Australia", value: "AU" },
  { label: "Austria", value: "AT" },
  { label: "Azerbaijan", value: "AZ" },
  { label: "Bahamas", value: "BS" },
  { label: "Bahrain", value: "BH" },
  { label: "Bangladesh", value: "BD" },
  { label: "Barbados", value: "BB" },
  { label: "Belarus", value: "BY" },
  { label: "Belgium", value: "BE" },
  { label: "Belize", value: "BZ" },
  { label: "Benin", value: "BJ" },
  { label: "Bermuda", value: "BM" },
  { label: "Bhutan", value: "BT" },
  { label: "Bolivia", value: "BO" },
  { label: "Bosnia and Herzegovina", value: "BA" },
  { label: "Botswana", value: "BW" },
  { label: "Brazil", value: "BR" },
  { label: "British Virgin Islands", value: "VG" },
  { label: "Brunei", value: "BN" },
  { label: "Bulgaria", value: "BG" },
  { label: "Burkina Faso", value: "BF" },
  { label: "Burundi", value: "BI" },
  { label: "Cambodia", value: "KH" },
  { label: "Cameroon", value: "CM" },
  { label: "Canada", value: "CA" },
  { label: "Cape Verde", value: "CV" },
  { label: "Cayman Islands", value: "KY" },
  { label: "Central African Republic", value: "CF" },
  { label: "Chad", value: "TD" },
  { label: "Chile", value: "CL" },
  { label: "China", value: "CN" },
  { label: "Colombia", value: "CO" },
  { label: "Comoros", value: "KM" },
  { label: "Congo", value: "CG" },
  { label: "Congo (Democratic Republic)", value: "CD" },
  { label: "Cook Islands", value: "CK" },
  { label: "Costa Rica", value: "CR" },
  { label: "Croatia", value: "HR" },
  { label: "Cuba", value: "CU" },
  { label: "Cyprus", value: "CY" },
  { label: "Czech Republic", value: "CZ" },
  { label: "Denmark", value: "DK" },
  { label: "Djibouti", value: "DJ" },
  { label: "Dominica", value: "DM" },
  { label: "Dominican Republic", value: "DO" },
  { label: "Ecuador", value: "EC" },
  { label: "Egypt", value: "EG" },
  { label: "El Salvador", value: "SV" },
  { label: "Equatorial Guinea", value: "GQ" },
  { label: "Eritrea", value: "ER" },
  { label: "Estonia", value: "EE" },
  { label: "Ethiopia", value: "ET" },
  { label: "Faroe Islands", value: "FO" },
  { label: "Fiji", value: "FJ" },
  { label: "Finland", value: "FI" },
  { label: "France", value: "FR" },
  { label: "French Guiana", value: "GF" },
  { label: "French Polynesia", value: "PF" },
  { label: "Gabon", value: "GA" },
  { label: "Gambia", value: "GM" },
  { label: "Georgia", value: "GE" },
  { label: "Germany", value: "DE" },
  { label: "Ghana", value: "GH" },
  { label: "Gibraltar", value: "GI" },
  { label: "Greece", value: "GR" },
  { label: "Greenland", value: "GL" },
  { label: "Grenada", value: "GD" },
  { label: "Guadeloupe", value: "GP" },
  { label: "Guam", value: "GU" },
  { label: "Guatemala", value: "GT" },
  { label: "Guinea", value: "GN" },
  { label: "Guinea-Bissau", value: "GW" },
  { label: "Guyana", value: "GY" },
  { label: "Haiti", value: "HT" },
  { label: "Honduras", value: "HN" },
  { label: "Hong Kong", value: "HK" },
  { label: "Hungary", value: "HU" },
  { label: "Iceland", value: "IS" },
  { label: "India", value: "IN" },
  { label: "Indonesia", value: "ID" },
  { label: "Iran", value: "IR" },
  { label: "Iraq", value: "IQ" },
  { label: "Ireland", value: "IE" },
  { label: "Israel", value: "IL" },
  { label: "Italy", value: "IT" },
  { label: "Jamaica", value: "JM" },
  { label: "Japan", value: "JP" },
  { label: "Jordan", value: "JO" },
  { label: "Kazakhstan", value: "KZ" },
  { label: "Kenya", value: "KE" },
  { label: "Kiribati", value: "KI" },
  { label: "Kuwait", value: "KW" },
  { label: "Kyrgyzstan", value: "KG" },
  { label: "Laos", value: "LA" },
  { label: "Latvia", value: "LV" },
  { label: "Lebanon", value: "LB" },
  { label: "Lesotho", value: "LS" },
  { label: "Liberia", value: "LR" },
  { label: "Libya", value: "LY" },
  { label: "Liechtenstein", value: "LI" },
  { label: "Lithuania", value: "LT" },
  { label: "Luxembourg", value: "LU" },
  { label: "Macau", value: "MO" },
  { label: "Madagascar", value: "MG" },
  { label: "Malawi", value: "MW" },
  { label: "Malaysia", value: "MY" },
  { label: "Maldives", value: "MV" },
  { label: "Mali", value: "ML" },
  { label: "Malta", value: "MT" },
  { label: "Marshall Islands", value: "MH" },
  { label: "Martinique", value: "MQ" },
  { label: "Mauritania", value: "MR" },
  { label: "Mauritius", value: "MU" },
  { label: "Mexico", value: "MX" },
  { label: "Micronesia", value: "FM" },
  { label: "Moldova", value: "MD" },
  { label: "Monaco", value: "MC" },
  { label: "Mongolia", value: "MN" },
  { label: "Montenegro", value: "ME" },
  { label: "Montserrat", value: "MS" },
  { label: "Morocco", value: "MA" },
  { label: "Mozambique", value: "MZ" },
  { label: "Myanmar", value: "MM" },
  { label: "Namibia", value: "NA" },
  { label: "Nauru", value: "NR" },
  { label: "Nepal", value: "NP" },
  { label: "Netherlands", value: "NL" },
  { label: "New Caledonia", value: "NC" },
  { label: "New Zealand", value: "NZ" },
  { label: "Nicaragua", value: "NI" },
  { label: "Niger", value: "NE" },
  { label: "Nigeria", value: "NG" },
  { label: "North Korea", value: "KP" },
  { label: "North Macedonia", value: "MK" },
  { label: "Norway", value: "NO" },
  { label: "Oman", value: "OM" },
  { label: "Pakistan", value: "PK" },
  { label: "Palau", value: "PW" },
  { label: "Palestine", value: "PS" },
  { label: "Panama", value: "PA" },
  { label: "Papua New Guinea", value: "PG" },
  { label: "Paraguay", value: "PY" },
  { label: "Peru", value: "PE" },
  { label: "Philippines", value: "PH" },
  { label: "Poland", value: "PL" },
  { label: "Portugal", value: "PT" },
  { label: "Puerto Rico", value: "PR" },
  { label: "Qatar", value: "QA" },
  { label: "Romania", value: "RO" },
  { label: "Russia", value: "RU" },
  { label: "Rwanda", value: "RW" },
  { label: "Saint Kitts and Nevis", value: "KN" },
  { label: "Saint Lucia", value: "LC" },
  { label: "Saint Vincent and the Grenadines", value: "VC" },
  { label: "Samoa", value: "WS" },
  { label: "San Marino", value: "SM" },
  { label: "Sao Tome and Principe", value: "ST" },
  { label: "Saudi Arabia", value: "SA" },
  { label: "Senegal", value: "SN" },
  { label: "Serbia", value: "RS" },
  { label: "Seychelles", value: "SC" },
  { label: "Sierra Leone", value: "SL" },
  { label: "Singapore", value: "SG" },
  { label: "Slovakia", value: "SK" },
  { label: "Slovenia", value: "SI" },
  { label: "Solomon Islands", value: "SB" },
  { label: "Somalia", value: "SO" },
  { label: "South Africa", value: "ZA" },
  { label: "South Korea", value: "KR" },
  { label: "South Sudan", value: "SS" },
  { label: "Spain", value: "ES" },
  { label: "Sri Lanka", value: "LK" },
  { label: "Sudan", value: "SD" },
  { label: "Suriname", value: "SR" },
  { label: "Sweden", value: "SE" },
  { label: "Switzerland", value: "CH" },
  { label: "Syria", value: "SY" },
  { label: "Taiwan", value: "TW" },
  { label: "Tajikistan", value: "TJ" },
  { label: "Tanzania", value: "TZ" },
  { label: "Thailand", value: "TH" },
  { label: "Timor-Leste", value: "TL" },
  { label: "Togo", value: "TG" },
  { label: "Tonga", value: "TO" },
  { label: "Trinidad and Tobago", value: "TT" },
  { label: "Tunisia", value: "TN" },
  { label: "Turkey", value: "TR" },
  { label: "Turkmenistan", value: "TM" },
  { label: "Tuvalu", value: "TV" },
  { label: "Uganda", value: "UG" },
  { label: "Ukraine", value: "UA" },
  { label: "United Arab Emirates", value: "AE" },
  { label: "United Kingdom", value: "GB" },
  { label: "United States", value: "US" },
  { label: "Uruguay", value: "UY" },
  { label: "Uzbekistan", value: "UZ" },
  { label: "Vanuatu", value: "VU" },
  { label: "Vatican City", value: "VA" },
  { label: "Venezuela", value: "VE" },
  { label: "Vietnam", value: "VN" },
  { label: "Yemen", value: "YE" },
  { label: "Zambia", value: "ZM" },
  { label: "Zimbabwe", value: "ZW" }
];

export const SendToCountries = AllCountries.filter(country => country.value !== "PK");


export const ProfileMenus = [{ id: 2, path: "/login", label: "Logout" }];

export const cardStyles = {
  card: {
    borderRadius: 6,
    p: 1,
    bgcolor: "#fdfdfd",
    "&:hover": {
      boxShadow: 20, // Using boxShadow instead of elevation for hover effect
    },
  },
};

export const faqsHome = [
  {
    id: 1,
    question: "How does ParcelGo work?",
    answer:
      "ParcelGo is the largest courier comparison site in the UK, with over 180 delivery services and free parcel comparison. <br /> <br />  If you need to send a parcel, just pop its measurements and destination into our quick quote tool and we will show you all of your cheapest shipping options, including next day delivery, 2+ day delivery and 3+ day delivery. <br /> <br /> Choose from couriers such as DPD, Evri and DHL and book your parcel delivery through us. We will send you a confirmation email once you complete your booking and you can track your parcel for free no matter what service you choose.",
  },
  {
    id: 2,
    question: "How long does ParcelGo take to deliver?",
    answer:
      "We can have your parcel where it needs to be as soon as this very same day or by tomorrow if you need us to! Our express delivery options mean we offer same day delivery with CitySprint and next day delivery through most of our UK couriers. With Parcelforce, your parcel could arrive before 9am, 10am or midday tomorrow. <br /><br /> And if you're not in a rush, we have a load of economy or standard 3 day delivery services from just £1.99 exc VAT too.",
  },
  {
    id: 3,
    question: "Why is ParcelGo cheaper?",
    answer:
      "We work with the UK's best couriers and international courier services to negotiate the cheapest prices for you. <br /><br /> Thousands of customers and businesses use us because our postage costs are unrivalled and if you find a cheaper price elsewhere on a comparable service, we will match it. We’re committed to finding you the cheapest postage while offering you the best parcel sending experience possible. That’s our mission",
  },
  {
    id: 4,
    question: "Who delivers for ParcelGo?",
    answer:
      "We work with the UK’s best couriers, including Royal Mail, Evri, Parcelforce and more! We also have a huge selection of international courier services if you need global shipping. <br /><br /> When you send a parcel with us, you can choose from a wide variety of delivery services to suit your needs. And we’re always working on building relationships with even more couriers to bring you the cheapest parcel delivery.",
  },
  {
    id: 5,
    question: "How do I get started with business shipping?",
    answer:
      "Delivery times can vary by location and by service you choose. It’s best to enter your parcel’s size, destination and expected collection date to get an exact time of delivery. Find more information about our delivery times.",
  },
  {
    id: 6,
    question: "What is ParcelGo PrePay?",
    answer:
      "PrePay is a way of adding credit to your ParcelGo account. Having money preloaded onto your account can make booking your parcel delivery even quicker and easier. And when you add £100 to your PrePay balance, you’ll get an extra 2% from us for free! <br /><br /> PrePay is great if you're a regular sender or want to save money on business postage. To add money onto your ParcelGo account, go to your account and click 'PrePay'.",
  },
  {
    id: 7,
    question: "How do I get postage labels with ParcelGo?",
    answer:
      "Whether you're sending a parcel from home or managing a small business, getting postage labels with ParcelGo is quick and easy. Many of our courier services offer label free drop offs where you simply scan a QR code when you drop off your parcel. Alternatively, you can download and print the shipping label at home, or choose a collection service where the courier brings the label to you at collection.",
  },
];

export const faqsQuickQuote = [
  {
    id: 1,
    question: "What is the cheapest way to send a parcel?",
    answer:
      "The cheapest way to send a parcel is with ParcelGo from just £1.99 exc VAT. Our cheapest courier service is currently provided by Evri, but we have a range of affordable delivery prices with a variety of couriers, including Yodel Direct, FedEx, and DPD. <br /><br /> Whether you need next day delivery or to send a parcel abroad, filter our quote results page by price to find the cheapest delivery service for you. <br /><br /> All of ParcelGo’s cheapest prices are based on the cost of sending a 1kg parcel, but enter your parcel’s weight and dimensions into the quick quote tool above to get an accurate price.",
  },
  {
    id: 2,
    question: "Which courier service is the best in the UK?",
    answer:
      "The best courier service in the UK depends on your needs. Use ParcelGo’s quick quote tool to easily compare a range of courier services by price, speed and customer rating. Book your parcel delivery in minutes! <br /><br /> And if you’re looking for the cheapest courier service, ParcelGo is guaranteed to be your cheapest option. And with free tracking available with every order, you can rest assured your parcel will arrive where and when you need it to.",
  },
  {
    id: 3,
    question: "How to send multiple parcels?",
    answer:
      "To send multiple parcels at once, use our quick quote tool as usual but change the quantity of parcels you’d like to send. If you're sending parcels with different sizes or weights, alter this in just seconds when you get a ParcelGo quote. <br /><br /> Choose your preferred courier service and follow the booking process as usual - you can enter the different values, contents and delivery addresses for your parcels before you book. <br /><br /> And if bulk parcel delivery is something you manage regularly, you could benefit from using Smart Send. Our free shipping management tool allows you to oversee parcel delivery from multiple sales channels all from one place, as well as automating your orders. Smart Send can save you bags of time on admin and allows you to streamline your parcel delivery.",
  },
];

export const faqsFedex = [
  {
    id: 1,
    question: "How much does Fedex Express parcel delivery cost?",
    answer: "You can find cheap prices for a FedEx Express delivery using our quick quote tool. Prices for FedEx Express UK courier services start from £3.65 exc VAT.",
  },
  {
    id: 2,
    question: "What type of courier services does Fedex Express offer?",
    answer: "You can book a FedEx Express collection from your home or from the location of your choice. You can also go to a FedEx Express drop off point. <br /><br /> If you need, you can book FedEx Express shipping to international destinations or from door to door in the UK.",
  },
  {
    id: 3,
    question: "How long does Fedex Express take to deliver parcels?",
    answer: "How late does FedEx Express deliver until? Delivery times are usually from 8am to 8pm Monday to Friday, but it depends on the service you choose. If you want to check when they stop delivering for your parcel, you can track using FedEx Express’ shipping tracker.",
  },
  {
    id: 4,
    question: "Are TNT and Fedex Express the same?",
    answer: "FedEx Express delivery and TNT are now both part of the FedEx offering. FedEx acquired TNT in 2016",
  },
  {
    id: 5,
    question: "Does Fedex Express deliver on weekends?",
    answer: "FedEx Express doesn't offer weekend delivery. Standard delivery times are Monday - Friday between 8am - 8pm. Find our weekend delivery options here.",
  },
  {
    id: 5,
    question: "How to send a Fedex Express parcel?",
    answer: "To send a FedEx Express parcel, book your delivery online, print and attach your label, then drop it off at your nearest FedEx location or arrange a collection from your door. Send from just £2.20 with ParcelGo and track your parcel for free.",
  },
];

export const faqsDHL = [
  {
    id: 1,
    question: "How much does it cost to use DHL for parcel collection?",
    answer: "Find out how much DHL shipping will be using our quick quote tool. The cheapest prices for DHL collection start from £8.14 exc VAT.",
  },
  {
    id: 2,
    question: "What type of courier services does DHL collection offer?",
    answer: "DHL UK offers a range of services for your needs: DHL UK, DHL next day delivery with morning slots available. Whether it’s a large parcel or simple post, the DHL courier service can get your items door to door. <br /><br /> You can also book DHL Drop Off Services if that is preferred.",
  },
  {
    id: 3,
    question: "Can DHL collect parcels from home?",
    answer: "Yes, you can book DHL collection from home. Simply use our quick quote tool to get started.",
  },
  {
    id: 4,
    question: "How do I arrange a DHL parcel collection service?",
    answer: "Book your DHL collection with our quick quote tool. DHL couriers will pick up your parcel and deliver it to its destination with door to door delivery.",
  },
  {
    id: 5,
    question: "What time do DHL couriers deliver until?",
    answer: "Delivery times are from 7am until 8pm, Monday to Friday. DHL tracks delivery across the whole journey and provides a 1 hour time slot on the day of delivery for your convenience.",
  },
  {
    id: 6,
    question: "Does DHL deliver on Saturdays and Sundays?",
    answer: "We don't currently offer weekend delivery with DHL. If you need your parcel to be delivered on the weekend, see our weekend delivery options.",
  },
  {
    id: 7,
    question: "What time will DHL collect my parcel?",
    answer: "DHL will collect your parcel Monday to Friday, typically between 8am and 6pm, excluding bank holidays and public holidays. You or a representative must be present to hand over the parcel as DHL cannot collect from a 'safe place'. When you book a collection, DHL often provides a one-hour collection window by text or email on the day, but this is not guaranteed, so you should be available throughout the collection period.",
  },
  {
    id: 8,
    question: "Can DHL collect from my home or office?",
    answer: "Yes, DHL offers collection services from both residential and business addresses. Just select the collection option and clearly write your address when booking through ParcelGo.",
  },
  {
    id: 9,
    question: "Does DHL collection cost more than drop off?",
    answer: "DHL collection is accounted for and included in the total price when booking through ParcelGo. In some cases, drop-off services may be slightly cheaper, but home collection adds convenience.",
  },
];

export const faqsdpd = [
  {
    id: 1,
    question: "What type of courier services does DPD offer?",
    answer: "You can get DPD collection or DPD drop off services for your package. <br /><br /> Whether you’re sending a parcel to the UK or to an international location, you can easily send a parcel with DPD. Choose from a variety of services now - just get a quote from our quick quote tool to get started.",
  },
  {
    id: 2,
    question: "How much is it to send a parcel with DPD?",
    answer: "Find out how much DPD shipping costs using our quote comparison tool. You’ll be able to enter in your parcel details and see DPD prices listed for your specific package. Prices start from as little as £5.29exc VAT.",
  },
  {
    id: 3,
    question: "What time does DPD deliver until?",
    answer: "DPD’s delivery times usually start at 8am, and they stop delivery at around 6pm, though this may vary. When you track your parcel, you will be given a 1-hour delivery window so you know when to expect your delivery!DPD doesn’t deliver during bank holidays.",
  },
  {
    id: 4,
    question: "What is DPD Local? How does it compare to DPD?",
    answer: "DPD Local is the UK branch of the DPD brand. Both use the same technology and logistics systems to get your parcel where it needs to go, but DPD Local is better for individuals or businesses that have lower shipping volumes. DPD can handle larger shipments more easily.",
  },
  {
    id: 5,
    question: "Where can I drop off my DPD parcel?",
    answer: "You can use one of the 6000 drop off points or DPD pick up shops to send your parcel, making it super convenient to get your items where they need to go.",
  },
  {
    id: 6,
    question: "How long does DPD take to deliver?",
    answer: "DPD typically delivers UK parcels within 1–2 working days, with next-day delivery available on selected services. Book your DPD delivery from just [insert lowest pricing component] with ParcelGo for fast, fully tracked shipping",
  },
  {
    id: 7,
    question: "What time does DPD start delivering?",
    answer: "DPD begins deliveries as early as 7am and operates until the early evening, Monday to Saturday. You’ll get a 1-hour delivery window with DPD Predict, so you’re never left waiting",
  },
  {
    id: 8,
    question: "How many times will DPD attempt delivery?",
    answer: "DPD will try to deliver your parcel up to two times. If delivery isn’t successful, your parcel may be taken to a local DPD Pickup Shop for convenient collection.",
  },
  {
    id: 9,
    question: "How to send a DPD parcel?",
    answer: "To send a parcel with DPD, simply book online, print your label, and drop off at one of 6,000 DPD shops or arrange a home collection. Get the best DPD prices today through ParcelGo and track every step for free.",
  },
];

export const faqsParcelforce = [
  {
    id: 1,
    question: "What type of courier services do Parcelforce offer?",
    answer: "Parcelforce UK offers a number of courier services, including Express 9am, Express 10am, Express AM, Express 24 hour, Express 48 hour and Express 48 hour large for all your timed delivery, AM delivery, and next day delivery needs. <br /><br /> Parcelforce Worldwide also offers Euro Economy for Drop Off and Collection, Global Express, Global Priority, Global Value, Global Economy and Ireland Express.",
  },
  {
    id: 2,
    question: "What times do Parcelforce couriers deliver until?",
    answer: "Deliveries to Parcelforce UK recipients are generally made between 7.00am and 6.00pm from Monday to Friday, but how long it takes depends on the service you choose.",
  },
  {
    id: 3,
    question: "Do Parcelforce deliver on Saturdays and Sundays?",
    answer: "Parcelforce do not deliver on weekends or Bank Holidays with ParcelGo. Standard delivery times are Monday to Friday between 7am - 6pm.",
  },
  {
    id: 4,
    question: "Is Parcelforce part of Royal Mail?",
    answer: "Parcelforce Worldwide is not part of Royal Mail now, though it was originally part of Royal Mail when it was created. They became separate businesses in 1990.",
  },
  {
    id: 5,
    question: "Are Parcelforce on strike?",
    answer: "You can check if there are strike actions that will affect your Parcelforce delivery here.",
  },
  {
    id: 6,
    question: "Can I drop my Parcelforce package at the post office?",
    answer: "You can drop most parcels off for Parcelforce delivery at the nearest Post Office. It’s best to check how you can use Parcelforce to send a parcel with our quick quote tool, which will list your closest drop off points.",
  },
  {
    id: 7,
    question: "How long does Parcelforce take to deliver?",
    answer: "Parcelforce offers fast and reliable delivery across the UK, with Express 24 services arriving the next working day and Express 48 within two working days. For international deliveries, timings vary by country but typically range from 2–8 working days.",
  },
  {
    id: 8,
    question: "Do Parcelforce deliver on bank holidays?",
    answer: "Parcelforce does not deliver or collect on UK bank holidays, so if you're sending around a public holiday, it's best to check delivery times and allow for delays.",
  },
  {
    id: 9,
    question: "How do you send a parcel with Parcelforce?",
    answer: "You can send a parcel with Parcelforce by booking your delivery online, printing your label, and dropping it off at one of over 11,500 UK locations - or arrange a collection from your door. For the best Parcelforce rates and free tracking on every service, book through ParcelGo.",
  },
];

export const faqsUPS = [
  {
    id: 1,
    question: "How much does UPS parcel collection & delivery cost?",
    answer: "You can see how much it is to send a parcel with UPS with our quick quote tool. UPS prices start from £8.10 exc VAT <br /> - Get your UPS quote today",
  },
  {
    id: 2,
    question: "What type of courier services does UPS offer?",
    answer: "UPS’ courier service ranges from door to door deliveries to convenient drop off and pick up locations through UPS Access Point. You can book next day, timed and weekend deliveries. UPS also has an Express Saver service for customers looking for value.",
  },
  {
    id: 3,
    question: "How to send a parcel through UPS?",
    answer: "To send a parcel through UPS, book your UPS collection or drop off through our quick quote tool. You’ll be able to track your post or large parcel shipping throughout its journey",
  },
  {
    id: 4,
    question: "How long does it take UPS to deliver parcels?",
    answer: "UPS delivery times are usually from Monday to Friday between 9am and 5:30pm to individual residences, and normal business hours for business recipients. Depending on which UPS courier service you choose, it can take from 24 hours to a few days for delivery.",
  },
  {
    id: 5,
    question: "Do UPS deliver on Saturdays and Sundays?",
    answer: "UPS UK delivery does happen at the weekend on Saturdays, but there is no delivery for UPS on Sundays.",
  },
  {
    id: 6,
    question: "What's the difference between UPS Access Point and UPS?",
    answer: "UPS UK does not deliver on bank holidays.",
  },
  {
    id: 7,
    question: "How do I track my UPS parcel?",
    answer: "UPS Access Points are convenient locations where you can post parcels for shipping with UPS courier services. UPS is a door to door delivery service, where you can arrange a collection from a place of your choice.",
  },
];

export const faqsAramex = [
  {
    id: 1,
    question: "How much does Aramex parcel collection & delivery cost?",
    answer:
      "You can check the cost of sending a parcel with Aramex using our quick quote tool. Aramex offers competitive international and domestic shipping rates depending on parcel size, weight, and destination. <br /> - Get your Aramex quote today",
  },
  {
    id: 2,
    question: "What type of courier services does Aramex offer?",
    answer:
      "Aramex provides a wide range of services including Economy Express, Priority Express, Domestic Express, Shop & Ship, and Cash on Delivery (COD) solutions for e-commerce. Customers can book both local and international door-to-door deliveries.",
  },
  {
    id: 3,
    question: "How to send a parcel through Aramex?",
    answer:
      "To send a parcel through Aramex, you can book a pickup online, visit an Aramex service center, or use the Shop & Ship service for international purchases. All shipments are trackable through the Aramex website or mobile app.",
  },
  {
    id: 4,
    question: "How long does it take Aramex to deliver parcels?",
    answer:
      "Delivery times depend on the service chosen. Priority Express usually delivers within 2–3 working days worldwide, Economy Express within 4–6 working days, and Domestic Express offers same-day or next-day delivery within Pakistan.",
  },
  {
    id: 5,
    question: "Do Aramex deliver on weekends?",
    answer:
      "Aramex delivery schedules vary by country. In Pakistan and many regions, deliveries are mainly from Monday to Saturday during working hours. Weekend or holiday delivery options may depend on the local service center.",
  },
  {
    id: 6,
    question: "Does Aramex offer Cash on Delivery (COD)?",
    answer:
      "Yes, Aramex offers Cash on Delivery services for e-commerce and businesses. This allows customers to pay for their parcels at the time of delivery, with secure handling of payments.",
  },
  {
    id: 7,
    question: "How do I track my Aramex parcel?",
    answer:
      "You can track your Aramex parcel online using the shipment tracking number provided at the time of booking. Real-time tracking is available through the Aramex website and mobile application.",
  },
];