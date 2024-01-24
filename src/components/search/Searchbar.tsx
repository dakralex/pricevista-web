import './Searchbar.css';
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {
  setSearchQuery,
  useSearchDispatch,
} from '../../context/SearchProvider.tsx';

const Searchbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useSearchDispatch();
  const [query, setQuery] = useState<string>('');

  // TODO Refactor the Searchbar to be a part of the SearchPage
  useEffect(() => {
    if (location.pathname.startsWith('/search')) {
      const searchTerm = location.pathname.split('/')[2];
      setQuery(searchTerm);
      dispatch?.(setSearchQuery(searchTerm ?? ''));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const changeHandler: ChangeEventHandler<HTMLInputElement> =
      (e) => setQuery(e.target.value);
  const keyUpHandler: KeyboardEventHandler<HTMLInputElement> =
      (e) => {
        if (e.key === 'Enter') {
          dispatch?.(setSearchQuery(query ?? ''));

          if (query === null || query === '') {
            navigate(`/`);
          } else {
            navigate(`/search/${query}/1`);
          }
        }
      };

  return <input
      type="search"
      className="pv-searchbar"
      placeholder="Ich suche nach..."
      onChange={changeHandler}
      onKeyUp={keyUpHandler}
      value={query ?? ''}
  />;
};

export default Searchbar;
