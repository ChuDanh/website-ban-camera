import { DashboardLayout } from 'src/layouts/dashboard/layout';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
