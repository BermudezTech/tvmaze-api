import React from "react";

export default function Footer() {
  const textStyle = {
    fontFamily: 'Roboto',
    fontSize: '1rem',
    color: 'white',
  }
  const footerStyle = {
    position: 'fixed',
    left: '0%',
    bottom:'0%',
    background: 'rgba(5,0,0,0.3)',
    backdropFilter: 'blur(20px)',
    width: '100%',
    padding: '0px 20px',
    boxSizing: 'border-box'
  }
  return (
    <>
      <div style={footerStyle}>
        <p style={textStyle}>Made by José Eduardo Bermúdez Garavito | React JS</p>
      </div>
    </>
  );
}
