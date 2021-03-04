import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import '../App.css'



const Card = styled.div`
    width: 50%;
    height: 200px;
    border: 2px solid black;
    margin-left: 25%;
    margin-top: 5px;
`;

const Name = styled.p`
width: 25%;
border-bottom: 1px solid black;
`;

const Description = styled.p`
width: 25%;
border-bottom: 1px solid black;
`;

const Price = styled.div`
display: flex;
margin-left: 8%;
justify-content: space-around;
`;

const Category = styled.p`
width: 25%;
`;


const ItemCard = (props) => {
    console.log("thrown text", props)
    const history = useHistory();
    const id = localStorage.getItem("id");

    return (
       <Card>
            <Name>Title: {props.card.name}</Name>
            <Description>Source: {props.card.description}</Description>
            <Price>Ingredients: {props.card.price}</Price>
       </Card>
    )
}

export default ItemCard