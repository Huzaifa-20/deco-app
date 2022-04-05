import firstProject from '../resources/proj_1.jpg';
import secondProject from '../resources/proj_2.jpg';
import thirdProject from '../resources/proj_3.jpg';
import fourthProject from '../resources/proj_4.jpg';

export const navBarHeadings = ['About', 'Services', 'Portfolio', 'Contact'];

export interface ServiceType {
  detail: string;
  skillSet: string;
  tools: string[];
}

export const services: ServiceType[] = [
  {
    detail: 'We value clean design patterns, and thoughtful interactions.',
    skillSet: 'UX, UI, Web, Mobile, Apps',
    tools: ['Figma', 'Adobe Photoshop', 'Adobe XD', 'Pen & Paper'],
  },
  {
    detail:
      'We like to code things from scratch, and enjoy bringing ideas to life.',
    skillSet: 'React, HTML, JS, CSS, SAAS',
    tools: ['VSCode', 'Github', 'MUI', 'Tailwind'],
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
