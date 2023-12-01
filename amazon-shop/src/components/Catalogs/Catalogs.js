import './Catalogs.css';

import Catalog from "../Catalog/Catalog";

const Catalogs = ({ catalogs }) => {
  return (
    <div className="catalogs">
      {
        catalogs.length ? catalogs.map((catalog, index) => <Catalog key={index} catalog={catalog}></Catalog>) :
        <span className="empty-catalogs">No Items yet</span>
      }
    </div>
  )
}
export default Catalogs;