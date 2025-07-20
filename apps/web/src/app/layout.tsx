import Header from '@/components/Header';
import { AppShell, MantineProvider } from '@mantine/core';
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <AppShell header={<Header />}>{children}</AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
