import { Livvic } from "next/font/google";
import "./globals.css";
import AppProvider from "@/shared/hoc/AppProvider/AppProvider";

// const livvic = Livvic({
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400', '500', '600', '700', '900'],
//   style: ['normal', 'italic'],
//   variable: '--font-livvic',
// })


export const metadata = {
  title: "Parcel Go",
  description: "Parcel Go",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Livvic:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
