import style from "./page.module.css";
import "./reset.css";
import "./typography.scss"

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>{children}</body>
    </html>
  );
}

