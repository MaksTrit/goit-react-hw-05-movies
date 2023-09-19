import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  StyledSearchBtn,
  StyledSearchForm,
  StyledSearchInput,
} from './SearchBar.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieOnSearch = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieOnSearch) return;
    setValue(movieOnSearch);
    onSearch(movieOnSearch);
  }, [movieOnSearch, onSearch]);

  const handleChange = e => setValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const query = value.trim();
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    onSearch(value);
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <StyledSearchInput
        type="text"
        autoComplete="off"
        placeholder="Search movies"
        onChange={handleChange}
        value={value}
      />
      <StyledSearchBtn type="submit">
        <AiOutlineSearch />
      </StyledSearchBtn>
    </StyledSearchForm>
  );
};
