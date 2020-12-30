import React from 'react'

export default function test_item({ test }) {
    return (
        <div className='test-item-container'>
            <div className="test-item-preview">{test.content}</div>
            <div className="test-item-title">{test.title}</div>
        </div>
    )
}
