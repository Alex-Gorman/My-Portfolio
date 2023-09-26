import React from "react";

function AboutMePage() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const headingStyle = {
        borderBottom: '1px solid #000',
        paddingBottom: '10px',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>About Me</h1>
            <p>Hi, I'm Alex Gorman.</p>
            <p>I'm a third-year computer science honors student at the University of Saskatchewan.</p>
        </div>
    );
}

export default AboutMePage;
