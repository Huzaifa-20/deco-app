import firstProject from '../resources/proj_1.jpg';
import secondProject from '../resources/proj_2.jpg';
import thirdProject from '../resources/proj_3.jpg';
import fourthProject from '../resources/proj_4.jpg';

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

export const navBarHeadings = ['About', 'Services', 'Portfolio', 'Contact'];

export interface ServiceType {
  detail: string;
  skillSet: string;
  tools: string[];
}

export const services: ServiceType[] = [
  {
    detail: 'We value clean design patterns, and thoughtful interactions.',
    skillSet: 'UX/UI, Web/Mobile Apps',
    tools: ['Figma', 'Adobe Photoshop', 'Pen & Paper'],
  },
  {
    detail:
      'We like to code things from scratch, and enjoy bringing ideas to life.',
    skillSet: 'React, HTML, JS, CSS, AWS',
    tools: ['VSCode', 'Github', 'MUI'],
  },
];

export interface WorkType {
  heading: string;
  detail: string;
}

export const workFlow: WorkType[] = [
  {
    heading: 'Define',
    detail: 'We brainstorm possible design solutions to the identified problem',
  },
  {
    heading: 'Ideate',
    detail: 'We create wireframes of the product to be designed',
  },
  {
    heading: 'Prototype',
    detail: 'We create high fidelity prototype for the product',
  },
  {
    heading: 'Implement',
    detail: 'After designing, we code it to life',
  },
];

export interface ProjectDetails {
  image: string;
  name: string;
  detail: string;
}

export const projects: ProjectDetails[] = [
  {
    image: firstProject,
    name: 'Project 1',
    detail: 'We brainstorm possible design solutions to the identified problem',
  },
  {
    image: secondProject,
    name: 'Project 2',
    detail: 'We brainstorm possible design solutions to the identified problem',
  },
  {
    image: thirdProject,
    name: 'Project 3',
    detail: 'We brainstorm possible design solutions to the identified problem',
  },
  {
    image: fourthProject,
    name: 'Project 4',
    detail: 'We brainstorm possible design solutions to the identified problem',
  },
  {
    image: fourthProject,
    name: 'Project 5',
    detail: 'We brainstorm possible design solutions to the identified problem',
  },
  {
    image: fourthProject,
    name: 'Project 6',
    detail: 'We brainstorm possible design solutions to the identified problem',
  },
];
