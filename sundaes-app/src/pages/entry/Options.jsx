import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOptions from "./ScoopOptions";
import { Row } from "react-bootstrap";
import config from "../../config";

const { SERVER_URL } = config


function Options({ optionType }) {
    const [items, setItems] = useState([]);

    const handleRequest = async () => {
        try {
            const res = await axios.get(`${SERVER_URL}${optionType}`);
            setItems(res.data);
        } catch (error) {
        }
    };

    useEffect(() => {
        handleRequest();
    }, [optionType]);

    const ItemComponent = optionType === 'scoops' ? ScoopOptions : null;

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
