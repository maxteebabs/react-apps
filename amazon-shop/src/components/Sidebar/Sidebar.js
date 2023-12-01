import { useState } from "react";

const Sidebar = ({catalogs, filterByBrands, defaultBrands, handlePriceFilter}) => {
  const [activePriceFilter, setActivePriceFilter] = useState('');

  const filterBrands = (e) => {
    filterByBrands({'brandName': e.target.name, 'isChecked': e.target.checked})
  }

  const filterPrice = (price) => {
    setActivePriceFilter(price.templatePrice);
    handlePriceFilter(price);
  }

  const templatePrice = ['Up to %curr%25', '%curr%25 to %curr%50', '%curr%50 to %curr%200', '%curr%200 to %curr%1000'];
  const symbol = catalogs.length > 0 ? catalogs[0].currency.symbol : '£';
  const prices = templatePrice.map(item => {
    return { templatePrice: item, price: item.replaceAll(/%curr%/gi, symbol) }
  });

  return (
    <div className="sidebar">
      <div className="row">
        <span className="title">Featured Brands</span>
        <div className="brands list">
          {
            defaultBrands.map((brand, index) => <span key={index}><input name={brand} type="checkbox" onChange={filterBrands} />{brand}</span>)
          }
        </div>
      </div>
      <div className="row">
        <span className="title">Price</span>
        <div className="prices list">
          {
            prices.map((price, index) => <span onClick={() => filterPrice(price)} 
              key={index} className={price.templatePrice === activePriceFilter ? 'active' : ''}>{price.price}</span>)
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar;