import React from 'react'
import Col from 'react-bootstrap/Col'
import config from '../../config'

const { SERVER_URL } = config

function ToppingOption({ name, imagePath }) {
    return (
        <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{ textAlign: 'center' }}
        >
            <img
                style={{ width: '75%' }}
                src={`${SERVER_URL}${imagePath}`}
                alt={`${name} topping`}
            />
        </Col>
    )
}

export default ToppingOption
