export type GuitarType = 'electro' | 'acoustic' | 'ukulele';
export type CountStringsType = 4 | 6 | 7 | 12;
export interface Product {
  _id?: string;
  title: string;
  description: string;
  date: Date;
  photo: `${string}${'jpg' | 'png'}`;
  type: GuitarType;
  article: string;
  countStrings: CountStringsType;
  price: number;
}
