
import "./globals.css";
import Footer from "@/components/footer";


export const metadata = {
  title: "Google Clone",
  description: "Google Clone app built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        <Footer/>

      </body>
    </html>
  );
}
