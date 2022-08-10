import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#BA0C2F',
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
      >
        {props.buttonText}
      </Button>
    </ThemeProvider>
  );
}
