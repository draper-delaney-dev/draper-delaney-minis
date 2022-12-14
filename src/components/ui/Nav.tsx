import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
  const [navbar, setNavbar] = useState<boolean>();

  return (
    <>
      <nav className="flex sm:justify-between justify-center bg-blue-500 py-6 sm:px-24">
        <NavLink to="/" className="sm:flex text-4xl font-bold p-2 rounded hover:bg-blue-800">Minis</NavLink>
        <div className="lg:flex flex-1 justify-end self-center mr-16 hidden">
          <NavLink to="/about" className="text-xl rounded hover:bg-blue-800 p-2 m-2">About</NavLink>
          <NavLink to="/menu" className="text-xl rounded hover:bg-blue-800 p-2 m-2">Menu</NavLink>
          <NavLink to="/contact" className="text-xl rounded hover:bg-blue-800 p-2 m-2">Contact</NavLink>
        </div>
        <NavLink to="/order" className="lg:flex text-2xl self-center rounded hover:bg-blue-800 p-2 hidden">Order</NavLink>
        <GiHamburgerMenu size="3rem" className="lg:hidden w-20 self-center align-end min-w-max rounded hover:bg-blue-800 hover:cursor-pointer" onClick={() => setNavbar(!navbar)} />
      </nav>
      <div className={`bg-blue-500 self-center lg:hidden ${navbar ? 'grid' : 'hidden'}`}>
        <NavLink to="/about" className="text-xl hover:bg-blue-800 p-2">About</NavLink>
        <NavLink to="/menu" className="text-xl hover:bg-blue-800 p-2">Menu</NavLink>
        <NavLink to="/contact" className="text-xl hover:bg-blue-800 p-2">Contact</NavLink>
      </div>
    </>
  );
};

export default Nav;