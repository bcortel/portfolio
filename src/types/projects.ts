export type Projects = {
  id: number;
  img: string;
  title: string;
  subTitle: string;
  text: string;
  footerText: string;
  href: string;
};

export type ProjectProps = {
  projects: Projects[];
};
