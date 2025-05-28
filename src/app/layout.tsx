import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
