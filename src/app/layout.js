import "./globals.css";
import AosInit from "@/utils/Aos";
import { Inter } from "next/font/google";
import ScroleBtn from "@/utils/ScroleBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "صفحه اصلی - SET Coffee | فروشگاه اینترنتی قهوه ست",
  description: "coffee project with next.js ",
  icons: {
    icon: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/36190/coffee-logo-clipart-md.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={inter.className}>
        <AosInit />
        {children}
        <ScroleBtn />
      </body>
    </html>
  );
}
