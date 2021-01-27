import React from 'react';
import { Link } from 'react-router-dom';

function goBack() {
    return (
    <Link to="/">
    <div>
    <button type="button" className="resBtn btn btn-primary">
    Go Back
    </button>
    </div>
    </Link>  )
}

export default goBack;