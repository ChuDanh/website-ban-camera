import * as Yup from 'yup';

export const useSettingLoginValidation = () => {
  const SettingLoginSchema = Yup.object().shape({
    email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),
    password: Yup.string()
      .required('Mật khẩu không được để trống')
      .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
      .matches(/^[a-zA-Z0-9]*$/, 'Mật khẩu không được chứa ký tự đặc biệt'),
  });

  return { SettingLoginSchema };
};
