import './Searchbar.css';
import {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

export type SearchHandler = (
    query: string | null,
    event: ChangeEvent | KeyboardEvent<HTMLInputElement>) => void

interface SearchbarProps {
  onChange?: SearchHandler,
  onEnter?: SearchHandler
}

const Searchbar = ({
  onChange,
  onEnter,
}: SearchbarProps) => {
  const location = useLocation();
  const [query, setQuery] = useState<string | null>(null);

  // TODO Refactor the Searchbar to be a part of the SearchPage
  useEffect(() => {
    console.log(location.pathname);

    if (location.pathname.startsWith('/search')) {
      const searchTerm = location.pathname.split('/')[2];
      setQuery(searchTerm);
    }
  }, [location]);

  return <input
      type="search"
      className="pv-searchbar"
      placeholder="Ich suche nach..."
      onChange={(e) => {
        setQuery(e.target.value);

        if (onChange) {
          onChange(query, e);
        }
      }}
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          if (onEnter) {
            onEnter(query, e);
          }
        }
      }}
      value={query ?? ''}
  />;
};

export default Searchbar;
