import React, { useState } from 'react';
import styled from "styled-components";

const StylePagination = styled.ul``;

const PaginationItem = styled.li`
  display:inline-block;
  background: #f5f5f5;
  color: #393939;
  cursor: pointer;

  font-weight:700;
  width:30px;
  line-height:30px;
  margin: 0 5px;
  text-align:center;
  border-radius:3px;
  transition: all .4s ease-out .2s;
  border: 1px solid #e5e5e5;

  &:hover{
    background: #19115C;
    border: 1px solid #19115C;
    color: #fff;
  }
`;

const DisableItem = styled.li`
  cursor: not-allowed;
  opacity: 0.6;
  &::active{
    pointer-events: none;
  }
`

const SelectedItem = styled(PaginationItem)`
  background: #19115C;
  border: 1px solid #19115C;
  color: #fff;
`;

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 100;
  const PageNumber = [];
  const PageGroup = [];

  for (let i = 1; i <= totalPage; i++) {
    PageNumber.push(i);
  }

  if (currentPage <= 3) {
    PageGroup.push(1, 2, 3, 4, 5);
  } else if (currentPage >= totalPage - 2) {
    PageGroup.push(totalPage - 4, totalPage - 3, totalPage - 2, totalPage - 1, totalPage);
  } else {
    PageGroup.push(currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2);
  }

  return (
    <StylePagination>
      <PaginationItem
        onClick={() => { setCurrentPage(1) }}
      >«</PaginationItem>

      <PaginationItem
        onClick={() => { (currentPage > 1) ? setCurrentPage(currentPage - 1) : setCurrentPage(1) }}
      >‹</PaginationItem>

      { !PageGroup.includes(1) ? <PaginationItem>...</PaginationItem> : ""}

      {
        PageGroup.map(item => {
          return (item === currentPage
            ? <SelectedItem>{item}</SelectedItem>
            : <PaginationItem
              onClick={() => { setCurrentPage(item) }}
            >{item}</PaginationItem>)
        })
      }
      { !PageGroup.includes(totalPage) ? <PaginationItem>...</PaginationItem> : ""}
      <PaginationItem
        onClick={currentPage < totalPage ? () => { setCurrentPage(currentPage + 1) } : ""}
      >›</PaginationItem>

      <PaginationItem
        onClick={() => { setCurrentPage(totalPage) }}
      >»</PaginationItem>
    </StylePagination>
  )

}
export default Pagination;