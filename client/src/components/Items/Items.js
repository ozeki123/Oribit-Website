import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Item from './Item/Item';
import Page from '../Page/Page';
import './Items.scss';
import ItemList from './ItemList/ItemList';

function Items() {
  const [items, setItems] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const getItems = () => {
    axios.get('/items')
      .then((res)=> {
        const myItems = res.data;
        setItems(myItems);
        // console.log(myItems);
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    // console.log(searchValue);
    if(searchInput !== ''){
      const filteredData = items.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
      })
      setFilteredResults(filteredData);
      console.log(filteredData);
    } else{
      setFilteredResults(items)
    }
    
  }

  useEffect(() => {
    getItems();
  }, [])

    return(
      <div className="spaces-container">
        <ItemList items={items}/>
      </div>


    )
}

export default Items;