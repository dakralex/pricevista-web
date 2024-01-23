type Article = {
  id: string;
  brandName: string;
  name: string;
  description?: string;
  imageUrl?: string;
  articleUnit: string;
  articleQuantity: number;
  priceCurrency: string;
  price: number;
  storeName: string;
}

type Articles = Array<Article>;