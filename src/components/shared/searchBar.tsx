import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query : string) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    // need to add a list here that it will use to search through 
  );
};

export default SearchBar;
