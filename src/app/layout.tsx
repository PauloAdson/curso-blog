import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { Container } from '@/components/container';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: {
    default: 'The blog - Este é um blog com Next.js',
    template: '%s | The Blog',
  },
  description: 'Descrição do blog',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='pt-BR' className='dark'>
      <body>
        <Container>
          <Header />
          {children}
          <footer>
            <p className='text-6xl font-bold text-center py-8'>Footer</p>
          </footer>
        </Container>
      </body>
    </html>
  );
}
