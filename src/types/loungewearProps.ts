export interface LoungewearAttributes {
  title: string;
  list_title1: string;
  list_title2: string;
  list_title3: string;
  list_title4: string;
  list_description1: string;
  list_description2: string;
  list_description3: string;
  list_description4: string;
}

export interface LoungewearProps {
  heroes: LoungewearAttributes | null;
}