interface TypographyType {
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: number;
  letterSpacing: string;
}

export const decreaseTypography = (type: string, typography: any) => {
  let result: TypographyType | null = null;

  switch (type) {
    case 'h1': {
      result = { ...typography.h2 };
      break;
    }
    case 'h2': {
      result = { ...typography.h3 };
      break;
    }
    case 'h3': {
      result = { ...typography.h4 };
      break;
    }
    case 'h4': {
      result = { ...typography.h5 };
      break;
    }
    case 'h5': {
      result = { ...typography.h6 };
      break;
    }
    case 'h6': {
      result = { ...typography.subtitle1 };
      break;
    }
    case 'subtitle1': {
      result = { ...typography.subtitle2 };
      break;
    }
    case 'subtitle2': {
      result = { ...typography.body1 };
      break;
    }
    case 'body1': {
      result = { ...typography.body2 };
      break;
    }
    default: {
      break;
    }
  }
  return result;
};

export const navBarHeadings = [
  'About',
  'Services',
  'Portfolio',
  'Testimonials',
  'Contact',
];
