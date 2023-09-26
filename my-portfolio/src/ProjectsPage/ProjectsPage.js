import React from 'react';

function ProjectsPage() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        width: '60%',
    };

    const boxStyle = {
        border: '1px solid grey',
        padding: '20px',
        boxSizing: 'border-box',
        minHeight: '100px',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between' // This will ensure the description and GitHub link do not overlap
    };

    const titleStyle = {
        fontWeight: 'bold',
        marginBottom: '10px'
    };

    const headerStyle = {
        fontSize: '2em',
        borderBottom: '2px solid black',
        paddingBottom: '10px'
    };

    const githubLinkStyle = {
        color: 'blue',
        textDecoration: 'underline',
        cursor: 'pointer'
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Projects</h1>
            <div style={gridStyle}>
                <div style={boxStyle}>
                    <div>
                        <div style={titleStyle}>Project 1</div>
                        <div>Description for project 1...</div>
                    </div>
                    <a href="https://github.com/yourusername/project1" style={githubLinkStyle}>GitHub →</a>
                </div>
                <div style={boxStyle}>
                    <div>
                        <div style={titleStyle}>Project 2</div>
                        <div>Description for project 2...</div>
                    </div>
                    <a href="https://github.com/yourusername/project1" style={githubLinkStyle}>GitHub →</a>
                </div>
                <div style={boxStyle}>
                    <div>
                        <div style={titleStyle}>Project 3</div>
                        <div>Description for project 3...</div>
                    </div>
                    <a href="https://github.com/yourusername/project1" style={githubLinkStyle}>GitHub →</a>
                </div>
                <div style={boxStyle}>
                    <div>
                        <div style={titleStyle}>Project 4</div>
                        <div>Description for project 4...</div>
                    </div>
                    <a href="https://github.com/yourusername/project1" style={githubLinkStyle}>GitHub →</a>
                </div>
                <div style={boxStyle}>
                    <div>
                        <div style={titleStyle}>Project 5</div>
                        <div>Description for project 5...</div>
                    </div>
                    <a href="https://github.com/yourusername/project1" style={githubLinkStyle}>GitHub →</a>
                </div>
                <div style={boxStyle}>
                    <div>
                        <div style={titleStyle}>Project 6</div>
                        <div>Description for project 6...</div>
                    </div>
                    <a href="https://github.com/yourusername/project6" style={githubLinkStyle}>GitHub →</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage;



