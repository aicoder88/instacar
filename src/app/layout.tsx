import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Metadata for the document head
const metadata = {
  title: "Insta Car Spa | Montreal's Premier In-Building Car Detailing",
  description:
    "Professional car detailing service that comes to your building's parking garage. Save time and enjoy a spotless vehicle without leaving home.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Set document title
  document.title = metadata.title;

  return (
    <div className="scroll-smooth font-sans bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
