import './Styles.css';
import Catalogs from './components/Catalogs/Catalogs';

import Header from "./components/Header/Header";
import Sidebar from './components/Sidebar/Sidebar';
import useCatalogHooks from './hooks/useCatalogHooks';

function App() {
  const {catalogs, filterByBrands, defaultBrands, handlePriceFilter} = useCatalogHooks();
  return (
    <>
      <Header />
      <div className='wrapper'>
        <Sidebar catalogs={catalogs} defaultBrands={defaultBrands} filterByBrands={filterByBrands} handlePriceFilter={handlePriceFilter} />
        <Catalogs catalogs={catalogs} />
      </div>
    </>
  );
}
export default App;