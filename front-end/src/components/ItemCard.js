import React from "react";
import styled from "styled-components";
import '../App.css'

const ItemContainer = styled.div`
    display: flex;
    justify-content: center;
     align-items: center;
     margin-top: 40px;
`;

const Card = styled.div`
    background: url('https://image.freepik.com/free-vector/traditional-african-art-background_40847-534.jpg');
    background-position: 50% 50%;
    height: 300px;
    border: 4px solid black;
    margin-top: 5px;
    text-align: center;
    width: 30%;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 0 4px 25px 0 rgba(0,0,0,0.8);
    transition: 0.3s;
    font-size: 24px;
    color: white;

    &:hover {
        background: url('https://images.assetsdelivery.com/compings_v2/tarapong/tarapong1508/tarapong150800006.jpg');
        background-position: 50% 50%
    }
`;

const Name = styled.p`
    margin-bottom: 60px;
`;

const Description = styled.p`
    margin-bottom: 40px
`;

const Price = styled.div`
`;


const ItemCard = (props) => {
    console.log("thrown text", props)
    

    return (
        <ItemContainer>
       <Card>
            <Name>Name: {props.item.name}</Name>
            <Description>Description: {props.item.description}</Description>
            <Price>Price: ${props.item.price}</Price>
       </Card>
       </ItemContainer>
    )
}

export default ItemCard