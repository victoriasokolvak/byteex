import { Poppins } from 'next/font/google';
import "./globals.css";
import { Metadata } from 'next';

const poppins = Poppins({
  weight: '300',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Byteex",
  description: "n online store featuring trendy and high-quality clothing for every style and occasion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./Favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous'></link>
      </head>
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
};
