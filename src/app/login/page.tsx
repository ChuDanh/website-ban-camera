'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, CardContent, Container, Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'src/shared/components/snackbar';
import { paths } from '../../routes/paths';
import FormProvider, { RHFTextField } from '../../shared/components/hook-form';
import RHFPassword from '../../shared/components/hook-form/rhf-password';
import { useSettingLoginValidation } from './hooks/use-setting-login-validation';
import { TFormLogin } from './types';

export default function Login() {
  const { SettingLoginSchema } = useSettingLoginValidation();

  const { enqueueSnackbar } = useSnackbar();

  const methods = useForm<TFormLogin>({
    resolver: yupResolver<TFormLogin>(SettingLoginSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);
      enqueueSnackbar('Đăng nhập thành công');
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Box
        sx={{
          backgroundImage: 'url(/img/bg.jpg)',
          backgroundSize: 'cover',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container maxWidth={false} sx={{ mx: 50 }}>
          <Card>
            <CardContent sx={{ mx: 0 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12 }} sx={{ textAlign: 'center', pb: 3 }}>
                  <Typography fontSize={35} fontWeight={600}>
                    Đăng nhập
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <RHFTextField
                    name="email"
                    variant="outlined"
                    label="Email"
                    fullWidth
                    placeholder="Nhập email"
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <RHFPassword
                    name="password"
                    variant="outlined"
                    title="Mật khẩu"
                    fullWidth
                    placeholder="Nhập mật khẩu"
                  />
                </Grid>

                <Grid size={{ xs: 12 }} sx={{ textAlign: 'center', pt: 3 }}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Đăng nhập
                  </Button>
                </Grid>

                <Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
                  <Link
                    href={paths.register.root}
                    sx={{
                      cursor: 'pointer',
                      fontSize: '12px',
                      textDecoration: 'underline',
                    }}
                  >
                    Chưa có tài khoản? Đăng ký ngay.
                  </Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </FormProvider>
  );
}
