import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TODO App',
  description: 'TODO App built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} p-10 h-screen w-screen`}>
        <div>
          <h1 className="text-2xl mb-2.5">TODO App</h1>
        </div>
        {children}
      </body>
    </html>
  );
};
