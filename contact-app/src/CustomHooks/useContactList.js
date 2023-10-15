
import { useState, useRef } from 'react';
import BluetoothSyncAPI from './../Services/BluetoothSyncAPI.Service.V2';

/**
 * Custom React Hook responsible for sync with the Car's Bluetooth API
 */
const useContactList = () => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [offset, setOffset] = useState(0);
  const count = useRef(5);
  /**
   * Call next page
   */
  const nextPage = () => {
    /**
     * if the offset plus count is less than the length of the list
     * set offset + count
     * 
     * update the offset to trigger a re-render
     **/
    if(offset + count.current < filteredList.length) {
      setOffset(offset + count.current);
    }
  };
  /**
   * Call previous page
   */
  const prevPage = () => {
    /**
     * if offset less than count greater than 0
     * set offset - count
     * 
     * update the offset to trigger a re-render
     *
     */
    if(offset - count.current > 0) {
      setOffset( offset - count.current);
    }
  };
  /**
   *
   */
  const onFilter = (evt) => {
    /**
     * check if search query is in either name or email.
     * 
     * update the offset to trigger a re-render
     *
     */
    const term = evt.target.value;
    const resultList = list.filter(list => list.name.includes(term) || list.email.includes(term));
    setFilteredList(resultList);
    setOffset(0);
  };

  /**
   * Call the Bluetooth API and update the list
   */
  const sync = () => {
    setIsSyncing(true);
    BluetoothSyncAPI.sync().then((user) => {
      user = user.results.map((r) => ({
        name: r.name.first,
        thumbnail: r.picture.thumbnail,
        email: r.email,
        phone: r.phone,
        id: `${r.id.name}-${r.id.value}`,
      }));
      setList(user);
      setFilteredList(user);
      setIsSyncing(false);
      setOffset(0);
    });
  };
  /**
   * Return the necessary functions
   */
  return {
    // Full list
    contactList: list,
    // Current page list
    currentPageList: filteredList.slice(offset, offset + count.current),
    // function used to sync with the Bluetooth API
    sync,
    // function to move the pointer to the next page
    nextPage,
    // function to mobe the pointer to the previous page
    prevPage,
    // variable that holds the value to indicate if the next page will be available or not
    hasNextPage: !(offset + count.current < filteredList.length),
    // variable that holds the value to indicate if the previous page will be available or not
    hasPrevPage: offset < count.current,
    // holds the value is the api is syncing or not
    isSyncing,
    // Current page number
    page: offset > 0 ? offset / count.current : offset,
    // Current page number
    totalPages: Math.floor(filteredList.length / count.current),
    // The total os records
    total: filteredList.length,
    //
    onFilter,
  };
};

export default useContactList;
