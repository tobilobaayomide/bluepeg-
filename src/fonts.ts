import { Poppins, Montserrat } from "next/font/google";

export const poppins = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-poppins-logo"
});

export const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat-navbar"
});
