// @mui
import { alpha, Theme } from '@mui/material/styles';
import { dividerClasses } from '@mui/material/Divider';
import { checkboxClasses } from '@mui/material/Checkbox';
import { menuItemClasses } from '@mui/material/MenuItem';
import { autocompleteClasses } from '@mui/material/Autocomplete';

// ----------------------------------------------------------------------

export const paper = ({
  bgcolor,
  dropdown,
  theme,
}: {
  theme: Theme;
  bgcolor?: string;
  dropdown?: boolean;
}) => ({
  ...bgBlur({
    blur: 20,
    color: theme.palette.background.paper,
    opacity: 0.9,
    ...(!!bgcolor && {
      color: bgcolor,
    }),
  }),
  backgroundImage: 'url(/assets/cyan-blur.png), url(/assets/red-blur.png)',
  backgroundPosition: 'top right, left bottom',
  backgroundRepeat: 'no-repeat, no-repeat',
  backgroundSize: '50%, 50%',
  ...(theme.direction === 'rtl' && {
    backgroundPosition: 'top left, right bottom',
  }),
  ...(dropdown && {
    borderRadius: theme.shape.borderRadius * 1.25,
    boxShadow: theme.customShadows.dropdown,
    padding: theme.spacing(0.5),
  }),
});

// ----------------------------------------------------------------------

export const menuItem = (theme: Theme) => ({
  ...theme.typography.body2,
  '&:not(:last-of-type)': {
    marginBottom: 4,
  },
  [`& .${checkboxClasses.root}`]: {
    marginLeft: theme.spacing(-0.5),
    marginRight: theme.spacing(0.5),
    padding: theme.spacing(0.5),
  },
  [`&+.${dividerClasses.root}`]: {
    margin: theme.spacing(0.5, 0),
  },
  [`&.${autocompleteClasses.option}[aria-selected="true"]`]: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    backgroundColor: theme.palette.action.selected,
  },
  [`&.${menuItemClasses.selected}`]: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    backgroundColor: theme.palette.action.selected,
    fontWeight: theme.typography.fontWeightSemiBold,
  },
  borderRadius: theme.shape.borderRadius * 0.75,
  padding: theme.spacing(0.75, 1),
});

// ----------------------------------------------------------------------

type BgBlurProps = {
  blur?: number;
  opacity?: number;
  color?: string;
  imgUrl?: string;
};

export function bgBlur(props?: BgBlurProps) {
  const color = props?.color || '#000000';
  const blur = props?.blur || 6;
  const opacity = props?.opacity || 0.8;
  const imgUrl = props?.imgUrl;

  if (imgUrl) {
    return {
      '&:before': {
        WebkitBackdropFilter: `blur(${blur}px)`,
        backdropFilter: `blur(${blur}px)`,
        backgroundColor: alpha(color, opacity),
        content: '""',
        height: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 9,
      },
      backgroundImage: `url(${imgUrl})`,
      position: 'relative',
    } as const;
  }

  return {
    WebkitBackdropFilter: `blur(${blur}px)`,
    backdropFilter: `blur(${blur}px)`,
    backgroundColor: alpha(color, opacity),
  };
}

// ----------------------------------------------------------------------

type BgGradientProps = {
  direction?: string;
  color?: string;
  startColor?: string;
  endColor?: string;
  imgUrl?: string;
};

export function bgGradient(props?: BgGradientProps) {
  const direction = props?.direction || 'to bottom';
  const startColor = props?.startColor;
  const endColor = props?.endColor;
  const imgUrl = props?.imgUrl;
  const color = props?.color;

  if (imgUrl) {
    return {
      background: `linear-gradient(${direction}, ${startColor || color}, ${
        endColor || color
      }), url(${imgUrl})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };
  }

  return {
    background: `linear-gradient(${direction}, ${startColor}, ${endColor})`,
  };
}

// ----------------------------------------------------------------------

export function textGradient(value: string) {
  return {
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    background: `-webkit-linear-gradient(${value})`,
  };
}

// ----------------------------------------------------------------------

export const hideScroll = {
  x: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    msOverflowStyle: 'none',
    overflowX: 'scroll',
    scrollbarWidth: 'none',
  },
  y: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    msOverflowStyle: 'none',
    overflowY: 'scroll',
    scrollbarWidth: 'none',
  },
} as const;
