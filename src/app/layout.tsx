import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import ReduxProvider from '@store/ReduxProvider';
import { ToastContainer } from 'react-toastify';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Skypro.Music',
  description: 'Музыкальный сервис для прослушивания и управления плейлистами',

  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <ReduxProvider>
        <body className={montserrat.variable}>{children}
            <ToastContainer />
        </body>
      </ReduxProvider>
    </html>
  );
}
