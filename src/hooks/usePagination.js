import { useEffect, useState } from "react";

const usePagination = ({ cards }) => {
   const [ currentPage, setCurrentPage ] = useState(1)
 
   const cardPerPage = 8;
   const totalPages = Math.ceil(cards?.length / cardPerPage )

   const indexOfLastItem = currentPage * cardPerPage
   const indexOfFirstItem = indexOfLastItem - cardPerPage

   const pagedCard = cards?.slice(indexOfFirstItem, indexOfLastItem )
   
   const handlePageChange = (pageNumber) => {
       setCurrentPage(pageNumber)
   }
   
   const moveForward = () => {
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1)
        }
   }

   const backWard = () => {
      if(currentPage > 1){
            setCurrentPage(currentPage - 1)
      }
   }
  return {pagedCard, currentPage, backWard, moveForward, totalPages, handlePageChange, setCurrentPage }
}

export default usePagination