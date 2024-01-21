import './SearchPage.css';
import ArticleList from '../../components/search/ArticleList.tsx';
import {Articles} from '../../components/search/ArticleItem.tsx';

const SearchPage = () => {
  //@formatter:off
    const items: Articles = [
        { id: "3830", storeName: "BILLA", brandName: "Ja! natürlich", name: "Himbeere Fruchtjoghurt", priceCurrency: "€", price: 0.85, articleUnit: "g", articleQuantity: 200 },
        { id: "3831", storeName: "BILLA", brandName: "Ja! natürlich", name: "Marille Fruchtjoghurt", priceCurrency: "€", price: 0.85, articleUnit: "g", articleQuantity: 200 },
        { id: "3832", storeName: "BILLA", brandName: "nöm", name: "Naturjoghurt 1% Fett", priceCurrency: "€", price: 0.65, articleUnit: "g", articleQuantity: 250 },
        { id: "3833", storeName: "BILLA", brandName: "nöm", name: "Naturjoghurt 3,6% Fett", priceCurrency: "€", price: 0.65, articleUnit: "g", articleQuantity: 250 },
        { id: "3834", storeName: "BILLA", brandName: "nöm", name: "Sauerrahm 15%", priceCurrency: "€", price: 1.19, articleUnit: "g", articleQuantity: 250 },
        { id: "3835", storeName: "BILLA", brandName: "Hochwald", name: "Sahnewunder", priceCurrency: "€", price: 1.99, articleUnit: "l", articleQuantity: 0.25 },
        { id: "3836", storeName: "BILLA", brandName: "Kinder", name: "Pinguini", priceCurrency: "€", price: 1.95, articleUnit: "g", articleQuantity: 120 },
    ];
    //@formatter:on

  return (
      <div className="pv-search-container">
        <ArticleList items={items} />
      </div>
  );
};

export default SearchPage;
