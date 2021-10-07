import React from 'react'

export default function Success({success}) {
    return (
        <div className="text-center">
            <div className="alert alert-success" role="alert">
                {success}
            </div>
        </div>
    );
}
