import React from 'react';
import './ClassList.css';


function ClassList({courses}) {
    return (
        <div className="class-list">
            {courses.map((course, index) => (
                <div key={index} className="class-box">
                    <span className="class-code">{course.code}</span>
                    <span className="class-name">{course.name}</span>
                </div>
            ))}
        </div>
    )
}

export default ClassList;