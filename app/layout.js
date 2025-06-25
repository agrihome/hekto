import "./reset.css";
import "./typography.scss";
import "./utils.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Lato, Josefin_Sans } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"], // Add desired weights
  display: "swap",
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${josefinSans.variable}`}>
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
