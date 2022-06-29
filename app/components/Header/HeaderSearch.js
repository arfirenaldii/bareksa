import React from 'react';
import styled from 'styled-components';

import Img from 'components/Img'

import Search from './images/search.svg'

const StyledForm = styled.form`
  position: relative;
  border: solid 1px #DDDDDD;
  border-radius: 4px;
  margin-right: 24px;

  display: flex;
  justify-content: space-between;
  width: 296px;
`

const StyledInput = styled.input`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  padding: 16px;
  padding-right: 60px;
  position: relative;
`

const StyledImg = styled(Img)`
  padding: 0px 19px;
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 15px;
`

function HeaderSearch() {
  const [searchText, setSearchText] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault()
    alert(searchText)
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Search text"
        name="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <StyledImg
        src={Search}
        alt="Search"
        onClick={handleSubmit}
      />
    </StyledForm>
  )
}

export default HeaderSearch;
