// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
//
import { IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import { CustomBreadcrumbsProps } from './types';
import LinkItem from './link-item';
import Iconify from '../iconify';

// ----------------------------------------------------------------------

export default function CustomBreadcrumbs({
  action,
  activeLast,
  heading,
  links = [],
  moreLink,
  sx,
  ...other
}: CustomBreadcrumbsProps) {
  const lastLink = links[links.length - 1]?.name;
  const router = useRouter();

  return (
    <Box sx={{ ...sx }}>
      <Stack direction="row" alignItems="center">
        <Box sx={{ flexGrow: 1 }}>
          <Stack direction="row" spacing={1} alignItems="baseline">
            {other.back && (
              <IconButton onClick={() => router.back()} size="large">
                <Iconify icon="eva:arrow-ios-back-fill" />
              </IconButton>
            )}

            {/* HEADING */}
            {heading && (
              <Typography variant="h4" gutterBottom>
                {heading}
              </Typography>
            )}
          </Stack>

          {/* BREADCRUMBS */}
          {links && !!links.length && (
            <Breadcrumbs separator={<Separator />} {...other}>
              {links.map((link) => (
                <LinkItem
                  key={link?.name || ''}
                  link={link}
                  activeLast={activeLast}
                  disabled={link?.name === lastLink}
                />
              ))}
            </Breadcrumbs>
          )}
        </Box>

        {action && <Box sx={{ flexShrink: 0 }}> {action} </Box>}
      </Stack>

      {/* MORE LINK */}
      {!!moreLink && (
        <Box sx={{ mt: 2 }}>
          {moreLink.map((href) => (
            <Link
              key={href}
              href={href}
              variant="body2"
              target="_blank"
              rel="noopener"
              sx={{ display: 'table' }}
            >
              {href}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
}

// ----------------------------------------------------------------------

function Separator() {
  return (
    <Box
      component="span"
      sx={{
        bgcolor: 'text.disabled',
        borderRadius: '50%',
        height: 4,
        width: 4,
      }}
    />
  );
}
