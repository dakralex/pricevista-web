import React from 'react';
import {useNavigate} from 'react-router-dom';
import {
  setSearchQuery,
  useSearch,
  useSearchDispatch,
} from '../../context/SearchProvider.tsx';
import './Searchbar.css';

const Searchbar = () => {
  const {query} = useSearch();
  const navigate = useNavigate();
  const dispatch = useSearchDispatch();

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> =
      (e) => dispatch?.(setSearchQuery(e.currentTarget.value));
  const keyUpHandler: React.KeyboardEventHandler<HTMLInputElement> =
      (e) => {
        if (e.key === 'Enter') {
          navigate(query === '' ? '/' : `/search/${query}/1`);
        }
      };

  return <input
      type="search"
      className="pv-searchbar"
      placeholder="Ich suche nach..."
      onChange={changeHandler}
      onKeyUp={keyUpHandler}
      value={query}
  />;
};

export default Searchbar;
