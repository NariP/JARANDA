import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import PageButton from "./PageButton.jsx";
import Data from './users.json';

const PageListContainer = styled.ul`
  border: 1px solid red;
  display: flex;
  width: 50%;
  `

function PageList() {
  // TODO: userData는 글로벌 상태로 refactoring 해야함
  const [userData, setUserData] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([]); //페이지에 해당하는 숫자를 가진 배열
  const [currentPage, setCurrentPage] = useState(1); //현재 페이지 번호
  const [usersPerPage, setUsersPerPage] = useState(10); //한 페이지당 보여지는 유저 숫자

  const indexOfLast = currentPage * usersPerPage; //slice는 end 인덱스를 제외하고 추출.
  const indexOfFirst = indexOfLast - usersPerPage;

  const getCurrentPageUserInfos = () => {
    //현재 페이지가 가지고 있는 유저들의 정보
    const currentPageData = userData.slice(indexOfFirst, indexOfLast);
    console.log(currentPageData);
    return currentPageData;
  }

  const calculatePages = (totalUserData) => {
    const lastPageNumber = Math.ceil(totalUserData.length / usersPerPage);
    const pages = [];
    for(let i = 1; i <= lastPageNumber; i++) {
      pages.push(i);
    }
    setPageNumbers(pages);
  }

  useEffect(() => {
    setUserData(Data);
    calculatePages(userData);
  }, [userData])


  return (
    pageNumbers &&
    <PageListContainer>
      {pageNumbers.map((page, idx) => (
        <PageButton
          key={`pageNumber-${idx + 1}`}
          page={page}
          setCurrentPage={setCurrentPage}
          getCurrentPageUserInfos={getCurrentPageUserInfos}
        />
      ))}
    </PageListContainer>
  )
}

export default PageList;
