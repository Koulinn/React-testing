import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOptions from "./ScoopOptions";
import ToppingOption from "./ToppingOption";
import { Row } from "react-bootstrap";
import config from "../../config";
import AlertBanner from "../common/AlertBanner";

const { SERVER_URL } = config


function Options({ optionType }) {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);

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

    const optionItems = items.map((item) => {
        return (
            <ItemComponent
                key={item.name}
                name={item.name}
                imagePath={item.imagePath}
            />
        )
    });
    return (
        <Row>
            {optionItems}
        </Row>
    )
}

export default Options;
