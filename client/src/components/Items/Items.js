import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Item from './Item/Item';
import Page from '../Page/Page';

function Items() {
  const [items, setItems] = useState([]);

  const getItems = () => {
    axios.get('/items')
      .then((res)=> {
        const myItems = res.data;
        setItems(myItems);
        // console.log(myItems);
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  const [searchInput, setSearchInput] = useState('');

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    // console.log(searchValue);
  }

  useEffect(() => {
    getItems();
  }, [])

    return(
      <div>
        <input type="text" placeholder='Enter address here' onChange={(e) => searchItems(e.target.value)}></input>
        {items.map((item, index) => {
          // console.log(item);
          return (
            <div key={item._id}>
              <Item id={item._id} title={item.title} price={item.price}/>
            </div>
          )
        })}
      </div>

      
    )
}

export default Items;