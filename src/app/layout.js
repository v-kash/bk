// import { Playfair_Display } from "next/font/google";
// import "./globals.css";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-playfair",
// });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${playfair.variable} antialiased`}>
//         {children}
//       </body>
//     </html>
//   );
// }

import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "BK Fruits | Premium Fresh Fruits Supplier",
  description:
    "BK Fruits supplies premium quality farm fresh fruits sourced directly from trusted farms. We focus on freshness, quality selection, and reliable supply of seasonal fruits including mangoes and other premium varieties.",
  
  keywords: [
    "fresh fruits supplier",
    "premium fruits supplier",
    "farm fresh fruits",
    "seasonal fruits supplier",
    "mango supplier",
    "fruit wholesalers",
    "export quality fruits",
    "fresh fruits india",
    "premium mango supplier",
    "BK Fruits",
  ],

  authors: [{ name: "BK Fruits" }],
  creator: "BK Fruits",
  publisher: "BK Fruits",

  metadataBase: new URL("https://bkfruits.com"),

  openGraph: {
    title: "BK Fruits | Premium Fresh Fruits Supplier",
    description:
      "Premium farm fresh fruits sourced directly from trusted farms. BK Fruits ensures freshness, quality and reliable fruit supply.",
    url: "https://bkfruits.com",
    siteName: "BK Fruits",
    images: [
      {
        url: "/og-image.jpg", // put image inside public folder
        width: 1200,
        height: 630,
        alt: "BK Fruits Premium Fresh Fruits",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "BK Fruits | Premium Fresh Fruits Supplier",
  //   description:
  //     "Premium farm fresh fruits sourced directly from trusted farms. Reliable seasonal fruit supply.",
  //   images: ["/og-image.jpg"],
  // },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}