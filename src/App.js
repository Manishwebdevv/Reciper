import './App.css';
import Cards from './component/Cards';
import NavBar from './component/NavBar';
import OptionsButton from './component/OptionsButton';
import UseFetch from './hooks/useFetch';

function App() {
  const { cards, country, fetchData, list, fetchList, setCountry } = UseFetch()
 
  return(
    <>
    <NavBar/>
    <OptionsButton country={country} list={list} setCountry={setCountry} fetchData={fetchData} fetchList={fetchList}/>
    <Cards cards={cards} country={country} fetchData={fetchData} />
    </>
  )
}

export default App;
