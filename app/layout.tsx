import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NuqsAdapter } from "nuqs/adapters/next/app";

/**
 * ルートレイアウト
 * ここに追加したUIはアプリケーションのすべてのページで共有される
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NuqsAdapter>{children}</NuqsAdapter>

        {/* Vercel Speed Insights Quickstart */}
        <SpeedInsights />
      </body>
    </html>
  );
}
