export interface HeroAttributes {
  title: string;
  button_text: string;
  header_part1: string;
  header_part2: string;
  header_part3: string;
  icon1_text: string;
  icon2_text: string;
  icon3_text: string;
}

export interface HeroProps {
  heroes: HeroAttributes | null;
}