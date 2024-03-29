import { Inter } from "next/font/google";
import{About, AppFooter, AppHeader, Contact, Experiences, HeroSection, Projects, Skills} from "@/components"
import "./globals.css";
// import AppHeader from "@/components/AppHeader";
// import AppFooter from "@/components/AppFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {/* <AppHeader/>
      <HeroSection/>
      <Skills/>
      <Projects/>
      <Experiences/>
      <About/>
      <Contact/> */}
      {children}
      {/* <AppFooter/> */}
        </body>
    </html>
  );
}
