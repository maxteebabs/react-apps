import { useEffect, useState } from "react";
import { catalogService } from "../services/catalogService"

const useCatalogHooks = () => {
  const defaultBrands = ['Our Brands', 'Popular Brands'];
  const [ catalogItems, setCatalogItems ] = useState([]);
  const [ filteredCatalogItems, setFilteredCatalogItems ] = useState([]);
  const [ selectedFilterItem, setSelectedFilterItem ] = useState({
    'brandName': '',
    'isChecked': false
  });

  const getCatalogs = async() => {
    const items = await catalogService.getCatalogs();
    setCatalogItems(items);
    setFilteredCatalogItems(items);
  }

  useEffect(() => {
    getCatalogs();
  }, [ catalogItems ]);

  const filterByBrands = ({brandName, isChecked}) => {
    if(!defaultBrands.includes(brandName)) return null;
    let items = [...catalogItems];
    items = isChecked ? items.filter(item => item['brand-type'] === brandName ) : items;
    setFilteredCatalogItems(items);
  }

  const handlePriceFilter = (price) => {
    let items = [...catalogItems];
    let priceItem = price.templatePrice.replaceAll(/%curr%/gi, '');
    let parts = priceItem.split('to');
    let [minPrice, maxPrice] = parts.map(part => {
      part = parseInt(part.trim());
      return isNaN(part) ? 0: part;
    });
    items = items.filter(item => item.amount >= minPrice & item.amount <= maxPrice);
    setFilteredCatalogItems(items);
  }

  return {
    defaultBrands,
    catalogs: filteredCatalogItems,
    filterByBrands,
    handlePriceFilter
  }
}
export default useCatalogHooks;