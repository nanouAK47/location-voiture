import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Location de voiture",
  description:
    "Découvrez la meilleure application de vitrine automobile au monde !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
