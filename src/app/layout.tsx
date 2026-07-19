import Cursor from "@/components/ui/Cursor";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import type { Metadata } from 'next';
import { ThemeProvider } from "./providers";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"   suppressHydrationWarning  className={cn("font-sans", geist.variable)}>
      <body>
        <ThemeProvider attribute="class"
  defaultTheme="dark"        
  enableSystem={true}
  disableTransitionOnChange={false}> 
           <Cursor />
        {children} 
        </ThemeProvider>
      </body>
    </html>
  );
}