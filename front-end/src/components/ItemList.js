import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Nav from './Nav';
import ItemCard from './ItemCard';
import axios from 'axios';

const ItemList = props => {
    const myItems = [];
    const [item, setItems] = useState([]);

    useEffect(() => {
        axios.get("https://test-deploy-sauti.herokuapp.com/api/items")
    
        .then((res)=>{
          console.log("AM: ItemList.js: useEffect Res: ",res);
          setItems(res.data);
    
        })
        .catch((err)=>{
          console.log(err)
        })
    
    }, [])


    //https://test-deploy-sauti.herokuapp.com/api/items
return (
    <div>
        <Nav />
     <div className="item-container">
         {console.log(`item`, item)}
      {item.map(item => (
         <ItemCard item={item} />
      ))}
     </div>
    </div>
)


};



const mapStateToProps = state => {
    console.log("text", state)
      return {
         item: state.items,
         token: state.token 
      }
  }

export default ItemList