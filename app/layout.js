export const metadata = {
  title:
    "Exaltis Systems | Engineered for Deeper Digital Defense | exaltissystems.com",
  description:
    "Sovereign Cyber Architecture, 24/7 Autonomous SOC, AI Threat Radar, and vCISO Governance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}