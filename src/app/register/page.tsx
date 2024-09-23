'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, CardContent, Container, Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { useForm } from 'react-hook-form';
import RHFPassword from 'src/shared/components/hook-form/rhf-password';
import { paths } from '../../routes/paths';
import FormProvider, { RHFTextField } from '../../shared/components/hook-form';
import { useSnackbar } from '../../shared/components/snackbar';
import { useSettingRegisterValidation } from './hooks/use-setting-register-validation';
import { TFormRegister } from './types';

export default function Register() {
  const { enqueueSnackbar } = useSnackbar();

  const { SettingRegisterSchema } = useSettingRegisterValidation();
  const methods = useForm<TFormRegister>({
    resolver: yupResolver<TFormRegister>(SettingRegisterSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.log(data);
      enqueueSnackbar('Đăng ký thành công');
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
                    Đăng Ký
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
                    label="Mật khẩu"
                    fullWidth
                    placeholder="Nhập mật khẩu"
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <RHFPassword
                    name="password_checked"
                    variant="outlined"
                    label="Nhập lại mật khẩu"
                    fullWidth
                    placeholder="Nhập lại mật khẩu"
                  />
                </Grid>

                <Grid size={{ xs: 12 }} sx={{ textAlign: 'center', pt: 3 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => console.log('Page')}
                  >
                    Đăng ký
                  </Button>
                </Grid>

                <Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
                  <Link
                    href={paths.login.root}
                    sx={{
                      cursor: 'pointer',
                      fontSize: '12px',
                      textDecoration: 'underline',
                    }}
                  >
                    Quay lại
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
