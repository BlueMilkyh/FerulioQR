import { Provider } from "../components/ui/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
