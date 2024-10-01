import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useSearchParams } from 'next/navigation';
import Iconify from 'src/shared/components/iconify';
import Scrollbar from 'src/shared/components/scrollbar';
import { TFetchingParams } from '../_hooks/use-fetching-params';
import { CATEGORIES } from '../constants';

type Props = {
  setFetchingParams: (params: Partial<TFetchingParams>) => void;
};

export function Categories({ setFetchingParams }: Props) {
  const handleClick = (item: string) => {
    setFetchingParams({ code: item });
  };

  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  return (
    <Scrollbar sx={{ pt: 2 }}>
      {CATEGORIES.map((category) => (
        <>
          <List
            key={category.group}
            subheader={
              <Typography fontSize={18} fontWeight={600} sx={{ my: 1 }}>
                {category.group}
              </Typography>
            }
            sx={{ mb: 1 }}
          >
            {category.items.map((item) => (
              <ListItemButton key={item.name} selected={item.code === code}>
                <ListItemIcon sx={{ mr: 1 }}>
                  <Iconify icon="bi:dot" color="text.primary" />
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                  onClick={() => handleClick(item.code)}
                />
              </ListItemButton>
            ))}
          </List>
          <Divider sx={{ my: 1 }} />
        </>
      ))}
    </Scrollbar>
  );
}
