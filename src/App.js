import './App.css';
import { createBrowserRouter } from 'react-router-dom';

import usePagination from './hooks/usePagination';
import useDialog from './hooks/useDialog';
import useFetch from './hooks/useFetch';

import Cards from './component/Cards';
import NavBar from './component/NavBar';
import OptionsButton from './component/OptionsButton';
import Pagination from './component/Pagination';
import Dialog from './component/Dialog';
import Footer from './component/Footer';

function App() {
  const { cards, setCards, country, fetchData, list, fetchList, setCountry } = useFetch()
  const { pagedCard, setCurrentPage, currentPage, backWard, moveForward, totalPages, handlePageChange } = usePagination({cards})
  const { dialogOpen, dialogClose, data, isOpen } = useDialog()
 
  return(
    <>
    <NavBar country={country} setCountry={setCountry} fetchData={fetchData} list={list}/>
    <OptionsButton country={country} list={list} setCountry={setCountry} fetchData={fetchData} fetchList={fetchList}/>
    <Pagination moveForward={moveForward} backWard={backWard} totalPages={totalPages} handlePageChange={handlePageChange} currentPage={currentPage} country={country} setCurrentPage={setCurrentPage}/>
    <Cards pagedCard={pagedCard} onClick={dialogOpen}/>
    <Dialog dialogOpen={dialogOpen} dialogClose={dialogClose} isOpen={isOpen} data={data}/>
    <Footer />
    </>
  )
}

export default App
