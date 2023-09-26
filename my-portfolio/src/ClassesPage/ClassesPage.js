import React from 'react';
import './ClassesPage.css';

function ClassesPage() {
    const courses = [
        { code: 'CMPT 140:', name: 'Introduction to Creative Computing' },
        { code: 'CMPT 141:', name: 'Introduction to Computer Science' },
        { code: 'CMPT 145:', name: 'Principles of Computer Science' },
        { code: 'CMPT 214:', name: 'Programming Principles and Practice' },
        { code: 'CMPT 215:', name: 'Introduction to Computer Organization and Architecture' },
        { code: 'CMPT 260:', name: 'Mathematical Logic and Computing' },
        { code: 'CMPT 270:', name: 'Developing Object-Oriented Systems' },
        { code: 'CMPT 280:', name: 'Intermediate Data Structures and Algorithms' },
        { code: 'CMPT 317:', name: 'Introduction to Artificial Intelligence' },
        { code: 'CMPT 332:', name: 'Operating Systems Concepts' },
        { code: 'CMPT 340:', name: 'Programming Language Paradigms' },
        { code: 'CMPT 353:', name: 'Full Stack Web Programming' },
        { code: 'CMPT 360:', name: 'Machines and Algorithms' },
        { code: 'CMPT 364:', name: 'Automata and Formal Languages' },
        { code: 'CMPT 370:', name: 'Intermediate Software Engineering' },
        { code: 'CMPT 371:', name: 'Software Management' },
        { code: 'CMPT 381:', name: 'Implementation of Graphical User Interfaces' },
        { code: 'CMPT 434:', name: 'Computer Networks' },
        { code: 'CMPT 436:', name: 'Mobile and Cloud Computing' },
        { code: 'CMPT 442:', name: 'Compiler Design and Implementation'},
        { code: 'CMPT 451:', name: 'Modelling and Algorithms for Biological Systems'},
    ];

    return (
        <div className="courses-container">
            <h3>Courses taken at the University of Saskatchewan</h3>
            <div className="courses-list">
                {courses.map(course => (
                    <div key={course.code} className="course-box">
                        <span className="course-content">
                            <span className="course-code">{course.code}</span>
                            <span className="course-name">{course.name}</span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    ); 
}

export default ClassesPage;

