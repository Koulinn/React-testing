import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const checkboxInnerText = 'I agree to Terms and Conditions'
export const btnInnerText = 'Confirm Order'


export default function SummaryForm() {
    const [tcChecked, setTcChecked] = useState(false);

    const checkboxLabel = (
        <span>
            I agree to <span style={{ color: 'blue' }}> Terms and Conditions</span>
        </span>
    );

    return (
        <Form>
            <Form.Group controlId="terms-and-conditions">
                <Form.Check
                    type="checkbox"
                    checked={tcChecked}
                    onChange={(e) => setTcChecked(e.target.checked)}
                    label={checkboxLabel}

                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!tcChecked}>
                {btnInnerText}
            </Button>
        </Form>
    );
}