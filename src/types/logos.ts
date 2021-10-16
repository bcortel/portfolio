export type Logo = {
  id: number;
  src: string;
  height: number;
  width: number;
};

export type LogoProps = {
  logos: Logo[];
};
