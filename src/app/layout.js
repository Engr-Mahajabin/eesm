import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeProvider";

export const metadata = {
  title: "eESM - Advanced Cybersecurity GRC Product",
  description: "Enterprise Governance, Risk, and Compliance Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-zinc-50 text-zinc-900 dark:bg-slate-950 dark:text-white min-h-screen flex flex-col antialiased transition-colors duration-300">
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
