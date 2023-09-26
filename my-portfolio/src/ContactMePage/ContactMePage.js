import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

function ContactMePage() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const listStyle = {
        listStyleType: 'none',
        textAlign: 'left',
    };

    const purpleText = {
        color: 'purple',
    };

    const listItemStyle = {
        padding: '8px',
    };

    const iconStyle = {
        marginRight: '8px', // Adjust the margin to add space between icon and text
    };

    return (
        <div style={containerStyle}>
            <h2>Contact Info</h2>
            <h3>Feel free to contact me</h3>
            <ul style={listStyle}>
                <li style={listItemStyle}>
                    <i className="fa fa-envelope" style={iconStyle}></i>
                    <strong style={purpleText}>Email:</strong> abcdefg@gmail.com
                </li>
                <li style={listItemStyle}>
                    <i className="fa fa-phone" style={iconStyle}></i>
                    <strong style={purpleText}>Phone:</strong> (123) 456-7890
                </li>
                <li style={listItemStyle}>
                    <i className="fa fa-github" style={iconStyle}></i>
                    <strong style={purpleText}>GitHub:</strong>{' '}
                    <a href="https://github.com/Alex-Gorman" target="_blank" rel="noopener noreferrer">
                        github.com/Alex-Gorman
                    </a>
                </li>
                <li style={listItemStyle}>
                    <i className="fa fa-linkedin" style={iconStyle}></i>
                    <strong style={purpleText}>LinkedIn:</strong>{' '}
                    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/your-profile
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default ContactMePage;
