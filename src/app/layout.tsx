import "./globals.css";
import { Toaster } from "sonner";

export const metadata = {
  title: "REXO",
  description: "REXO IS YOUR HOME TO POST",
};

import { Header } from "../components/index";
import { AuthProvider } from "./providers";
import { ReactNode } from "react";

type MyComponentProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: MyComponentProps) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#f8f8fb" }}>
        <AuthProvider>
          <Header />
          <Toaster richColors position="top-center" />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
