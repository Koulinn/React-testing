import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOptions from "./ScoopOptions";
import ToppingOption from "./ToppingOption";
import { Row } from "react-bootstrap";
import config from "../../config";
import AlertBanner from "../common/AlertBanner";
import { useOrderDetails } from "../../contexts/OrderDetails";



const { SERVER_URL, pricePerItem } = config


function Options({ optionType }) {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    const [orderDetails, updateItemCount] = useOrderDetails()

    const handleRequest = async () => {
        try {
            const res = await axios.get(`${SERVER_URL}${optionType}`);
            setItems(res.data);
        } catch (error) {
            setError(true)
        }
    };

    useEffect(() => {
        handleRequest();
    }, [optionType]); // eslint-disable-line react-hooks/exhaustive-deps

    if (error) {
        return <AlertBanner />
    }
    const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToppingOption;
    const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase()

    const optionItems = items.map((item) => {
        return (
            <ItemComponent
                key={item.name}
                name={item.name}
                imagePath={item.imagePath}
                updateItemCount={(itemName, newItemCount) => updateItemCount(itemName, newItemCount, optionType)}
            />
        )
    });
    return (
        <>
            <h2>{title}</h2>
            <p>{pricePerItem[optionType]} each</p>
            <p>
                {title} total: {orderDetails.totals[optionType]}
            </p>
            <Row>
                {optionItems}
            </Row>
        </>
    )
}

export default Options;
