export interface Product {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  head: string;
  image: string;
  name: string;
  release: Release;
  product: string;
  tail: string;
  type: string;
  id: string;
  price: number;
}

export interface Release {
  au: string;
  eu: string;
  jp: string;
  na: string;
}
