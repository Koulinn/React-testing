import React from 'react'
import Alert from 'react-bootstrap/Alert'

function AlertBanner({ message, variant }) {
    const alertMessage = message || "An unexpected error ocurred. Please try again later."
    const alertVariant = variant || "danger"
    return (
        <Alert variant={alertVariant}>
            {alertMessage}
        </Alert>
    )
}

export default AlertBanner
