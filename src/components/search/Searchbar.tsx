import './Searchbar.css';
import {ChangeEvent, KeyboardEvent, useState} from 'react';

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
  const [query, setQuery] = useState<string | null>(null);

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
  />;
};

export default Searchbar;
