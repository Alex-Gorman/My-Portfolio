import React from 'react';
// import logo from 'my-portfolio/src/HomePage/pic.jpg';

function HomePage() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '60px',
    };

    const h1Style = {
        fontSize: '56px', // Adjust the font size as needed
        color: 'purple',
        margin: '0', // Remove any default margin
        padding: '0', // Remove any default padding
    };

    const h2Style = {
        fontSize: '38px', // Adjust the font size as needed
        margin: '0', // Remove any default margin
        padding: '0', // Remove any default padding
    };

    const pStyle = {
        fontSize: '20px', // Adjust the font size as needed
        maxWidth: '600px', // Set a maximum width for the <p> element
        textAlign: 'center', // Center-align the text within the <p>
    };

    const skillsStyle = {
        marginTop: '20px', // Adjust the margin as needed
        borderTop: '1px solid #ccc', // Add a border at the top for the line
        paddingTop: '20px', // Add some space above the "Technical Skills" header
    };

    const skillsHeaderStyle = {
        fontSize: '24px', // Adjust the font size as needed
        fontWeight: 'bold', // Make the header bold
    };

    const skillsListStyle = {
        fontSize: '18px', // Adjust the font size as needed
        marginBottom: '10px', // Add space between each skill item
    };

    return (
        <div style={containerStyle}>
            {/* <img src={logo} alt="Alex Gorman" />  */}
            {/* <img src={require("my-portfolio/src/HomePage/pic.jpg")} /> */}
            <h2 style={h2Style}>Hello, I'm</h2>
            <h1 style={h1Style}>Alex Gorman</h1>
            <p style={pStyle}>I am a Computer Science Honours student at the University of Saskatchewan and an aspiring software engineer.</p>
            <div style={skillsStyle}>
                <h3 style={skillsHeaderStyle}>Technical Skills</h3>
                <ul>
                    <li style={skillsListStyle}>Languages: Python, Java, C, JavaScript, HTML, CSS, Scala</li>
                    <li style={skillsListStyle}>Frameworks and Libraries: React.js, Node.js</li>
                    <li style={skillsListStyle}>Tools: Git, Linux, Docker</li>
                </ul>
            </div>
        </div>
    );
}

export default HomePage;




