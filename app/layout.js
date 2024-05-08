import ScrollToTopButton from "./components/ScrollToTopButton";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bid Leo",
  description: "Bidaaanga Lerro Auction",
  icons: {
    icon: "/bid Leo.png",
    // shortcut: "/fav.png",
    // apple: "/fav.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gray-100">{children}</div>

        <ScrollToTopButton />
      </body>
    </html>
  );
}
