import "react-accessible-accordion/dist/fancy-example.css";

import "../../styles/index2.css";
import Header from "../components/Header";
import Footer2 from "../components/Footer/Footer2";
import ScrollToTop from "../components/ScrollToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer2 />
      <ScrollToTop />
    </>
  );
}
