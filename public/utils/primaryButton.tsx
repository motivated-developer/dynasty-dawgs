import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#ba0c2f',
      contrastText: '#FFFFFF',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

interface props {
  buttonText: string;
  onClick: Function;
}

export default function PrimaryButton(props: props) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        color="neutral"
        variant="contained"
        onClick={() => props.onClick()}
        sx={{
          color: 'white',
          fontFamily: 'inherit',
          textTransform: 'none',
          backgroundColor: '#ba0c2f',
          marginTop: '20px',
          boxShadow: '-1px 2px 3px 0px rgb(0 0 0 / 25%)',
          borderRadius: '7px',
          '&:hover': {
            background: 'black',
            color: '#ba0c2f',
          },
        }}
      >
        {props.buttonText}
      </Button>
    </ThemeProvider>
  );
}
