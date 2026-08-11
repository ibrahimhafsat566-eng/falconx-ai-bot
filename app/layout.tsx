export const metadata = {
  title: 'FalconX AI Bot',
  description: 'AI-powered crypto trading bot',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
    }
