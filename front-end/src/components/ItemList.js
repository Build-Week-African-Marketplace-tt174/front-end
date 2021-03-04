import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Nav from './Nav';
import ItemCard from './ItemCard'
import { connect } from 'react-redux';
import { getItems } from '../actions';

const ItemList = ({ items, isFetching, error, ...props}) => {
    const myItems = [];
    const [item, setItems] = useState([])
    console.log("itemList", item)
    console.log(props)


return (
    <div>
     < Nav/>
     <div className="item-container">
       {console.log(`item`, item)}
      {props.item && props.item.map(item => (
         <ItemCard card={item} />
      ))}
     </div>
    </div>
)


};

const mapStateToProps = state => {
    return {
        items: state.items,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getItems })(ItemList)