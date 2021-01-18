import React from 'react';
import Alert from 'react-bootstrap/Alert'
const ErrorMessage = (props) => {
    return (
            <Alert className="mt-2" variant={`${props.variant} || primary`}>
                 {
                props.children
            }
            </Alert>
    );
};

export default ErrorMessage;