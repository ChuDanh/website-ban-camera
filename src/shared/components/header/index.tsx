'use client';

import { Container, Link, ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Iconify from '../iconify';

export const Header = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: '#f7f9fa',
        borderBottom: '1px solid #CCD6EF',
        boxShadow: '0px 1px 0 #758092',
      }}
    >
      <Grid container>
        <Grid size={9}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              cursor: 'pointer',
              width: 'fit-content',
            }}
            onClick={() => console.log('click')}
          >
            <Iconify icon="fluent-emoji-flat:camera" sx={{ width: 70, height: 70, mb: 2 }} />

            <ListItemText
              primary="Camera Shop"
              secondary="Website bán Camera"
              primaryTypographyProps={{ typography: 'h4' }}
              secondaryTypographyProps={{
                color: 'text.disabled',
                component: 'span',
              }}
            />
          </Box>
        </Grid>
        <Grid size={3} container sx={{ justifyContent: 'flex-end' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Link href="#" underline="hover" sx={{ fontSize: '14px', fontWeight: 600 }}>
              Đăng nhập
            </Link>{' '}
            /{' '}
            <Link
              href="#"
              underline="hover"
              sx={{
                fontSize: '14px',
                fontWeight: 600,
                borderRight: '1px solid #D9D9D9',
                pr: 1,
              }}
            >
              Đăng ký
            </Link>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                pl: 1,
              }}
            >
              <Iconify icon="el:shopping-cart-sign" />
              <Link
                underline="hover"
                sx={{
                  fontSize: '14px',
                  color: 'text.secondary',
                  pl: 1,
                }}
              >
                Giỏ hàng
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
