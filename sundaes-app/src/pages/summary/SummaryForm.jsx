import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export const checkboxInnerText = "I agree to Terms and Conditions";
export const btnInnerText = "Confirm Order";
export const popOverInnerText = "No ice cream will actually be delivered";
export const termsConditionsText = "Terms and Conditions";

export default function SummaryForm() {
    const [tcChecked, setTcChecked] = useState(false);

    const popover = <Popover id='popover-basic'>{popOverInnerText}</Popover>;
    const checkboxLabel = (
        <span>
            I agree to
            <OverlayTrigger placement='right' overlay={popover}>
                <span style={{ color: "blue" }}>{termsConditionsText}</span>
            </OverlayTrigger>
        </span>
    );

    return (
        <Form>
            <Form.Group controlId='terms-and-conditions'>
                <Form.Check
                    type='checkbox'
                    checked={tcChecked}
                    onChange={(e) => setTcChecked(e.target.checked)}
                    label={checkboxLabel}
                />
            </Form.Group>
            <Button variant='primary' type='submit' disabled={!tcChecked}>
                {btnInnerText}
            </Button>
        </Form>
    );
}
