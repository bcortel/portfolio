export type Project = {
  id: number;
  img: string;
  title: string;
  subTitle: string;
  text: string;
  footerText: string;
  href: string;
};

export type ProjectProps = {
  projects: Project[];
};
