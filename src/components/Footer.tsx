import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-700 p-4 text-white text-center">
      <p>Star Dictionary &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
