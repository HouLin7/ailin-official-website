import "./globals.css";
import Footer from "../components/Footer";

export const metadata = {
  title: "Ailin — AI Social App",
  description: "The next-generation AI social platform for intelligent connection."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body style={{backgroundColor:'white'}}>
        {/* <Navbar /> */}                
        <main>{children}</main>        
      </body>
    </html>
  );
}
