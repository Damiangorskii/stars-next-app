import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <span className="text-xl font-bold cursor-pointer">Star Dictionary</span>
        </Link>
        <div>
          <Link href="/stars/create" passHref>
            <span className="p-2 cursor-pointer">Add Star</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;