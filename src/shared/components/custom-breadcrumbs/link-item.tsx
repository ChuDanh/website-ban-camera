// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// routes
import { RouterLink } from 'src/routes/components';
//
import { BreadcrumbsLinkProps } from './types';

// ----------------------------------------------------------------------

type Props = {
  link: BreadcrumbsLinkProps;
  activeLast?: boolean;
  disabled: boolean;
};

export default function BreadcrumbsLink({ activeLast, disabled, link }: Props) {
  const { href, icon, name } = link;

  const styles = {
    alignItems: 'center',
    color: 'text.primary',
    display: 'inline-flex',
    typography: 'body2',
    ...(disabled &&
      !activeLast && {
        color: 'text.disabled',
        cursor: 'default',
        pointerEvents: 'none',
      }),
  };

  const renderContent = (
    <>
      {icon && (
        <Box
          component="span"
          sx={{
            '& svg': { height: 20, width: 20 },
            display: 'inherit',
            mr: 1,
          }}
        >
          {icon}
        </Box>
      )}

      {name}
    </>
  );

  if (href) {
    return (
      <Link component={RouterLink} href={href} sx={styles}>
        {renderContent}
      </Link>
    );
  }

  return <Box sx={styles}> {renderContent} </Box>;
}
