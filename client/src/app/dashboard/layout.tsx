import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from '@/ui/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function DashLayout({ children }: LayoutProps): React.JSX.Element {
  return (
    <>
    <Header/>
     
      <Box
        sx={{
          bgcolor: 'var(--mui-palette-background-default)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          minHeight: '100%',
        }}
      >
        <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column', pl: { lg: 'var(--SideNav-width)' } }}>
          <main>
            <Container maxWidth="xl" sx={{ py: '64px' }}>
              {children}
            </Container>
          </main>
        </Box>
      </Box>
      </>
  );
}