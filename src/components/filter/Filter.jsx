import React from 'react';
import { FilterTitle, FilterInput, FilterContainer } from './Filter.styled';

class Filter extends React.Component {
  render() {
    const { filter, onFilterChange, filterContacts } = this.props;
    return (
      <FilterContainer>
        <FilterTitle>Find contacts by name</FilterTitle>
        <FilterInput
          type="text"
          value={filter}
          onChange={onFilterChange}
          placeholder="Enter name"
        />
        {filterContacts().length === 0 && (
          <FilterTitle>There is no such contact</FilterTitle>
        )}
      </FilterContainer>
    );
  }
}
export default Filter;
