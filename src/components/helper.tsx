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

export interface ServiceType {
  detail: string;
  skillSet: string;
  tools: string[];
}

export const services: ServiceType[] = [
  {
    detail:
      'I value simple content structure, clean design patterns, and thoughtful interactions.',
    skillSet: 'UX, UI, Web, Mobile, Apps, Logos',
    tools: ['Figma', 'Adobe Photoshop', 'Pen & Paper', 'Webflow'],
  },
  {
    detail:
      'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
    skillSet: 'HTML, Pug, Slim, CSS, Sass, Less',
    tools: ['Atom', 'Bitbucket', 'Bootstrap', 'Bulma'],
  },
];

export interface WorkType {
  heading: string;
  detail: string;
}

export const workFlow: WorkType[] = [
  // {
  //   heading: 'Discover',
  //   detail: 'I conduct user research to identify the problem I want to solve.',
  // },
  {
    heading: 'Define',
    detail: 'I brainstorm possible design solutions to the identified problem.',
  },
  {
    heading: 'Ideate',
    detail:
      'I create wireframes and sketches of the product I’m about to design.',
  },
  {
    heading: 'Prototype',
    detail: 'I create high fidelity design and prototype the screens.',
  },
  {
    heading: 'Implement',
    detail: 'After designing, I deliver for implementation.',
  },
];
