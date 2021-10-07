import React from 'react'

export default function Loading() {
    return (
        <div className="text-center">
            <div className="spinner-border m-5" role="status" style={{width:'50px', height:'50px'}}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
