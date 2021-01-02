import React from 'react'
import { Link } from 'react-router-dom';
export default function test_item({ test }) {
    return (
        <Link to="#" className='test-item-container'>
            {/* <button onClick={updateTest(test._id)}>edit</button> */}
            <div className="test-item-preview">{test.content}</div>
            <div className="test-item-title">{test.title}</div>
        </Link>
    )
}
