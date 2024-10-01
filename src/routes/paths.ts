// ----------------------------------------------------------------------

export const paths = {
  login: {
    root: '/login',
  },
  register: {
    root: '/register',
  },

  cameras: {
    root: '/cameras',
    detail: (id: string) => `/cameras/${id}/detail`,
  },
};
