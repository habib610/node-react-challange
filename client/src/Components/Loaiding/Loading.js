import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
const Loading = () => {
    return (
        <div>
            <Spinner animation="grow" variant="primary" />
        </div>
    );
};

export default Loading;