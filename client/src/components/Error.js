import React from 'react'

export default function Error({error}) {
    return (
        <div className="text-center">
            <div className="alert alert-danger" role="alert">
                {error}
            </div>
        </div>
    );
}
