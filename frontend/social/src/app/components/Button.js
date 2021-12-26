import React from 'react';
import { Button } from 'react-bootstrap';

export default props => {
    return (
        <div className="d-flex justify-content-center">
            <Button variant={props.type} style={props.style}
                onClick={props.click}
            >
                View Person Profile
            </Button>
        </div>
    )
}