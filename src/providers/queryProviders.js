import {
  createContext, useContext, useEffect, useState,
} from 'react';

const queryContext = createContext();
const queryChangeContext = createContext();

export const QueryProvider = ({ children }) => {
  const [query, setQuery] = useState({
    q: 'developer',
    location: 'london',
    isfullTime: false,
    idJob: null,
  });

  useEffect(() => {
    localStorage.setItem('query', JSON.stringify(query));
  }, [query]);

  return (
    <queryChangeContext.Provider value={setQuery}>
        <queryContext.Provider value={query}>
            {children}
        </queryContext.Provider>
    </queryChangeContext.Provider>
  );
};

export const useQueryContext = () => {
  return useContext(queryContext);
};

export const useQueryChangeContext = () => {
  return useContext(queryChangeContext);
};
