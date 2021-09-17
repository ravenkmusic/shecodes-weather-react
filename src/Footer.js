import React from 'react';
import "./footer.css";

export default function Footer() {
  return (
    <div>
      This application is{" "}
      <a
        href="https://github.com/ravenkmusic/shecodes-weather-react"
        target="_blank"
        rel="noreferrer"
      >
        open sourced
      </a>{" "}
      by{" "}
      <a href="https://ravenkmusic.com" target="_blank" rel="noreferrer">
        Raven Hendricks
      </a>{" "}
      and hosted through{" "}
      <a href="https://netlify.com" target="_blank" rel="noreferrer">
        Netlify
      </a>
      .
    </div>
  );
}
