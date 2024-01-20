import './SearchPage.css';
import ArticleList from '../../components/search/ArticleList.tsx';
import {Articles} from '../../components/search/ArticleItem.tsx';

const SearchPage = () => {
  //@formatter:off
    const items: Articles = [
        { id: "3830", brand: "Ja! natürlich", name: "Himbeere Fruchtjoghurt", priceCurrency: "€", price: 0.85, quantityUnit: "g", quantity: 200 },
        { id: "3831", brand: "Ja! natürlich", name: "Marille Fruchtjoghurt", priceCurrency: "€", price: 0.85, quantityUnit: "g", quantity: 200 },
        { id: "3832", brand: "nöm", name: "Naturjoghurt 1% Fett", priceCurrency: "€", price: 0.65, quantityUnit: "g", quantity: 250 },
        { id: "3833", brand: "nöm", name: "Naturjoghurt 3,6% Fett", priceCurrency: "€", price: 0.65, quantityUnit: "g", quantity: 250 },
        { id: "3834", brand: "nöm", name: "Sauerrahm 15%", priceCurrency: "€", price: 1.19, quantityUnit: "g", quantity: 250 },
        { id: "3835", brand: "Hochwald", name: "Sahnewunder", priceCurrency: "€", price: 1.99, quantityUnit: "l", quantity: 0.25 },
        { id: "3836", brand: "Kinder", name: "Pinguini", priceCurrency: "€", price: 1.95, quantityUnit: "g", quantity: 120 },
    ];
    //@formatter:on

  return (
      <div className="pv-search-container">
        <ArticleList items={items} />
      </div>
  );
};

export default SearchPage;
