import React from "react";
import {InputStyled, SectionSearch} from "./search-styled";

export const Search = ({search, setSearch}) => {
  const handleChange = (e) => {
    const value = e.target.value;
    if (value.trim() !== "" || value === "") {
      setSearch(value);
    }
  };

  return (
    <SectionSearch>
      <InputStyled
        type="text"
        placeholder="Cualidades sobre el animal a encontrar"
        value={search}
        onChange={handleChange}
      />
    </SectionSearch>
  );
};
