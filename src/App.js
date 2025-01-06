import './App.css';
import Cards from './component/Cards';
import NavBar from './component/NavBar';
import OptionsButton from './component/OptionsButton';
import UseFetch from './hooks/useFetch';
import Pagination from './component/Pagination';
import usePagination from './hooks/usePagination';

function App() {
  const { cards, setCards, country, fetchData, list, fetchList, setCountry } = UseFetch()
  const { pagedCard, currentPage, backWard, moveForward, totalPages, handlePageChange } = usePagination({cards})
 
  return(
    <>
    <NavBar country={country} setCountry={setCountry} fetchData={fetchData} list={list}/>
    <OptionsButton country={country} list={list} setCountry={setCountry} fetchData={fetchData} fetchList={fetchList}/>
    <Pagination moveForward={moveForward} backWard={backWard} totalPages={totalPages} handlePageChange={handlePageChange} currentPage={currentPage}/>
    <Cards pagedCard={pagedCard}/>
    </>
  )
}

export default App;
