'use client'
import { SearchInput } from './ArchiveSearchBarStyled';

export const SearchBar = ({ value, onChange }) => {
  return (
    <SearchInput
      type="text"
      placeholder="Search by title"
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;
