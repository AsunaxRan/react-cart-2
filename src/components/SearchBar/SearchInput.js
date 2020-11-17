import React, { useState, useRef } from 'react';
import styled from 'styled-components';
const StyledSearchInput = styled.div`
  display:inline-block
`;

const SearchText = styled.input`
  padding:0.6rem 2.6rem 0.6rem 1rem;
  width:20rem;
  border-radius:1.2rem;
  outline:none;
  color:#525252;
  font-size:1rem;
  font-weight:100;
  letter-spacing:2px;
  border:solid 1px #525252;
`;

const SearchButton = styled.button`
  position:relative;
  right:40px;
  border:none;
  background-color:transparent;
  outline:none;
  cursor: pointer;
`

const SearchInput = () => {
  const [inputText, setInputText] = useState("");
  const inputTextRef = useRef();

  const handleChange = () => {
    setInputText(inputTextRef.current.value);
  }
  return (
    <StyledSearchInput style={{ marginTop: "10px" }}>
      <SearchText
        ref={inputTextRef}
        onChange={handleChange}
        value={inputText}
        placeholder="Search...."
      />
      <SearchButton>
        <i className="fa fa-search"></i>
      </SearchButton>
    </StyledSearchInput>
  );
}
export default SearchInput;